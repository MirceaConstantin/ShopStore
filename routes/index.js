var express = require('express');
var router = express.Router();
var Product = require('../models/product');

/* GET home page. */
router.get('/', function (req, res) {
  Product.find(function (err, docs) {
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize))
    }
    res.render('shop/index', {
      title: 'Bazarul de joaca',
      products: docs
    })
  });
});

router.get('/details/:title', function (req, res) {
  let productDetails = {
    title: req.params.title,
    image: req.params.imagePoster,
    description: req.params.description,
    genre: req.params.genre
  }
  res.render('details/detail', {
    title: 'Details',
    product: productDetails
  })
})

router.get('/cart', function (req, res) {
  res.render('shop/cart', {
    title: 'Cart'
  })
})

router.get('/admin', function (req, res) {
  res.render('admin/admin', {
    title: 'Admin'
  })
  res.send('admin page')
})

module.exports = router;