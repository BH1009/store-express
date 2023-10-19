const mongoose = require('mongoose')
require('dotenv').config()

const connect = () => {
    mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connection established')
        })
        .catch((err)=> {
            console.log(`Connection unistablished ${err}`)
        })
}

module.exports = connect