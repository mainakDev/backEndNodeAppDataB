const path = require('path');

const express = require('express')

const router =  express.Router();

//add-products middleware /admin/add-products
router.get('/add-products', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
});

//products middleware /admin/product
router.post('/product', (req, res, next)=> {
    console.log(req.body);
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
});

module.exports = router;