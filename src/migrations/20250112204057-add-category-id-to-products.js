'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const table = await queryInterface.describeTable('Products');
    if (!table.categoryId) {
      await queryInterface.addColumn('Products', 'categoryId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories', 
          key: 'id', 
        },
        onDelete: 'CASCADE',
        allowNull: true,
      });
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Products', 'categoryId');
  },
};
