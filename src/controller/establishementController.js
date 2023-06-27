

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

export default {
    getOneUser,
    getAllUsers
}