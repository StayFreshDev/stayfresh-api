var express = require('express');
var router = express.Router();
var serviceController = require('../src/controller/serviceController');

router.get('/', (req, res)=>{
    serviceController.getAllServices()
        .then((services) => {
            res.status(200).send(services);
        }).catch((err) => {
            res.status(500).send(err.message)
        })
})

module.exports = router;