const Product = require('../models/productModel')
exports.newProduct = async (req, res) => {
    try {
        const { title, image, description, category, weight, dimensions, quantity } = req.body
        const newProduct = new Product({ title, image, description, category, weight, dimensions, quantity })
        await newProduct.save()
        res.status(200).json({ message: "added successfully" })
    } catch (error) {
        res.status(400).json({ error: "internal server error" })
    }
}
exports.getProduct = async (req, res) => {
    try {
        const data=await Product.find({})
        res.status(200).json({data:data, message: "success" })
    } catch (error) {
        res.status(400).json({ error: "internal server error" })
    }
}