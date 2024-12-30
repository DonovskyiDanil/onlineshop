module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Customer.associate = (models) => {
    Customer.hasMany(models.Order, { foreignKey: 'customerId' });
  };
  return Customer;
};