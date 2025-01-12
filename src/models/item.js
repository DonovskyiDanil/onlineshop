module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
      price: DataTypes.FLOAT,
    });
  
    Item.associate = (models) => {
      Item.belongsTo(models.Category, { foreignKey: 'categ_id' });
      Item.belongsTo(models.Type, { foreignKey: 'type_id' });
      Item.belongsTo(models.Brand, { foreignKey: 'brand_id' });
      Item.belongsTo(models.Model, { foreignKey: 'model_id' });
      Item.belongsTo(models.Store, { foreignKey: 'store_id' });
      Item.belongsToMany(models.Order, { through: 'OrderItems', foreignKey: 'item_id' });
    };
  
    return Item;
  };
  