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
        SQLRequest(`
            SELECT
                e.id AS id,
                e.name AS establishment_name,
                e.description AS establishment_description,
                CONCAT(a.street_number, ' ', a.street_name, ' ', a.postal_code, ' ', a.city) AS establishment_address,
                GROUP_CONCAT(s.name SEPARATOR ', ') AS services
            FROM
                establishements e
                INNER JOIN adresses a ON e.adress_id = a.id
                LEFT JOIN services_establishements se ON e.id = se.establishement_id
                LEFT JOIN services s ON se.service_id = s.id
            GROUP BY
                e.id;
        `)
        .then((rows)=>{
            resolve(rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

function getOneEstablishement(id){
    return new Promise((resolve, reject)=>{
        SQLRequest(`
            SELECT
                e.name AS establishment_name,
                e.siret,
                e.description AS establishment_description,
                CONCAT(a.street_number, ' ', a.street_name, ' ', a.postal_code, ' ', a.city) AS establishment_address,
                GROUP_CONCAT(s.name SEPARATOR ', ') AS services
            FROM
                establishements e
                INNER JOIN adresses a ON e.adress_id = a.id
                INNER JOIN services_establishements se ON e.id = se.establishement_id
                INNER JOIN services s ON se.service_id = s.id
            WHERE
                e.id = ${id}
        `)
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

function doUserExistInDbById(userId){
    return new Promise((resolve)=>{
        SQLRequest('SELECT * FROM `users` WHERE id = "' + userId + '"')
            .then((query)=>{
                if (query.length == 0){
                    resolve(false)
                }else{
                    resolve(true)
                }
            })
    })
}

function updateUser(user_id, body){
    return new Promise(async(resolve)=>{
        if (await doUserExistInDbById(user_id)){
            SQLRequest('UPDATE table SET ' + body + ' WHERE id=' + user_id)
            .then((query)=>{
                if (query.affectedRows == 0){
                    resolve(false)
                }else{
                    resolve(true)
                }
            })
        }else {
            resolve({
                error: true,
                status: 404,
                message: 'User not found'
            })
        }
    })
}

module.exports = {
    getAllUsers,
    getOneUser,
    verifyAccount,
    registerUser,
    getAllEstablishements,
    getOneEstablishement, 
    getAllServices,
    updateUser
}