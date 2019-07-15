let express = require('express');
let router = express.Router();
let products = require('../models/controller');

//Index router
router.route('/')
  .get(products.allProd)

//Cart router
router.route('/cart')
  .get(products.cartProd)

//Admin page GET / POST / PUT / DELETE
router.route('/admin')
  .get(products.adminPath)
  .post(products.addNewProd)


//POST / PUT / DELETE
router.route('/api/:prodID')
  .get(products.editProd)
  /*    .put()  */
  .delete(products.deleteProd)

//Details Router
router.route('/:title')
  .get(products.detailsProd)

module.exports = router;