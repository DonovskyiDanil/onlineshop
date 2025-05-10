'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Types', [
      { name: 'Smartphone', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Laptop', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Wearable', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Home Appliance', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Gadget', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Types', null, {});
  },
};
