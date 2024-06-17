const { checkProductQuantity, insertOrderData, createCheckoutSession, sessionStatusData, updateOrderStatus } = require('../services/checkout');
const { failureResponse, successResponse } = require('../utils/response');
const { validator } = require('../utils/validation')
const stripe = require('stripe')(process.env.STRIPE_SECRETE_KEY)
const { sendMail } = require('../utils/emailer')


const checkout = async (req, res) => {

    const payload = req.body;
    const { error, value } = validator.validate(payload);
    if (error) {
        return failureResponse(res, 400, error.message);
    }
    try {
        const isValidQuantity = await checkProductQuantity(value.products);
        if (!isValidQuantity) {
            return failureResponse(res, 400, 'Please provide valid products and quantities');
        }

        const insertOrder = await insertOrderData(value);
        const session = await createCheckoutSession(value, insertOrder);

        return res.json(session);

    } catch (error) {
        if (error.name == 'SequelizeUniqueConstraintError')
            return failureResponse(res, 400, error.errors[0].message);
        return failureResponse(res, 400, error);


    }
};

const sessionSatus = async (req, res) => {
    const session_id = req.query.session_id
    const session = await sessionStatusData(session_id)
    let session_data = {
        sessionObj: session,
        status: session.status,
        customer_email: session.customer_details.email
    }
    return res.json({ "session": session_data })

}


const stripwebhook = async (req, res) => {
    try{
    const sig = req.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECERET;
    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        console.error('Webhook signature verification failed.', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    switch (event.type) {

        case 'checkout.session.completed':
            updateOrderStatus(event.data.object.metadata.order_data)
            sendMail(event.data.object.customer_email)
        case 'payment_intent.succeeded':
            break;
        case 'payment_intent.created':

            break;
        case 'payment_intent.failed':
            break;
        case 'charge.succeeded':
            break;
        case 'charge.updated':
            break;
        default:
            console.log(event.type)
            break;
    }
    res.json({ received: true });
}catch(error){
    throw error
}
}




module.exports = { checkout, createCheckoutSession, sessionSatus, stripwebhook }