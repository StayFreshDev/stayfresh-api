const mysqlController = require('./mysqlController')

function getAllEstablishements() {
    return new Promise((resolve, reject) => {
        mysqlController.getAllEstablishements()
            .then((rows) => {
                const promises = rows.map((key) => mysqlController.getServiceById(key.services));

                Promise.all(promises)
                    .then((serviceResponses) => {
                        const arrAllAppointments = rows.map((key, index) => {
                            // Vérifier si la réponse de mysqlController.getServiceById est false
                            const service = serviceResponses[index] || key.services;

                            return {
                                ...key,
                                services: service
                            };
                        });

                        resolve(arrAllAppointments);
                    })
                    .catch((error) => {
                        console.error(error);
                        reject(error);
                    });
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
                console.log(establishement[0])
                if (establishement.length == 0) {
                    resolve({
                        code: 404,
                        error: 'Establishement not found'
                    })
                } else {
                    if (establishement[0].services != null) {
                        const promises = establishement[0].services.split(',').map((key) => mysqlController.getServiceById(key));

                        Promise.all(promises)
                            .then((serviceResponses) => {
                                const establishementFinal = {
                                    ...establishement[0],
                                    services: serviceResponses
                                }

                                resolve(establishementFinal);
                            })
                            .catch((error) => {
                                console.error(error);
                                reject(error);
                            });
                    } else {
                        resolve(establishement[0])
                    }
                }
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