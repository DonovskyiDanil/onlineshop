module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brandId: { 
      type: DataTypes.INTEGER,
      allowNull: true,  
    },
  });

  Type.associate = (models) => {
    Type.hasMany(models.Product, { foreignKey: 'typeId', as: 'products' }); 
    Type.belongsTo(models.Brand, { foreignKey: 'brandId', as: 'brand' });
  };

  return Type;
};
