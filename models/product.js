var mongoDB = require('mongoose');
var Schema = mongoDB.Schema;

var schema = new Schema({
    _id: {
        type: Number,
        required: true,
        unique: true,
    },
    imagePath: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    genre: {
        type: [],
        required: true
    },
    platform: {
        type: [],
        required: true
    }
});

module.exports = mongoDB.model('Product', schema);