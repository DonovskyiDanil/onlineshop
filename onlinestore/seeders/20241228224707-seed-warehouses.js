'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('Warehouses', [
 {name: 'Warehouses 1', location: 'Kyiv', createdAt: new Date(), updatedAt: new Date()},
 {name: 'Warehouses 2', location: 'Kharkov', createdAt: new Date(), updatedAt: new Date()},
 {name: 'Warehouses 3', location: 'Dnepropetrovsk', createdAt: new Date(), updatedAt: new Date()},
 {name: 'Warehouses 4', location: 'Zaporozhye', createdAt: new Date(), updatedAt: new Date()},
 {name: 'Warehouses 5', location: 'Odessa', createdAt: new Date(), updatedAt: new Date()},
]);
  },

  async down (queryInterface, Sequelize) {
await queryInterface.bulkDelete( 'Warehouses', null, {});
  },
};




