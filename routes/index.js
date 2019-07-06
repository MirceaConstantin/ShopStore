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

router.get('/cart', function (req, res) {
  res.render('shop/cart', {
    title: 'Cart'
  })
})

router.get('/admin', function (req, res) {
  Product.find(function (err, adminItems) {
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < adminItems.length; i += chunkSize) {
      productChunks.push(adminItems.slice(i, i + chunkSize))
    }
    res.render('admin/admin', {
      title: 'Admin',
      adminItems: adminItems
    })
  })
});

router.get('/:title', function (req, res) {
  Product.find({
    title: `${req.params.title}`
  }, function (err, items) {
    res.render('details/detail', {
      title: 'Details',
      product: items[0]
    })
  })
});

module.exports = router;