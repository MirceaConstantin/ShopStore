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
  Product.find(function (err, items) {
    for (let i in items) {
      if (items[i].title == req.params.title) {
        res.render('details/detail', {
          title: 'Details',
          product: items[i]
        })
      }
    }
  })
});

router.get('/cart', function (req, res) {
  res.render('shop/cart', {
    title: 'Cart'
  })
})

router.get('/admin', function (req, res) {
  Product.find(function (err, docs) {
    var productChunks = [];
    var i = 0
    for (i in docs) {
      productChunks.push(docs[i])
      console.log(docs[i])
    }
    res.render('admin/admin', {
      title: 'Admin',
      products: docs
    })
    console.log(productChunks[i])
  });
})

module.exports = router;