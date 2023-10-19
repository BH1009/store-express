const Product = require('../models/product.model')

exports.showProducts = async (req, res, next) => {
  const allProducts = await Product.find()
  res.render('index', {allProducts})
  next()
}

exports.editProduct = async (req, res) => {
  const product = await Product.findOne({_id: req.params.id})
  res.render('editform', {product})
}