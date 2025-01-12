'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    const brands = [
      { name: 'Apple', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Samsung', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nike', createdAt: new Date(), updatedAt: new Date() },
      { name: 'IKEA', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Lego', createdAt: new Date(), updatedAt: new Date() },
    ];
    

    await queryInterface.bulkInsert('Brands', brands, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Brands', null, {});
  },
};
