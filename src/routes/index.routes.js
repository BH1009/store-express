const indexRouter = require('express').Router()
const {showProducts} = require('../controllers/index.controller')

indexRouter.get('/', showProducts)

module.exports = indexRouter
