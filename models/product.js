var mongoDB = require('mongoose');
var Schema = mongoDB.Schema;

var schema = new Schema({
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
    }
});

module.exports = mongoDB.model('Product', schema);