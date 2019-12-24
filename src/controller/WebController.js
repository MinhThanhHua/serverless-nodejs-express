'use strict';
var path = require('path');
const sls = require('serverless-http');

module.exports = {
    index: (req, res) => {
        res.render('layout/index', {layout: false});
    }
};