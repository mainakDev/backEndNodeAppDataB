const path = require('path');

const express = require('express')

const router =  express.Router();

const rootDir = require('../util/path');

const products = [];

//add-products middleware /admin/add-products
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
});

//products middleware /admin/product
router.post('/add-product', (req, res, next)=> {
    products.push(req.body.title);
    res.redirect('/shop/');
});

module.exports.routes = router;
module.exports.products = products;