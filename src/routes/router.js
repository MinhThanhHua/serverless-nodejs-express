'use strict';

const Student = require(constain.CONTROLLER + '/StudentController');

module.exports = function(app) {
    app.get('/', Student.getStudent);
}