
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const serverless = require('serverless-http');
global.constain = require('./config/constants');

var router = require('./routes/router');

try {
    var app = express();
    

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
