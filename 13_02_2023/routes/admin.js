const path = require('path');

const express = require('express')

const router =  express.Router();

const rootDir = require('../util/path');

//add-products middleware /admin/add-products
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

//products middleware /admin/product
router.post('/product', (req, res, next)=> {
    console.log(req.body);
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports = router;