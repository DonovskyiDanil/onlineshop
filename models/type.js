module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Type.associate = (models) => {
    Type.hasMany(models.Product, { foreignKey: 'typeId' });
  };

  return Type;
};
