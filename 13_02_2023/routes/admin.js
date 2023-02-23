const path = require('path');

const express = require('express')

const router =  express.Router();

const rootDir = require('../util/path');

const products = [];

//add-products middleware /admin/add-products
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

//products middleware /admin/product
router.post('/product', (req, res, next)=> {
    // console.log(req.body.title);
    products.push(req.body.title);
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports.routes = router;
module.exports.products = products;