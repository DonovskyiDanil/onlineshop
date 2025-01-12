module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Brand, { foreignKey: 'brandId', as: 'brand' });
    Product.belongsTo(models.Type, { foreignKey: 'typeId', as: 'type' });
    Product.hasMany(models.OrderItem, { foreignKey: 'productId', as: 'orderItems' });
    Product.belongsTo(models.Warehouse, { foreignKey: 'warehouseId', as: 'warehouse' });
    Product.belongsTo(models.Category, { foreignKey: 'categoryId', as: 'category' });
  };

  return Product;
};
