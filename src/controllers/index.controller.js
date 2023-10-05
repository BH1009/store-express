const Product = require('../models/product.model')

exports.showProducts = async (req, res) => {
  const allProducts = await Product.find()
  // res.json(allProducts)
  res.render('index', {allProducts})
}