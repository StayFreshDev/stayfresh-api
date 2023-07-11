var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors')

var app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Import des routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var establishementsRouter = require('./routes/establishements');
var servicesRouter = require('./routes/services');

app.use(cors())
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/establishments', establishementsRouter);
app.use('/services', servicesRouter);

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

app.listen(8080, function () {
	console.log('API started on : http://localhost:' + 8080);
});

module.exports = app;
