let express = require('express');
let app = express();
let router = require('./routers/routers.js')

app.set("port", process.env.PORT || 80);

app.use('/public', express.static('views'))
app.set('view engine', 'pug');

app.use(router)

app.listen(app.get("port"), function () {
    console.log(`Liste on port ${app.get("port")}`);
})