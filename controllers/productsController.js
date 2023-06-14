const Product = require('../models/productModel')
exports.newProduct = async (req, res) => {
    try {
        const { title, image, description, category, weight, dimensions, quantity } = req.body
        console.log("🚀 ~ file: productsController.js:5 ~ exports.newProduct= ~ { title, image, description, category, weight, dimensions, quantity }   ~~~  :", { title, image, description, category, weight, dimensions, quantity })
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


exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("🚀 ~ file: categoriesController.js:24 ~ exports.deleteProduct ~ id   ~~~  :", id)
        const product = await Product.findById(id);
        console.log("🚀 ~ file: categoriesController.js:27 ~ exports.deleteProduct ~ product   ~~~  :", product)

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        await product.deleteOne();
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

exports.updatedProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, image, description, category, weight, dimensions, quantity } = req.body;

        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        product.title = title || product.title;
        product.image = image || product.image;
        product.description = description || product.description;
        product.category = category || product.category;
        product.weight = weight || product.weight;
        product.dimensions = dimensions || product.dimensions;
        product.quantity = quantity || product.quantity;

        await product.save();

        res.status(200).json({ message: 'Product updated successfully', data: product });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
}