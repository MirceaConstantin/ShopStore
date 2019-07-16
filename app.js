const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const mongoDB = require('mongoose');

//23 si 25 Iulie (Soft Skills) la 19:00

const app = express();

/* mongoDB.connect('mongodb+srv://shopAdmin:shopAdmin@myshopproducts-huk3f.mongodb.net/myShop', {
    useNewUrlParser: true
}); */

// mongoose instance connection url connection
mongoDB.Promise = global.Promise;
mongoDB.connect('mongodb+srv://shopAdmin:shopAdmin@myshopproducts-huk3f.mongodb.net/myShop', {
    useNewUrlParser: true
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(favicon('public/favIcon.png'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

/// catch 404 and forwarding to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;