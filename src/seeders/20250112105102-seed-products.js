'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const brands = await queryInterface.sequelize.query('SELECT id FROM "Brands"', { type: Sequelize.QueryTypes.SELECT });
    const categories = await queryInterface.sequelize.query('SELECT id FROM "Categories"', { type: Sequelize.QueryTypes.SELECT });

    const products = [
      {
        name: 'iPhone 14',
        brandId: brands[0].id,
        categoryId: categories[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'The Great Gatsby',
        brandId: null,
        categoryId: categories[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'T-Shirt',
        brandId: brands[1].id,
        categoryId: categories[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Samsung Galaxy S21',
        brandId: brands[1].id,
        categoryId: categories[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nike Air Max',
        brandId: brands[2].id,
        categoryId: categories[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Products', products); 
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});  
  },
};
