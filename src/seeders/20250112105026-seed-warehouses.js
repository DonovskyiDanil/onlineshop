'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Warehouses', [
      { name: 'Main Warehouse', location: 'New York', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Secondary Warehouse', location: 'Los Angeles', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Backup Warehouse', location: 'Chicago', createdAt: new Date(), updatedAt: new Date() },
      { name: 'East Coast Warehouse', location: 'Boston', createdAt: new Date(), updatedAt: new Date() },
      { name: 'West Coast Warehouse', location: 'San Francisco', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Warehouses', null, {});
  },
};
