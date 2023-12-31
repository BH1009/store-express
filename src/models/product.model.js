const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  currency: Number
})

const Product = mongoose.model('products', productSchema)

module.exports = Product