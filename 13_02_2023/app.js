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

//404 error page
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);