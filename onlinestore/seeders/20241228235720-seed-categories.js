'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('Categories', [
  {name: 'Electronics', createdAt: new Date(), updatedAt: new Date()},
  {name: 'Household appliances', createdAt: new Date(), updatedAt: new Date()},
  {name: 'Computers and components', createdAt: new Date(), updatedAt: new Date()},
  {name: 'Sporting goods', createdAt: new Date(), updatedAt: new Date()},
  {name: 'Plumbing', createdAt: new Date(), updatedAt: new Date()},
]);
  },

  async down (queryInterface, Sequelize) {
await queryInterface.bulkDelete('Categories', null, {});
  },
};




