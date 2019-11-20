
const  express = require('express');
const  cookieParser = require('cookie-parser');
const  logger = require('morgan');
const  bodyParser = require('body-parser');
const  mongoose = require('mongoose');
const serverless = require('serverless-http');

// import createError from 'http-errors';
// import path from 'path';
// import cookieParser from 'cookie-parser';
// import logger from 'morgan';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';

var router = require('./routes/router');
// var router1 = require('./routes/index');

// var usersRouter = require('./routes/users');
// const { createLogger, transports } = require('winston');

// // Enable exception handling when you create your logger.
// const loggers = createLogger({
//   transports: [
//     new transports.File({ filename: 'combined.log' }) 
//   ],
//   exceptionHandlers: [
//     new transports.File({ filename: 'exceptions.log' })
//   ]
// });

try {
    var app = express();

    // view engine setup
    // app.set('views', path.join(__dirname, 'views'));
    // app.set('view engine', 'jade');

    // app.use(logger('dev'));
    // app.use(express.json());
    // app.use(express.urlencoded({ extended: false }));
    // app.use(cookieParser());
    // app.use(express.static(path.join(__dirname, 'public')));

    // catch 404 and forward to error handler
    // app.use(function(req, res, next) {
    //   next(createError(404));
    // });

    // error handler
    // app.use(function(err, req, res, next) {
    //   // set locals, only providing error in development
    //   res.locals.message = err.message;
    //   res.locals.error = req.app.get('env') === 'development' ? err : {};

    //   // render the error page
    //   res.status(err.status || 500);
    //   res.render('error');
    // });

    // app.use('/', router1); // Check authen, nếu được vào index, không thì đá error

    // mongoose instance connection url connection ThanhHM
    // mongoose.Promise = global.Promise;
    // mongoose.connect('mongodb://localhost/TaskDb');

    // 2 cái này cần thiết nè
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    
    router(app); //register the route
  
    // Của lambda
    module.exports.server = serverless(app);
    // Của Express
    // module.exports = app;
} catch (error) {
    // Call exceptions.handle with a transport to handle exceptions
    console.log(error)
    loggers.exceptions.handle(
      new transports.File({ filename: 'exceptions.log' })
    );
}
