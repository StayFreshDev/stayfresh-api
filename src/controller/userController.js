const mysqlController = require('./mysqlController')
const jwt = require('jsonwebtoken');
require('dotenv').config()
const bcrypt = require('bcrypt')

// jwt.verify(token, process.env.SHA_KEY,(err, decoded)=> {
//     if (err) {
//         return res.status(403).json({ message: 'Invalid JWT token' });
//     }else{
//         console.log(decoded)
//     }
// })

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
                    bcrypt.compare(password, user[0].password).then((isCorrect)=>{
                        if (isCorrect) {
                            resolve({
                                token: createToken(user[0].id, user[0].role_id),
                                maxAge: 259560000
                            })
                        } else {
                            resolve({
                                error: true,
                                status: 400,
                                message: 'Invalid email/password combinaison'
                            })
                        }
                    })
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
                        if (!resolve.error){
                            res.token = createToken(res.userId, 2)
                            resolve(res)
                        }else{
                            resolve(res)
                        }
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

function createToken(userId, permissionLevel){
    const token = jwt.sign(
        {
            user_id: userId, 
            role_id: permissionLevel 
        },
        process.env.SHA_KEY,
        {
            expiresIn: "72h",
        }
    );

    return token
}

function registerEstablishement(){
    
}

function updateUser(userId, body){
    return new Promise((resolve)=>{
        mysqlController.updateUser(userId, body)
        .then(response=>{
            resolve(response)
        })
    })
}

function getCurrentUser(token){
    return new Promise((resolve)=>{
        jwt.verify(token, process.env.SHA_KEY,(err, decoded)=> {
            if (err) {
                resolve({error: true, message: 'Invalid JWT token' });
            }else{
                mysqlController.getOneUser(decoded.user_id)
                .then((response)=>{
                    resolve(response[0])
                })
            }
        })
    })
}

function getAppointementsFromToken(token){
    return new Promise((resolve)=>{
        jwt.verify(token, process.env.SHA_KEY,(err, decoded)=> {
            if (err) {
                resolve({error: true, message: 'Invalid JWT token' });
            }else{
                mysqlController.getAppoitmentsFromUserId(decoded.user_id)
                .then((response)=>{
                    resolve(response)
                })
            }
        })
    })
}

module.exports = {
    getAllUsers,
    getOneUser,
    registerUser,
    logUser,
    registerEstablishement,
    updateUser,
    getCurrentUser,
    getAppointementsFromToken
}