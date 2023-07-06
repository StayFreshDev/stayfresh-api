const mysqlModel = require('../models/mysqlModel');

function SQLRequest(query){
    return new Promise((resolve)=>{
        mysqlModel.pool.getConnection()
        .then(conn => {
            conn.query(query)
            .then((rows) => {
                resolve(rows);
                conn.end();
            })
            .catch(err => {
                //handle error
                console.log(err); 
                conn.end();
            })
        }).catch(err => {
            console.log('Erreur lors de la connection à la BDD', err)
        });
    })
}

function getAllUsers(){
    return new Promise((resolve, reject)=>{
        SQLRequest('SELECT users.id, users.firstname, users.lastname, users.mail, users.phone, roles.function FROM `users` INNER JOIN `roles` WHERE users.role_id = roles.id')
        .then((rows)=>{
            resolve(rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

function getOneUser(id){
    return new Promise((resolve, reject)=>{
        SQLRequest('SELECT users.id, users.firstname, users.lastname, users.mail, users.phone, roles.function FROM `users` INNER JOIN `roles` WHERE users.role_id = roles.id AND users.id = ' + id)
        .then((rows)=>{
            resolve(rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

function getAllEstablishements(){
    return new Promise((resolve, reject)=>{
        SQLRequest('SELECT establishements.id, establishements.siret, establishements.name, establishements.description, adresses.street_number, adresses.street_name, adresses.description AS adress_description, adresses.postal_code, adresses.city FROM `establishements` INNER JOIN `adresses` WHERE establishements.id = adresses.id')
        .then((rows)=>{
            resolve(rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

function getOneEstablishement(id){
    return new Promise((resolve, reject)=>{
        SQLRequest('SELECT establishements.id, establishements.siret, establishements.name, establishements.description, adresses.street_number, adresses.street_name, adresses.description AS adress_description, adresses.postal_code, adresses.city FROM `establishements` INNER JOIN `adresses` WHERE establishements.id = adresses.id AND establishements.id = ' + id)
        .then((rows)=>{
            resolve(rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

function verifyAccount(email){
    return new Promise((resolve, reject)=>{
        SQLRequest('SELECT * FROM `users` WHERE `mail` = "' + email+ '"')
        .then((rows)=>{
            resolve(rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

function registerUser(firstname, lastname, mail, password, roleId, phone){
    return new Promise((resolve, reject)=>{
        doUserExistInDb(mail)
            .then((isUserInDb)=>{
                if (isUserInDb){
                    resolve({
                        error : true,
                        status : 409,
                        message : "User already exist with email '" + mail + "'"
                    })
                }else{
                    SQLRequest('INSERT INTO `users` (`firstname`, `lastname`, `mail`, `password`, `role_id`, `phone`) VALUES ("' + firstname + '","' + lastname + '","' + mail + '","' + password + '",' + roleId + ',"' + phone + '");')
                    .then((request)=>{
                        if (request.affectedRows){
                            resolve({
                                error : false,
                                userId : parseInt(request.insertId)
                            })
                        }else{
                            resolve({
                                error : true,
                                status : 500,
                                message : 'Internal server error'
                            })
                        }
                    }).catch((err)=>{
                        reject(err)
                    })
                }
            })
    })
}

function getAllServices(){
    return new Promise((resolve)=>{
        SQLRequest('SELECT id,name,description FROM `services`')
            .then((rows)=>{
                resolve(rows)
            }).catch((err)=>{
                reject(err)
            })
    })
}

function doUserExistInDb(email){
    return new Promise((resolve)=>{
        SQLRequest('SELECT * FROM `users` WHERE mail = "' + email + '"')
            .then((query)=>{
                if (query.length == 0){
                    resolve(false)
                }else{
                    resolve(true)
                }
            })
    })
}

module.exports = {
    getAllUsers,
    getOneUser,
    verifyAccount,
    registerUser,
    getAllEstablishements,
    getOneEstablishement, 
    getAllServices
}