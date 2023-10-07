const productRouter = require('express').Router()
const {allProducts, showProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller')

productRouter.get('/product', allProducts)

productRouter.get('/product/:id', showProduct)

productRouter.post('/product', createProduct)

productRouter.patch('/product/:id',updateProduct)

productRouter.delete('/product/:id', deleteProduct)

module.exports = productRouter