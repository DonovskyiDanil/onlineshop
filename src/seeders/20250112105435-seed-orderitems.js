'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('OrderItems', [
      { orderId: 1, productId: 1, quantity: 2, price: 1998, createdAt: new Date(), updatedAt: new Date() },
      { orderId: 2, productId: 2, quantity: 1, price: 20, createdAt: new Date(), updatedAt: new Date() },
      { orderId: 3, productId: 3, quantity: 3, price: 45, createdAt: new Date(), updatedAt: new Date() },
      { orderId: 4, productId: 4, quantity: 1, price: 1200, createdAt: new Date(), updatedAt: new Date() },
      { orderId: 5, productId: 5, quantity: 5, price: 50, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('OrderItems', null, {});
  },
};
