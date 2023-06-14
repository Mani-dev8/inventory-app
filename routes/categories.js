const express = require('express');
const { newCategory, getCategory, deleteCategory, updatedCategory } = require('../controllers/categoriesController');

const router = express.Router()

router.post('/categories/new', newCategory)
router.get('/categories/get', getCategory)
router.delete('/categories/:id', deleteCategory);

router.put('/categories/update/:id', updatedCategory);

module.exports = router