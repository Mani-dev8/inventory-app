const express = require('express');
const { newCategory, getCategory } = require('../controllers/categoriesController');

const router = express.Router()

router.post('/categories/new', newCategory)
router.get('/categories/get', getCategory)

module.exports = router