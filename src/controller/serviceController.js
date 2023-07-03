const mysqlController = require('./mysqlController')

function getAllServices(){
    return new Promise((resolve, reject) => {
        mysqlController.getAllServices()
            .then((rows) => {
                resolve(rows)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

module.exports = {
    getAllServices
}