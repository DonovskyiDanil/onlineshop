'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Types', 'brandId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Brands',  
        key: 'id',        
      },
      onDelete: 'SET NULL', 
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Types', 'brandId');
  },
};
