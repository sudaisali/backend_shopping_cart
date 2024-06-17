'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shipping extends Model {
    static associate(models) {
      Shipping.belongsTo(models.Customer, { foreignKey: 'customer_id' });
      Shipping.hasOne(models.Order, { foreignKey: 'shipping_id' });

    }
  }
  Shipping.init({
    customer_id: DataTypes.INTEGER,
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Shipping',
    tableName:'Shipping',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return Shipping;
};