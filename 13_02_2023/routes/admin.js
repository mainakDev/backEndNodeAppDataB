const express = require('express')

const router =  express.Router();

//add-products middleware /admin/add-products
router.get('/add-products', (req, res, next) => {
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

//products middleware /admin/product
router.post('/product', (req, res, next)=> {
    console.log(req.body);
    res.send('<h1>Inside products page</h1>');
});

module.exports = router;