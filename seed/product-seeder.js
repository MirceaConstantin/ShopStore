var Product = require('../models/product');
var mongoDB = require('mongoose');

mongoDB.connect('mongodb+srv://adminShop:adminShop@myshopproducts-huk3f.mongodb.net/myShop', {
    useNewUrlParser: true
});

var products = [
    new Product({
        title: 'State of Decay 2',
        imagePoster: 'https://store-images.s-microsoft.com/image/apps.18454.14425140369408817.31079f78-7ddb-48a1-bb62-355c82034fdd.cbc00080-ee71-485b-917c-b4f035e7cfea',
        imagesSlider: [],
        trailerGame: 'https://www.youtube.com/embed/qjLOFZjGClY',
        description: 'Survivel Game',
        price: 50,
        quantity: false,
        genre: ['Survival'],
        platform: ['Microsoft Windows', 'Xbox One'],
        stock: 300
    }),
    new Product({
        title: 'God of War 4',
        imagePoster: 'https://ae01.alicdn.com/kf/HTB15IW6RVXXXXauXpXXq6xXFXXX1/2018-Game-God-of-War-4-Poster-T-shirts-Kratos-Atreus-Mens-Casual-Short-Sleeve-Cotton.jpg',
        imagesSlider: [],
        trailerGame: '',
        description: 'After hes wife dead, Kratos ... ',
        price: 60,
        quantity: false,
        genre: ['Action', 'Adventure'],
        platform: ['PlayStation 4'],
        stock: 300
    }),
    new Product({
        title: "Assassin's Creed Odyssey",
        imagePoster: 'https://images-na.ssl-images-amazon.com/images/I/B1AdYFp9vQS._SY445_.jpg',
        imagesSlider: [],
        trailerGame: '',
        description: 'Find your true history',
        price: 55,
        quantity: false,
        genre: ['Action', 'Role-Playing', 'Stealth'],
        platform: ['Microsoft Windows', 'PlayStation 4', 'Xbox One', 'Nintendo Switch', 'Google Stadia'],
        stock: 300
    }),
    new Product({
        title: 'World War Z',
        imagePoster: 'https://cdn.cdkeys.com/500x706/media/catalog/product/w/o/worldwar-z.jpg',
        imagesSlider: [],
        trailerGame: '',
        description: 'Survivel Game',
        price: 50,
        quantity: false,
        genre: ['Third-person', 'Shooter'],
        platform: ['Microsoft Windows', 'PlayStation 4', 'Xbox One'],
        stock: 300
    }),
    new Product({
        title: 'Fifa 2019',
        imagePoster: 'https://m.media-amazon.com/images/M/MV5BMTcyZjI5MzYtNGEyMC00NTNkLTgxZTktMmQ5MmIxNjRiYzg3XkEyXkFqcGdeQXVyNDIwOTkyNjM@._V1_UY268_CR14,0,182,268_AL_.jpg',
        imagesSlider: [],
        trailerGame: '',
        description: 'Football Game',
        price: 65,
        quantity: false,
        genre: ['Sports'],
        platform: ['Microsoft Windows', 'PlayStation 3', 'PlayStation 4', 'Xbox 360', 'Xbox One', 'Nintendo Switch'],
        stock: 300
    }),
    new Product({
        title: "PlayerUnknown's Battlegrounds",
        imagePoster: 'https://g2anewsprod02storage.s3.amazonaws.com/app/uploads/2018/11/PLAYERUNKNOWNS-BATTLEGROUNDS.jpg',
        imagesSlider: [],
        trailerGame: '',
        description: 'Battle royale',
        price: 65,
        quantity: false,
        genre: ['Battle royale'],
        platform: ['Microsoft Windows', 'Xbox One', 'Android', 'iOS', 'PlayStation 4'],
        stock: 300
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