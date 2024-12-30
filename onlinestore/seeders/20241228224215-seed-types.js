'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 await queryInterface.bulkInsert('Types', [
  {name:'TV', createdAt: new Date(), updatedAt: new Date ()},
  {name:'Smartphones', createdAt: new Date(), updatedAt: new Date ()},
  {name:'Refrigerators', createdAt: new Date(), updatedAt: new Date ()},
  {name:'Computers', createdAt: new Date(), updatedAt: new Date ()},
  {name:'Washing machines', createdAt: new Date(), updatedAt: new Date ()},
 ])
  },

  async down (queryInterface, Sequelize) {
await queryInterface.bulkDelete('Types', null, {});
  },
};




