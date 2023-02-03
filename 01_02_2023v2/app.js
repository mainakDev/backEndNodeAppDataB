const express = require('express');

const app = express();


app.use('/',(req, res, next) => {
    console.log('Home page middleware');
    next();
});
//middleware
app.use('/products',(req, res) => {
    res.send('<h1>Products page</h1>');
});
//middleware
app.use('/account',(req, res) => {
    res.send('<h1>Accounts page</h1>');
});

app.use('/',(req, res) => {
  
});


app.listen(3000);