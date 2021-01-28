const mongoose = require('mongoose')
const mongoURI = 'mongodb://localhost:27017/' + 'yum'
const config = { useUnifiedTopology: true, useNewUrlParse: true }
mongoose.connect(mongoURI, config)

const db = mongoose.connection

db.on('err', err => console.log(err.message))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))