
const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brandController');  

router.get('/', brandController.getBrands); 
router.get('/:id', brandController.getById); 
router.post('/', brandController.create); 
router.put('/:id', brandController.update); 
router.delete('/:id', brandController.deleteBrand); 

module.exports = router;
