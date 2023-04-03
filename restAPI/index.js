const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const connectDB = require('./config/db')

connectDB()

const port = process.env.PORT || 5000

const app = express()

app.use('/api/users', require('./routes/userRoutes'))

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
})