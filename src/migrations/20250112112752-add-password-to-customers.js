'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const tableDescription = await queryInterface.describeTable('Customers');

    if (!tableDescription.password) {
      await queryInterface.addColumn('Customers', 'password', {
        type: Sequelize.STRING,
        allowNull: false,
      });
    }
  },

  async down(queryInterface, Sequelize) {
    const tableDescription = await queryInterface.describeTable('Customers');

    if (tableDescription.password) {
      await queryInterface.removeColumn('Customers', 'password');
    }
  },
};
