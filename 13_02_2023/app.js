const path = require('path');

const express = require('express');

const app = express();

const bodyparser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', 'views');

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
    res.status(404).render('404', {pageTitle: 'Page not found'});
});

app.listen(3000);