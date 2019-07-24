let Product = require('./product');
let Banners = require('./promoProduct')

//Index Path
exports.allProd = function (req, res) {
  Product.find((err, prod) => {
    let productChunks = [];
    let chunkSize = 8;
    for (let i = 0; i < prod.length; i += chunkSize) {
      productChunks.push(prod.slice(i, i + chunkSize))
    }
    Banners.find((err, banner) => {
      let bannerChunks = [];
      for (let j = 0; j < banner.length; j++) {
        bannerChunks.push(banner.slice(j, j + 1))
      }
      res.render('shop/index', {
        title: 'Cutia cu jucarii',
        products: prod,
        banners: banner
      })
    })
  });
};

//Cart Path
exports.cartProd = function (req, res) {
  res.render('shop/cart', {
    title: 'Cart'
  })
};

exports.checkOut = async function (req, res) {
  let notInStock = [];
  let ok = true
  let stockChecker = async () => {
    for (let i = 0; i < req.body.length; i++) {
      await Product.findById({
          _id: req.body[i].productID
        })
        .then((checkStock) => {
          if (req.body[i].qty > checkStock.stock) {
            ok = false
            notInStock.push(req.body[i])
          }
        })
    }
  }
  let stockManager = () => {
    if (ok) {
      for (let j = 0; j < req.body.length; j++) {
        Product.findById({
          _id: req.body[j].productID
        }, (err, item) => {
          item.stock -= req.body[j].qty;
          item.save()
        })
      }
      res.json({
        message: 'Success',
        ok: ok
      })
    } else {
      let message = 'The following products are not in stock:<br>';
      for (let i = 0; i < notInStock.length; i++) {
        if (!i) {
          message += notInStock[i].productTitle;
        } else {
          message += `<br>${notInStock[i].productTitle}`
        }
      }
      res.json({
        message: message,
        ok: ok
      })
    }
  }
  await stockChecker()
  await stockManager()
}

//Details Path
exports.detailsProd = function (req, res) {
  Product.find({
    title: `${req.params.title}`
  }, (err, items) => {
    res.render('details/detail', {
      title: 'Details',
      product: items[0]
    })
  })
};

//Admin Path
exports.adminPath = function (req, res) {
  Product.find((err, adminItems) => {
    let productChunks = [];
    let chunkSize = 8;
    for (let i = 0; i < adminItems.length; i += chunkSize) {
      productChunks.push(adminItems.slice(i, i + chunkSize))
    }
    res.render('admin/admin', {
      title: 'Admin',
      adminItems: adminItems
    })
  })
};

exports.addNewProd = function (req, res) {
  //Save to DB
  //Ajax status code 200
  let newProd = new Product({
    title: req.body.title,
    imagePoster: req.body.imagePoster,
    imagesSlider: req.body.imagesSlider,
    trailerGame: req.body.trailerGame,
    description: req.body.description,
    price: req.body.price,
    genre: req.body.genre,
    platform: req.body.platform,
    stock: req.body.stock
  });
  newProd.save(function (err, newProd) {
    if (err)
      res.json({
        message: "Database error",
        type: "error"
      });
    else
      res.json(newProd)
  });
}

//Edit product
exports.editProd = function (req, res) {
  let myQuery = {
    _id: req.params.prodID
  }
  Product.findById(myQuery, req.body, {
    new: true
  }, function (err, prod) {
    if (err)
      res.send(err);
    res.json(prod);
  })
}

exports.updateProd = function (req, res) {
  let myQuery = {
    _id: req.params.prodID
  }
  Product.findOneAndUpdate(myQuery, req.body, {
      useFindAndModify: false
    },
    () => {
      Product.findById(myQuery, (err, prod) => {
        if (err)
          res.send(err);
        res.send(prod)
      })
    })
}

//Delete product
exports.deleteProd = function (req, res) {
  let myQuery = {
    _id: req.params.prodID
  }
  Product.findOneAndDelete(myQuery, {
    useFindAndModify: false
  }, (err, obj) => {
    if (err)
      res.send(err);
    res.json(obj)
  })
};