const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});

  Customer.beforeCreate(async (customer, options) => {
    const hashedPassword = await bcrypt.hash(customer.password, 10);
    customer.password = hashedPassword;
  });

  return Customer;
};
