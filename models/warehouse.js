module.exports = (sequelize, DataTypes) => {
  const Warehouse = sequelize.define('Warehouse', {
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Warehouse.associate = (models) => {
    Warehouse.hasMany(models.Product, { foreignKey: 'warehouseId' });
  };

  return Warehouse;
};
