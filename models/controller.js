let Product = require('./product');

//Index Path
exports.allProd = function (req, res) {
  Product.find((err, prod) => {
    let productChunks = [];
    let chunkSize = 9;
    for (let i = 0; i < prod.length; i += chunkSize) {
      productChunks.push(prod.slice(i, i + chunkSize))
    }
    res.render('shop/index', {
      title: 'Bazarul de joaca',
      products: prod
    })
  });
};

//Details Path
exports.cartProd = function (req, res) {
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
};

//Cart Path
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
    let chunkSize = 9;
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
  var productInfo = req.body; //Get the parsed information
  if (!productInfo.title || !productInfo.imagePoster || !productInfo.price || !productInfo.stock) {
    res.json({
      message: "Sorry, you provided worng info",
      type: "error"
    });
  } else {
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
    newProd.save(function (err, Product) {
      if (err)
        res.json({
          message: "Database error",
          type: "error"
        });
      else
        res.json(productInfo)
    });
  }
}

//Edit product
exports.editProd = function (req, res) {
  //Try to get req.body to send on the front end
  let query = {
    _id: req.params.prodID
  }
  Product.findOneAndUpdate(query, (err, editProd) => {
    let productChunks = [];
    let chunkSize = 9;
    for (let i = 0; i < editProd.length; i += chunkSize) {
      productChunks.push(editProd.slice(i, i + chunkSize))
    }
    console.log(editProd)
    res.json(editProd)
  })
}

//Delete product
exports.deleteProd = function (req, res) {
  let myQuery = {
    _id: req.params.prodID
  }
  Product.findOneAndDelete(myQuery, (err, obj) => {
    if (err)
      res.send(err);
    res.json(myQuery)
  })
};