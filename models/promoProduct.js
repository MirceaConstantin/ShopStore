let mongoDB = require('mongoose');
let Schema = mongoDB.Schema;

let schema = new Schema({
    imageBanner: {
        type: String,
        required: true
    }
})

module.exports = mongoDB.model('Banners', schema);