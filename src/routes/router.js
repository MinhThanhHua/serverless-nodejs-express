'use strict';

const Student = require(constain.CONTROLLER + '/StudentController');
const Web = require(constain.CONTROLLER + '/WebController');

module.exports = function(app) {
    app.get('/', Web.index);

    app.route('/student')
        .get(Student.getStudent);
}