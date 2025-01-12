module.exports = (sequelize, DataTypes) => {
  const Warehouse = sequelize.define('Warehouse', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Warehouse.associate = (models) => {
    Warehouse.belongsTo(models.Category, { foreignKey: 'categoryId', as: 'category' });
  };

  return Warehouse;
};
