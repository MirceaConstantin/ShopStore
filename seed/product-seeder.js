var Product = require('../models/product');
var mongoDB = require('mongoose');

mongoDB.connect('mongodb://localhost:27017/myShop')

var products = [
    new Product({
        imagePath: 'https://store-images.s-microsoft.com/image/apps.18454.14425140369408817.31079f78-7ddb-48a1-bb62-355c82034fdd.cbc00080-ee71-485b-917c-b4f035e7cfea',
        title: 'State of Decay 2',
        description: 'Survivel Game',
        price: 50
    }),
    new Product({
        imagePath: 'https://ae01.alicdn.com/kf/HTB15IW6RVXXXXauXpXXq6xXFXXX1/2018-Game-God-of-War-4-Poster-T-shirts-Kratos-Atreus-Mens-Casual-Short-Sleeve-Cotton.jpg',
        title: 'God of War 4',
        description: 'RPG',
        price: 60
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/B1AdYFp9vQS._SY445_.jpg',
        title: "Assassin's Creed Odyssey",
        description: 'Find your true history',
        price: 55
    }),
    new Product({
        imagePath: 'https://cdn.cdkeys.com/500x706/media/catalog/product/w/o/worldwar-z.jpg',
        title: 'World War Z',
        description: 'Survivel Game',
        price: 50
    }),
    new Product({
        imagePath: 'https://m.media-amazon.com/images/M/MV5BMTcyZjI5MzYtNGEyMC00NTNkLTgxZTktMmQ5MmIxNjRiYzg3XkEyXkFqcGdeQXVyNDIwOTkyNjM@._V1_UY268_CR14,0,182,268_AL_.jpg',
        title: 'Fifa 2019',
        description: 'Football Game',
        price: 65
    }),
    new Product({
        imagePath: 'https://g2anewsprod02storage.s3.amazonaws.com/app/uploads/2018/11/PLAYERUNKNOWNS-BATTLEGROUNDS.jpg',
        title: 'PUBG',
        description: 'Battle royale',
        price: 65
    })
]

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoDB.disconnect()
}

module.exports = products;