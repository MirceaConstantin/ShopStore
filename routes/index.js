let express = require('express');
let router = express.Router();
let Product = require('../models/product');
//let findProd = require('../seed/db');

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
  .post((req, res) => {
    if (!req.body.title) {
      res.render('show_message', {
        message: "Sorry, you provided worng info",
        type: "error"
      });
    } else {
      let newProd = new Product(req.body);
      //FIXME: Multiple images for slider / genre / platforms push to array from db
      newProd.save((err, newProd) => {
        if (err)
          res.render('show_message', {
            message: "Database error",
            type: "error"
          });
        else
          res.render('show_message', {
            message: "New person added",
            type: "success",
            product: req.body
          });
      });
    };
    Product.find((err, adminItems) => {
      let productChunks = [];
      let chunkSize = 3;
      for (let i = 0; i < adminItems.length; i += chunkSize) {
        productChunks.push(adminItems.slice(i, i + chunkSize))
      }
      res.render('admin/admin', {
        title: 'Admin',
        message: "New person added",
        adminItems: adminItems
      })
    });
  })


//Details router
router.get('/:title', (req, res) => {
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