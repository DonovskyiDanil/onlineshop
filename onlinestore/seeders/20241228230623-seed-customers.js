'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Customers', [
    {name: 'Ivan Ivanov', email: 'ivan@gmail.com', phone: '0667894557', createdAt: new Date(), updatedAt: new Date ()},
    {name: 'Peter Petrov', email: 'peter@gmail.com', phone: '0685534553', createdAt: new Date(), updatedAt: new Date ()},
    {name: 'Anna Smirnova', email: 'anna@gmail.com', phone: '0557758493', createdAt: new Date(), updatedAt: new Date ()},
    {name: 'Maria Kuznetsova', email: 'maria@gmail.com', phone: '0544778822', createdAt: new Date(), updatedAt: new Date ()},
    {name: 'Dmitry Popov', email: 'dmitry@gmail.com', phone: '0873938374', createdAt: new Date(), updatedAt: new Date ()},
    ]);
  },

  async down (queryInterface, Sequelize) {
await queryInterface.bulkDelete('Customes', null, {});
  },
};




 


