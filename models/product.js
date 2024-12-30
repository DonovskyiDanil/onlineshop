// product.js
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    // поля модели, например:
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    // другие поля
  });

  Product.associate = (models) => {
    // Убедитесь, что модель Category или другая модель правильно передана
    Product.belongsTo(models.Category, { foreignKey: 'categoryId' }); // Пример
  };

  return Product;
};
