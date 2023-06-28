var express = require('express');
var router = express.Router();
var establishementController = require('../src/controller/establishementController');

router.get('/', function (req, res) {
	establishementController.getAllEstablishements()
		.then((establishements) => {
            let establishementsArray = []
            establishements.forEach(establishement => {
                establishementsArray.push(JSON.parse(JSON.stringify(establishement, (key, value) => {
                    if (typeof value === 'bigint') {
                        return value.toString();
                    }
                    return value;
                })))
            });
            console.log(establishementsArray)
			res.status(200).send(establishementsArray);
		}).catch((err) => {
			res.status(500).send(err.message)
		})
});

router.get('/one/:establishementId', function (req, res) {
    if (!isNaN(parseInt(req.params.establishementId))) {
        establishementController.getOneEstablishement(parseInt(req.params.establishementId))
            .then((establishements) => {
                // Converti le BigInt en int
                const establishmentsStringified = JSON.parse(JSON.stringify(establishements, (key, value) => {
                    if (typeof value === 'bigint') {
                        return value.toString();
                    }
                    return value;
                }));

                res.status(200).send(establishmentsStringified);
            }).catch((err) => {
                res.status(500).send(err.message)
            })
    } else {
		res.status(400).send({
			code: 404,
			error: 'Invalid parameter'
		})
	}
});

module.exports = router;