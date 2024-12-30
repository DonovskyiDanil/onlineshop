'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('Orders', [
  {date: new Date(), totalPrice: 100000, status: 'Accepted', customerId: 1, createdAt: new Date(), updatedAt: new Date()},
  {date: new Date(), totalPrice: 80000, status: 'Processed', customerId: 2, createdAt: new Date(), updatedAt: new Date()},
  {date: new Date(), totalPrice: 60000, status: 'Delivered', customerId: 3, createdAt: new Date(), updatedAt: new Date()},
  {date: new Date(), totalPrice: 50000, status: 'Waiting',   customerId: 4, createdAt: new Date(), updatedAt: new Date()},
  {date: new Date(), totalPrice: 75000, status: 'Canceled', customerId: 5, createdAt: new Date(), updatedAt: new Date()},
]);

},

  async down (queryInterface, Sequelize) {
await queryInterface.bulkDelete('Orders', null, {})
  },
};






