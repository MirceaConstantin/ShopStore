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
      title: 'Cutia cu jucarii',
      products: prod
    })
  });
};

//Cart Path
exports.cartProd = function (req, res) {
  res.render('shop/cart', {
    title: 'Cart',
    data: prod
  })
};



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