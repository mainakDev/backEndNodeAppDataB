const user = require('../model/userModel')

getUsers = (req, res, next) => {
    
    res.json({message: 'GET route'})
}

createUser = (req, res, next) => {
    res.json({message: 'POST route'})
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