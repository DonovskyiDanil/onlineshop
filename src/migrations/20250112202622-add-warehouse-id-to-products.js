'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Products', 'warehouseId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Warehouses', 
        key: 'id', 
      },
      onDelete: 'CASCADE', 
      allowNull: true, 
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Products', 'warehouseId');
  },
};
