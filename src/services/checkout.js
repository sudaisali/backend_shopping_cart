const Model = require('../database/models')
const { Sequelize } = require('sequelize');
const stripe = require('stripe')(process.env.STRIPE_SECRETE_KEY)




const checkProductQuantity = async (products) => {
    const productIds = products.map(product => product.id);
    const dbProducts = await Model.Product.findAll({
        where: { id: { [Sequelize.Op.in]: productIds } }
    });
    for (const product of products) {
        const dbProduct = dbProducts.find(dbProd => dbProd.id === product.id);
        if (!dbProduct || dbProduct.quantity < product.quantity) {
            return false;
        }
    }
    return true;
};


const insertOrderData = async (orderData) => {
    try {
        const { user_name, email  , address , state , city , phone_number , products} = orderData;

        let newCustomer = await Model.Customer.findOne({ where: { email } });
        if(!newCustomer){
            newCustomer = await Model.Customer.create({
                user_name,
                email
            });
        }
        
        const newCustomerShipping = await Model.Shipping.create({
            'customer_id':newCustomer.id,
            address,
            state,
            city,
            phone_number

        })

        const total_price = OrderTotalPrice(products)

        const newCustomerOrder = await Model.Order.create({
            'shipping_id':newCustomerShipping.id,
            'customer_id':newCustomer.id,
            'order_status':'pending',
             total_price
        })

        for(const product of products){
            updateProductQuantity(product.id , product.quantity)
           await Model.OrderDetail.create({
             order_id:newCustomerOrder.id,
             product_id:product.id,
             quantity:product.quantity,
             product_price:product.price,
             total_price: (product.quantity*product.price).toFixed(2)
           })
        }
       
        return newCustomerOrder
    } catch (error) {
        throw error
        
    }
};


   const OrderTotalPrice = (product)=>{
    return product.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
   }



   const updateProductQuantity = async (productId, orderedQuantity) => {
    try {
        const product = await Model.Product.findByPk(productId);
        if(!product){
            throw 'No product Found'
        }
        const updatedQuantity = product.quantity - orderedQuantity;
        await product.update({ quantity: updatedQuantity });
        return true; 
    } catch (error) {
        throw error;
    }
};


  
  const createCheckoutSession = async (value , order) => {
    try {        
        const session = await stripe.checkout.sessions.create({
            ui_mode: 'embedded',
            customer_email: value.email,
            metadata: {
                order_data : order.id
            },
            line_items: value.products.map(product => ({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: product.name,
                        images: [product.image],
                    },
                    unit_amount: product.price * 100, 
                },
                quantity: product.quantity,
            })),
            mode: 'payment',
            return_url: `${process.env.RETURN_BASE_URL}/return?session_id={CHECKOUT_SESSION_ID}`,
        });

        return { clientSecret: session.client_secret };
    } catch (error) {
        console.log(error)
        throw (`Failed to create checkout session: ${error.message}`);
    }
};


const sessionStatusData = async(session_id)=>{
    try{
        const session = await stripe.checkout.sessions.retrieve(session_id);
        return session
    }
    catch(error){
        throw(error)

    }
}


const updateOrderStatus = async (orderId) => {
    try {
        const order = await Model.Order.findByPk(orderId);
        if (!order) {
            throw 'Order not found';
        }
        if (order.order_status !== 'pending') {
            throw 'Order status cannot be updated';
        }

        await order.update({ order_status: 'in_process' });
        return true;
    } catch (error) {
        throw error;
    }
};









module.exports = { checkProductQuantity, insertOrderData , createCheckoutSession , sessionStatusData , updateOrderStatus}