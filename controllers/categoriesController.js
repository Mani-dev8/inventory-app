const Category = require('../models/productModel')
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