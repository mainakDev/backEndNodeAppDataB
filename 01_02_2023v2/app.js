const express = require('express');

const app = express();




app.use('/users',(req, res, next) => {
    res.send('<h3>Users Page</h3>');
});

//middleware
app.use('/products',(req, res) => {
    res.send('<h1>Products page</h1>');
});
//middleware
app.use('/account',(req, res) => {
    res.send('<h1>Accounts page</h1>');
});

//home page
app.use('/',(req, res, next) => {
    console.log('Home page middleware');
    next();
});


app.listen(3000);