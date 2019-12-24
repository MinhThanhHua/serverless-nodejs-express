'use strict';

const Student = require('../controller/StudentController');
const Web = require('../controller/WebController');


module.exports = function(app) {
    app.get('/', Web.index);

    app.route('/student')
        .get(Student.getStudent);
    
    app.all('/student/edit/:studentId', Student.editStudent); // vừa code post vừa có get, khỏi phải tách làm 2
}