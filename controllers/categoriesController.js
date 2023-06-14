const Category = require('../models/categoryModel')
exports.newCategory = async (req, res) => {
    try {
        const { title, image, description } = req.body
        const newCategory = new Category({ title, image, description })
        await newCategory.save()
        res.status(200).json({ message: "added successfully" })
    } catch (error) {
        res.status(400).json({ error: "internal server error" })
    }
}
exports.getCategory = async (req, res) => {
    try {
        const data = await Category.find({})
        res.status(200).json({ data: data, message: "success" })
    } catch (error) {
        res.status(400).json({ error: "internal server error" })
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("🚀 ~ file: categoriesController.js:24 ~ exports.deleteCategory ~ id   ~~~  :", id)
        const category = await Category.findById(id);
        console.log("🚀 ~ file: categoriesController.js:27 ~ exports.deleteCategory ~ category   ~~~  :", category)

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        await category.deleteOne();
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        console.error('Error deleting category:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

exports.updatedCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, image, description } = req.body;

        const category = await Category.findById(id);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        category.title = title || category.title;
        category.image = image || category.image;
        category.description = description || category.description;

        await category.save();

        res.status(200).json({ message: 'Category updated successfully', data: category });
    } catch (error) {
        console.error('Error updating category:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
}