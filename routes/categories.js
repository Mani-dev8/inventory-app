const express = require('express');
const { newCategory, getCategory, deleteCategory } = require('../controllers/categoriesController');

const router = express.Router()

router.post('/categories/new', newCategory)
router.get('/categories/get', getCategory)
router.delete('/categories/:id', deleteCategory);

module.exports = router