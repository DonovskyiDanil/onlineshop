'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Warehouses', 'categoryId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Categories', 
        key: 'id',           
      },
      onDelete: 'SET NULL',  
      allowNull: true,        
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Warehouses', 'categoryId');
  },
};
