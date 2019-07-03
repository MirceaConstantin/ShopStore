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
      title: 'Bazar',
      products: docs
    })
  });
});

router.get('/:id', function (req, res) {
  res.render('details/detail', {
    title: 'Details'
  })
  res.send(req.params.id)
})

module.exports = router;