const User = require('../model/userModel')
const asyncHandler = require('express-async-handler')

getUsers =  asyncHandler(async(req, res, next) => {
    const allUsers = await User.find();
    res.status(200).json(allUsers)
})

createUser = asyncHandler(async(req, res, next) => {
    if(!req.body.username){
        res.status(400)
        throw new Error('Username required')
    } else if(!req.body.password){
        res.status(400)
        throw new Error('Password required')
    }
    const newUser = await User.create({
        username: req.body.username,
        password: req.body.password
    })
    res.json(newUser)
})

updateUser = asyncHandler(async(req, res, next) => {
    const user = await User.findById(req.params.id)
    if(!user){
        res.status(400)
        throw new Error(`User does't exists`)
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json(updatedUser)
})

// const updateUser = asyncHandler(async (req, res, next) => {
//     const user = await User.findById(req.params.id)

//     if(!user){
//         res.status(400)
//         throw new Error('User not Found')
//     }

//     const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true,})
//     res.status(200).json(updatedUser);
// })


deleteUser = asyncHandler(async(req, res, next) => {
    const user = await User.findById(req.params.id)
    if(!user){
        res.status(400)
        throw new error(`User doesn't exists`)
    }
    await user.deleteOne()
    res.json({message: `User ${req.body.username} deleted`})
})

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}