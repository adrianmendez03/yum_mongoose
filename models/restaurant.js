const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const restaurantSchema = new Schema(
    {
        name: String,
        addres: {
            street: String,
            zipcode: Number
        },
        yelp: String,
        items: [
            {
                title: String
            }
        ]
    },
    { timestamps: true }
)

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant