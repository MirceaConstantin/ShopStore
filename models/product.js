const mongoDB = require('mongoose');
const Schema = mongoDB.Schema;

let schema = new Schema({
    title: {
        type: String,
        required: true
    },
    imagePoster: {
        type: String,
        required: true
    },
    imagesSlider: {
        type: Array,
        required: true
    },
    trailerGame: {
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
    genre: {
        type: Array,
        required: true
    },
    platform: {
        type: [],
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
});

module.exports = mongoDB.model('Product', schema);