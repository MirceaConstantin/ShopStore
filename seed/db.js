/* let Product = require('../models/product');
Testing new file for DB
var findProd = Product.find((err, prod) => {
    let productChunks = [];
    let chunkSize = 9;
    for (let i = 0; i < prod.length; i += chunkSize) {
        productChunks.push(prod.slice(i, i + chunkSize))
    }
})

module.exports = findProd; */