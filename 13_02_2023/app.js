const express = require('express');

const app = express();

const bodyparser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//MIDLEWARE to use body parser
app.use(bodyparser.urlencoded({extended: false}));

//admin routes
app.use('/admin', adminRoutes);

//shop routes
app.use('/shop',shopRoutes);

app.listen(3000);