'use strict';

global.constain = require('./config/constants');  // Set gloebal file constant
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const serverless = require('serverless-http'); // serverless cua aws

var router = require(constain.ROUTES + '/api/router'); // add đường dẫn router của api
var routerWeb = require(constain.ROUTES + '/router'); // add đường dẫn router của web

try {
    var app = express();

    // 2 cái này cần thiết nè
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // Public path public để có thể sử dụng được    
    var publicDir = require('path').join(__dirname,'../public');
    app.use(express.static(publicDir));

    router(app); // register the route
    routerWeb(app);// register the route for web
 
    // Thiết lập engine view react cho nodejs https://github.com/reactjs/express-react-views
    app.set('views', __dirname + '/views'); // add đường dẫn view
    app.set('view engine', 'jsx'); // Sử dụng jsx làm view engine
    app.engine('jsx', require('express-react-views').createEngine());

    // Thiết lập engine view jade cho nodejs
    // app.set('views', __dirname + '/views');
    // app.set('view engine', 'jade');
  
    // Của lambda
    module.exports.server = serverless(app);

    // Của Express
    // module.exports = app;

} catch (error) {
    // Call exceptions.handle with a transport to handle exceptions
    // loggers.exceptions.handle(
    //   new transports.File({ filename: 'exceptions.log' })
    // );
    console.log(error)
}
