module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    code: DataTypes.STRING,
    date: DataTypes.DATE,
    paid: DataTypes.BOOLEAN,
  });

  Order.associate = (models) => {
    Order.belongsTo(models.Customer, { foreignKey: 'customerId', as: 'customer' });
    Order.hasMany(models.OrderItem, {foreignKey: 'orderId', as: 'orderItems'});
  };

  return Order;
};
