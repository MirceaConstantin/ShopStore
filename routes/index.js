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
    switch (req.body.action) {
      case 'add':
        if (!req.body.title) {
          res.render('show_message', {
            message: "Sorry, you provided worng info",
            type: "error"
          });
        } else {
          let newProd = new Product({
            title: req.body.title,
            imagePoster: req.body.imagePoster,
            imagesSlider: req.body.imagesSlider.split(/ *[,;]+ */g),
            trailerGame: req.body.trailerGame.replace("watch\?v=", "embed/"),
            description: req.body.description,
            price: req.body.price,
            genre: req.body.genre.split(/ *[,;]+ */g),
            platform: req.body.platform.split(/ *[,;]+ */g),
            stock: req.body.stock
          });
          newProd.save((err, newProd) => {
            if (err)
              res.render('show_message', {
                message: "Database error",
                type: "error"
              });
            else
              res.render('show_message', {
                message: "New product added",
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
            message: "New product added",
            adminItems: adminItems
          })
        });
        break;
        //Update Method
      case 'edit':
        res.send('edit')
        break;
        //Delete Method
      case 'delete':
        res.send('delete')
        break;
    }
  })

//Details router
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