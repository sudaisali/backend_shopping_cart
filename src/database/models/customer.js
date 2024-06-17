const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      Customer.hasMany(models.Shipping, { foreignKey: 'customer_id' });
      Customer.hasMany(models.Order, { foreignKey: 'customer_id' });

    }
  }
  Customer.init({
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true

    },
  }, {
    sequelize,
    modelName: 'Customer',
    tableName:'Customer',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Customer;
};