var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors')

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Import des routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var establishementsRouter = require('./routes/establishements');
var servicesRouter = require('./routes/services');
var apointementsRouter = require('./routes/appointements');

app.use(cors())
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/establishments', establishementsRouter);
app.use('/services', servicesRouter);
app.use('/appointements', apointementsRouter)

app.listen(8080, function () {
	console.log('API started on : http://localhost:' + 8080);
});

module.exports = app;
