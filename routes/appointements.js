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

module.exports = router;