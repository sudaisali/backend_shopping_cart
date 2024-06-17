'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    static associate(models) {
      OrderDetail.belongsTo(models.Order , {foreignKey:'order_id'})
      OrderDetail.belongsTo(models.Product , {foreignKey:'product_id'})
      
    }
  }
  OrderDetail.init({
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    total_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'OrderDetail',
    tableName:'OrderDetail',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });

  return OrderDetail;
};