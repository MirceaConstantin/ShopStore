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

router.get('/cart', function (req, res, next) {
  if (req.url) {
    res.render('shop/cart', {
      title: 'Cart'
    })
  } else {
    res.redirect('/')
  }
})

router.get('/admin', function (req, res) {
  if (req.url) {
    res.render('admin/admin', {
      title: 'Admin'
    })
  } else {
    res.redirect('/')
  }
})

router.get('/:title', function (req, res) {
  Product.find({
    title: `${req.params.title}`
  }, function (err, items) {
    for (let i in items) {
      res.render('details/detail', {
        title: 'Details',
        product: items[i]
      })
    }
  })
});

module.exports = router;