const express = require('express');
const customerRoutes = require('./customers');
const productRoutes = require('./products');
// Добавьте маршруты для других сущностей

const router = express.Router();

router.use('/customers', customerRoutes);
router.use('/products', productRoutes);
// Добавьте остальные маршруты

module.exports = router;
