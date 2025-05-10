'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPasswords = await Promise.all([
      bcrypt.hash('password123', 10),
      bcrypt.hash('12345678', 10),
      bcrypt.hash('qwertyui', 10),
      bcrypt.hash('letmein123', 10),
      bcrypt.hash('mypassword', 10),
    ]);

    await queryInterface.bulkInsert('Customers', [
      { name: 'John Doe', email: 'john1@example.com', password: hashedPasswords[0], createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jane Smith', email: 'jane1@example.com', password: hashedPasswords[1], createdAt: new Date(), updatedAt: new Date() },
      { name: 'Alice Johnson', email: 'alice1@example.com', password: hashedPasswords[2], createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bob Brown', email: 'bob1@example.com', password: hashedPasswords[3], createdAt: new Date(), updatedAt: new Date() },
      { name: 'Charlie Black', email: 'charlie1@example.com', password: hashedPasswords[4], createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Customers', null, {});
  },
};
