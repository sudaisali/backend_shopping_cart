'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.Customer, { foreignKey: 'customer_id' });
      Order.belongsTo(models.Shipping, { foreignKey: 'shipping_id' });
      Order.hasMany(models.OrderDetail, { foreignKey: 'order_id' });
    }
  }
  Order.init({
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    shipping_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    order_status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'Order',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Order;
};