let express = require('express');
let router = express.Router();
let Product = require('../models/product');

//Index router
router.get('/', (req, res) => {
  Product.find((err, docs) => {
    let productChunks = [];
    let chunkSize = 9;
    for (let i = 0; i < docs.length; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize))
    }
    res.render('shop/index', {
      title: 'Bazarul de joaca',
      products: docs
    })
  });
});

//Cart router
router.get('/cart', (req, res) => {
  Product.find((err, cartItems) => {
    let productChunks = [];
    let chunkSize = 9;
    for (let i = 0; i < cartItems.length; i += chunkSize) {
      productChunks.push(cartItems.slice(i, i + chunkSize))
    }
    res.render('shop/cart', {
      title: 'Cart',
      cartProd: cartItems
    })
  })
});

//Admin page GET / POST / PUT / DELETE
router.route('/admin')
  .get((req, res) => {
    Product.find((err, adminItems) => {
      let productChunks = [];
      let chunkSize = 3;
      for (let i = 0; i < adminItems.length; i += chunkSize) {
        productChunks.push(adminItems.slice(i, i + chunkSize))
      }
      res.render('admin/admin', {
        title: 'Admin',
        adminItems: adminItems
      })
    })
  })

//Delete Router
router.get('/api/:id', (req, res) => {
  let myQuery = {
    _id: req.params.id
  }
  Product.findOneAndDelete(myQuery, (err, obj) => {
    if (err)
      res.send(err);
    res.json(myQuery)
  })
})

//Details Router
router.get('/:title', (req, res) => {
  Product.find({
    title: `${req.params.title}`
  }, (err, items) => {
    res.render('details/detail', {
      title: 'Details',
      product: items[0]
    })
  })
});

module.exports = router;