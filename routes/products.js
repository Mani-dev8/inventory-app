const express = require('express');
const { newProduct, getProduct, deleteProduct, updatedProduct } = require('../controllers/productsController');

const router = express.Router()

router.post('/products/new', newProduct)
router.get('/products/get',getProduct )
router.delete('/products/:id', deleteProduct);
router.put('/products/update/:id', updatedProduct);
module.exports = router