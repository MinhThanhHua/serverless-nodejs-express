'use strict';
var path = require('path');
const Student = require('../tables/studentTable');
const Validate = require('../validator/validateForm');

module.exports = {
    getStudent: async (req, res) => {
        Student.getAllStudent(function(data) {
            res.render('student/list', {students: data});
        });
    },
    editStudent: async(req, res) => {
        let errors = [];
        if (req.method == 'POST') {
            errors = Validate.checkValidate(req);
            if (!errors) {
                Student.updateStudent(req, function() {
                });
                return res.redirect('/student');
            }
        }
        let params = req.params;
        Student.getStudentByIdWeb(params, (data) => {
            res.render('student/edit', {student: (req.method == 'POST') ? req.body : data, errors: errors});
        });
    },
    demo: (req, res) => {
        res.sendFile(path.join(__dirname, '../../public/images/demo.png'));
        res.render('student/index', {title: 'Test', name: 'Minh Thành' });
    }
};