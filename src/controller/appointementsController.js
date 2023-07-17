const mysqlController = require('./mysqlController')

function createAppointement(body){
    return new Promise((resolve)=>{
        let date = new Date(body.date)
        if( date != 'Invalid Date'){
            mysqlController.createAppointement(body.serviceId, body.userId, dateJSToSQLDate(new Date(body.date)), body.durate)
                .then((results)=>{
                    resolve(results)
                })
        }else{
            resolve({
                error: true,
                status: 400,
                message : 'Invalid Date'
            })
        }
    })
}

function dateJSToSQLDate(date){
    // Obtenir les composants de la date
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    // Formatage de la date au format SQL
    const sqlFormattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    return sqlFormattedDate;
}


module.exports = {
    createAppointement
}