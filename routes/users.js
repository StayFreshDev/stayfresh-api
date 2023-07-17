var express = require('express');
var router = express.Router();
var userController = require('../src/controller/userController');

/* GET users listing. */
router.get('/', function (req, res) {
	userController.getAllUsers()
		.then((users) => {
			res.status(200).send(users);
		}).catch((err) => {
			res.status(500).send(err.message)
		})
});

router.get('/one/:id', function (req, res) {
	if (!isNaN(parseInt(req.params.id))) {
		userController.getOneUser(parseInt(req.params.id))
			.then((user) => {
				if (user.error != undefined) {
					res.status(404).send(user)
				} else {
					res.status(200).send(user)
				}
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

router.post('/login', (req, res) => {
	if (req.body.password && req.body.email){
		userController.logUser(req.body.email.toLowerCase(), req.body.password)
			.then((responseObject) => {
				if (responseObject.error){
					res.status(responseObject.status).send({error : true, message : responseObject.message})
				}
				res.status(200).send(responseObject)
			})
			.catch((err) => {
				res.status(500).send(err.message)
			})
	}else{
		res.status(400).send({
			error: true,
			message: 'Invalid credentials'
		})
	}
})

router.post('/register/', (req, res) => {
	if (req.body.firstname && req.body.lastname && req.body.email && req.body.password && req.body.phone){
		userController.registerUser(req.body.firstname, req.body.lastname, req.body.email, req.body.password, req.body.phone, req.body.roleId)
			.then((objectResponse)=>{
				console.log(objectResponse)
				if (!objectResponse.error){
					res.status(201).send({token : objectResponse.token, maxAge: 259560000})
				}else{
					res.status(objectResponse.status).send({error : true,  message : objectResponse.message})
				}
			})
	}else{
		res.status(400).send({
			error : true,
			message : 'Invalid parameters'
		})
	}
})

router.post('/register/establishement', (req, res) => {
	if (req.body.name && req.body.email && req.body.SIRET && req.body.description && req.body.password && req.body.phone && req.body.streetNumber && req.body.streetName && req.body.postalcode && req.body.town ){
		userController.registerEstablishement(req.body.firstname, req.body.lastname, req.body.email, req.body.password)
			.then((objectResponse)=>{
				if (!objectResponse.error){
					res.status(201).send()
				}else{
					res.status(objectResponse.status).send({error : true,  message : objectResponse.message})
				}
			})
	}else{
		res.status(400).send({
			error : true,
			message : 'Invalid parameters'
		})
	}
})

router.patch('/modify/:userId', (req, res)=>{
	let userId = req.params.userId
	const updateData = req.body;

	userController.updateUser(userId, updateData)
	.then(result=>{
		res.send(result)
	})
})

module.exports = router;
