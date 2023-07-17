const mysqlController = require('./mysqlController')

function getAllEstablishements() {
    return new Promise((resolve, reject) => {
        mysqlController.getAllEstablishements()
            .then((rows) => {
                mysqlController.getServiceByName('Coiffure')
                .then((service) => {
                    console.log(service)
                })
                resolve(rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

function getOneEstablishement(id) {
    return new Promise((resolve, reject) => {
        mysqlController.getOneEstablishement(id)
            .then((establishement) => {
                mysqlController.getServiceByName('Coiffure')
                .then((service) => {
                    console.log(service)
                })
                if (establishement.length == 0) {
                    resolve({
                        code: 404,
                        error: 'Establishement not found'
                    })
                }
                resolve(establishement[0])
            })
            .catch((err) => {
                reject(err)
            })
    })
}

module.exports = {
    getAllEstablishements,
    getOneEstablishement
}