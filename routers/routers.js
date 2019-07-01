let express = require('express');
let router = express.Router();

router.get('/', function (req, res) {
    console.log('Home page');
    res.render('index');
})

router.get('/admin', function (req, res) {
    console.log('Admin page');
    res.render('admin');
})

module.exports = router;