require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const contactFormHandler = require('./commands/contactform/handleContactFormSubmission');
const getContactFormsHandler = require('./commands/contactform/handleGetContactForms');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.post('/api/contactform', async function(req, res) {
    let serviceResponse = await contactFormHandler.handleContactFormSubmission(req.body);
    if(serviceResponse.successful){
        res.statusCode = 200;
    }
    else {
        res.statusCode = 500;
    }
    res.send(serviceResponse.data);
});

app.post('/api/backoffice/contactforms', async function(req, res) {
    const password = req.body && req.body.password ? req.body.password : '';
    const expectedPassword = process.env.BACKOFFICE_PASSWORD;

    if(!expectedPassword){
        res.statusCode = 500;
        res.send('Backoffice password is not configured on the server.');
        return;
    }

    if(password !== expectedPassword){
        res.statusCode = 401;
        res.send('Invalid password.');
        return;
    }

    let serviceResponse = await getContactFormsHandler.handleGetContactForms();
    if(serviceResponse.successful){
        res.statusCode = 200;
    }
    else {
        res.statusCode = 500;
    }
    res.send(serviceResponse.data);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
