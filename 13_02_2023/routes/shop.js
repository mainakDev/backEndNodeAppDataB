const express = require('express')

const router =  express.Router();

//home page middleware
router.use('/',(req, res, next) => {
    res.send('<h1>Home Page</h1>');
});

module.exports = router;
