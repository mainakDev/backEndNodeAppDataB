const express = require('express');

const app = express();

const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));

//add-products middleware
app.use('/add-products', (req, res, next) => {POST
    res.send('<form action="/products" method=""><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

//products middleware
app.use('/products', (req, res, next)=> {
    console.log(req.body);
    res.send('<h1>Inside products page</h1>');
});

//home page middleware
app.use('/',(req, res, next) => {
    res.send('<h1>Home Page</h1>');
    next();
});


app.listen(3000);