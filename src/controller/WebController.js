'use strict';
var path = require('path');
const sls = require('serverless-http');

module.exports = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname, '../../public/images/demo.png'));
        res.render('layout/index', {title: 'Test', name: 'Minh Thành' });
    }
};