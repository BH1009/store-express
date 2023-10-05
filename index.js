const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()
const app = express()
const connect = require('./src/database/db')

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Static files
app.use('/public', express.static('./src/public'));

// View Engine
app.set('view engine', 'pug')
app.set('views', './src/views')

// Routes
app.use(require('./src/routes/index.routes'))
app.use(require('./src/routes/product.routes'))

app.listen(process.env.PORT, () => {
  connect()
  console.log(`Server start in port ${process.env.PORT}`)
})






