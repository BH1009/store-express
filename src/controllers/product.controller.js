const Product = require('../models/product.model')

exports.allProducts = async (req, res) => {
    const allProducts = await Product.find()
    res.json(allProducts) 
}

exports.showProduct = async (req, res) => {
    const product = await Product.findOne({_id: req.params.id})
    res.json(product)
}

exports.createProduct = async (req, res) => {
    const newProduct = new Product(req.body)
    await newProduct.save()
    // res.json(newProduct)
    res.redirect('/')
}

exports.updateProduct = async (req, res) => {
    const productModified = await Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    res.json(productModified)
}

exports.deleteProduct = async (req, res) => {
    const productRemoved = await Product.findOneAndDelete({_id: req.params.id})
    // await Product.findOneAndDelete({_id: req.params.id})
    res.json(productRemoved)
}