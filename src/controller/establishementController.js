const mysqlController = require('./mysqlController')

function getAllEstablishements() {
    return new Promise((resolve, reject) => {
        mysqlController.getAllEstablishements()
            .then((rows) => {
                const promises = rows.map((key) => {
                    if (key.services != null) {
                        const services = key.services.split(',');
                        console.log(services);
                        if (services.length > 1) {
                            const servicePromises = services.map((service) => mysqlController.getServiceById(service));
                            return Promise.all(servicePromises);
                        } else {
                            return mysqlController.getServiceById(key.services);
                        }
                    }
                });

                Promise.all(promises)
                    .then((serviceResponses) => {
                        let responseIndex = 0;
                        const arrAllAppointments = rows.map((key) => {
                            if (key.services != null) {
                                const services = key.services.split(',');
                                const mappedServices = services.map((service) => {
                                    const currentResponse = serviceResponses[responseIndex++];
                                    return currentResponse || service;
                                });

                                return {
                                    ...key,
                                    services: mappedServices
                                };
                            }
                            return key;
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