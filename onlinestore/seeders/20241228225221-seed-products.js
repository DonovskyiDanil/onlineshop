'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('Products', [
{ name: 'Samsung TV', price: 50000, stock: 10, description: '4k UHD TV', categoryId: 1, brandId: 1, typeId: 1, warehouseId: 1, createdAt: new Date(), updatedAt: new Date()},
{ name: 'Smartphone iPhone', price: 80000, stock: 15, description: 'iPhone 14 Pro', categoryId: 1, brandId: 2, typeId: 2, warehouseId: 2, createdAt: new Date(), updatedAt: new Date()},
{ name: 'Refrigerator LG', price: 40000, stock: 5, description: 'Dual Chamber', categoryId: 2, brandId: 3, typeId: 3, warehouseId: 3, createdAt: new Date(), updatedAt: new Date()},
{ name: 'Computer ASUS', price: 60000, stock: 8, description: 'Gaming', categoryId: 3, brandId: 4, typeId: 4, warehouseId: 4, createdAt: new Date(), updatedAt: new Date()},
{ name: 'Washing Machine Panasonic', price: 35000, stock: 12, description: 'Automatic', categoryId: 2, brandId: 5, typeId: 5, warehouseId: 5, createdAt: new Date(), updatedAt: new Date()},
]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});

  },
};


