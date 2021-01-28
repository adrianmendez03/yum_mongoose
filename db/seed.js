const mongoose = require('mongoose')
const Restaurant = require('../models/restaurant')
const db = mongoose.connection
const manyRestaurants = require('./seedData.json')

Restaurant.deleteMany({})
    .then(() => {
        Restaurant.insertMany(manyRestaurants)
        .then(restaurants => {
            console.log('restaurants: ', restaurants)
            db.close()
        })
        .catch(err, () => console.log('err: ', err))
    })
    .catch(err, () => console.log('errL ', err))