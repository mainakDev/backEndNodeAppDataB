const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, 'Please enter a username']
    },
    password: {
        type: String,
        require: [true, 'Please enter a password']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('users', userSchema)