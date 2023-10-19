const indexRouter = require('express').Router()
const {showProducts, createProduct, editProduct} = require('../controllers/index.controller')

indexRouter.get('/', showProducts)

indexRouter.get('/editproduct/:id', editProduct)

module.exports = indexRouter
