const user = require('../model/userModel')
const asyncHandler = require('express-async-handler')

getUsers =  asyncHandler(async(req, res, next) => {
    const allUsers = await user.find();
    res.status(200).json(allUsers)
})

createUser = async(req, res, next) => {
    if(!req.body.username){
        res.status(400)
        throw new Error('Username required')
    } else if(!req.body.password){
        res.status(400)
        throw new Error('Password required')
    }
    const newUser = await user.create({
        username: req.body.username,
        password: req.body.password
    })
    res.json(newUser)
}

updateUser = (req, res, next) => {
    res.json({message: 'PUT route'})
}

deleteUser = (req, res, next) => {
    res.json({message: 'DELETE route'})
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}