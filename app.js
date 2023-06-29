var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Import des routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var establishementsRouter = require('./routes/establishements');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/establishements', establishementsRouter);

// catch 404 and forward to error handler
app.use((req, res, next)=>{
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

/**
 * * Régler les problèmes de CORS
 */
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
	);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, PATCH, OPTIONS"
	);
	next();
});

app.listen(8080, function () {
	console.log('API started on : http://localhost:' + 8080);
});

module.exports = app;