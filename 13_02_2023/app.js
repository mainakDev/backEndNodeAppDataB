const path = require('path');

const express = require('express');

const app = express();

const bodyparser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//MIDLEWARE to use body parser
app.use(bodyparser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));

//admin routes
app.use('/admin', adminRoutes.routes);

//shop routes
app.use('/shop',shopRoutes);

//create a 404.html page in views and add it here
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'/views','404.html'));
});

app.listen(3000);