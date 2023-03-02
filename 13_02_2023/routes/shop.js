const path = require('path');
const express = require('express')

const router =  express.Router();

const rootDir = require('../util/path');

const adminData = require('./admin');

//home page middleware /shop/
router.get('/',(req, res, next) => {
    res.render(path.join(rootDir,'views','shop.html'));
    console.log(adminData.products);
});

module.exports = router;
