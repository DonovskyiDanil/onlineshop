'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      { status: 'Pending', customerId: 1, createdAt: new Date(), updatedAt: new Date() },
      { status: 'Completed', customerId: 2, createdAt: new Date(), updatedAt: new Date() },
      { status: 'Cancelled', customerId: 3, createdAt: new Date(), updatedAt: new Date() },
      { status: 'Processing', customerId: 4, createdAt: new Date(), updatedAt: new Date() },
      { status: 'Shipped', customerId: 5, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
