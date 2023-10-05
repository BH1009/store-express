const productRouter = require('express').Router()
const {createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller')

productRouter.post('/product', createProduct)

productRouter.patch('/product/:id',updateProduct)

productRouter.delete('/product/:id', deleteProduct)

module.exports = productRouter