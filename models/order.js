module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  });

  Order.associate = (models) => {
    Order.belongsTo(models.Customer, { foreignKey: 'customerId' });
  };

  return Order;
};
