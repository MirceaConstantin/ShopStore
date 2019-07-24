const mongoDB = require('mongoose');
const Schema = mongoDB.Schema;

let schema = new Schema({
    imageBanner: {
        type: String,
        required: true
    },
    infoTitle: {
        type: String,
        required: true
    },
    infoDescription: {
        type: String,
        required: true
    }
});

module.exports = mongoDB.model('Banners', schema);