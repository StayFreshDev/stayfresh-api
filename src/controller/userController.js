const mysqlController = require('./mysqlController')
const jwt = require('jsonwebtoken');
require('dotenv').config()
const bcrypt = require('bcrypt')

const token = jwt.sign(
    {
        user_id: 1, 
        email: "antoineg3802@gmail.com" 
    },
    process.env.SHA_KEY,
    {
        expiresIn: "24h",
    }
);

function getAllUsers() {
    return new Promise((resolve, reject) => {
        mysqlController.getAllUsers()
            .then((rows) => {
                resolve(rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

function getOneUser(id) {
    return new Promise((resolve, reject) => {
        mysqlController.getOneUser(id)
            .then((user) => {
                if (user.length == 0) {
                    resolve({
                        code: 404,
                        error: 'User not found'
                    })
                }
                resolve(user[0])
            })
            .catch((err) => {
                reject(err)
            })
    })
}

function logUser(email, password) {
    return new Promise((resolve, reject) => {
        mysqlController.verifyAccount(email)
            .then((user) => {
                if (user.length == 1) {
                    if (user[0].password == password) {
                        resolve({
                            error: false
                        })
                    } else {
                        resolve({
                            error: true,
                            status: 400,
                            message: 'Invalid email/password combinaison   '
                        })
                    }
                } else {
                    resolve({
                        error: true,
                        status: 404,
                        message: 'No User found with email "' + email + '"'
                    })
                }
            }).catch((err) => {
                reject(err)
            })
    })
}

function registerUser(firstname, lastname, mail, password, phone) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10)
            .then((hashPswd) => {
                mysqlController.registerUser(firstname, lastname, mail, hashPswd, 2, phone)
                    .then((res) => {
                        resolve(res)
                    })
            })
            .catch((err) => {
                reject(err)
            })
    })
}

function registerAdress(streetNumber, streetName, description, postalCode, city) {
    console.log(streetNumber, streetName, description, postalCode, city)
}

module.exports = {
    getAllUsers,
    getOneUser,
    registerUser,
    logUser
}