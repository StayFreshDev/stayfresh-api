var express = require('express');
var router = express.Router();
var appointementsController = require('../src/controller/appointementsController');

router.post('/create', (req, res)=>{
    const requiredFields = ['serviceId', 'userId', 'date', 'durate'];
    const missingFields = requiredFields.filter(field => !(field in req.body));

    if (missingFields.length > 0) {
        res.status(400).json({ error: `Champs manquants : ${missingFields.join(', ')}` });
    }
    appointementsController.createAppointement(req.body)
    .then((result)=>{
        console.log(result);
        if (result.error == undefined) {
            res.status(201).send()
        }else{
            res.status(result.status).send({error: result.error, message: result.message})
        }
    })
})

router.delete('/delete/:appointementId',(req, res)=>{

    let authorization = req.headers.authorization.split(' ')
	if (authorization){
		if (authorization[0] == 'Bearer'){
			appointementsController.deleteAppointement(req.params.appointementId, authorization[1])
            .then((result)=>{
                if (result.error != undefined){
                    res.status(result.status).send({error: result.error, message: result.message})
                }else{
                    res.status(202).send()
                }
            })
		}else{
			res.status(401).send({
				error: true,
				message: 'No JWT token submitted'
			})
		}
	}else {
		res.status(401).send({
			error: true,
			message: 'No JWT token submitted'
		})
	}
})

module.exports = router;