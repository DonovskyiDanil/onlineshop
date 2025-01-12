module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    quantity: DataTypes.INTEGER,
  });

  OrderItem.associate = (models) => {
    OrderItem.belongsTo(models.Order, {foreignKey: 'orderId', as: 'order'});
    OrderItem.belongsTo(models.Product, {foreignKey: 'productId', as: 'product'});
  };

  return OrderItem;
};
