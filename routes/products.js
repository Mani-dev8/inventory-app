const express = require('express');
const { newProduct, getProduct } = require('../controllers/productsController');

const router = express.Router()

router.post('/products/new', newProduct)
router.get('/products/get',getProduct )

module.exports = router