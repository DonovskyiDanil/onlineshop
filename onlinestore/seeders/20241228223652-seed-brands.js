'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Brands', [
      { name: 'Samsung', createdAt: new Date(), updatedAt: new Date()},
      { name: 'Apple', createdAt: new Date(), updatedAt: new Date()},
      { name: 'LG', createdAt: new Date(), updatedAt: new Date()},
      { name: 'Sony', createdAt: new Date(), updatedAt: new Date()},
      { name: 'Panasonic', createdAt: new Date(), updatedAt: new Date()},
    ]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Brands', null, {});
  },
};
