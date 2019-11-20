'use strict';

// import Student from '../sqls/studentTable';
const Student = require('../sqls/studentTable');

module.exports = {
    getAllStudents: async(req, res) => {
        let students = Student.getAllStudent(function (data) {
            res.json(data);
        });
    },
    createStudent: async(req, res) => {
        let students = Student.addStudent(req.body, function (data) {
            res.json('Created');
        });
    },
    deleteStudent: async(req, res) => {
        let students = Student.deleteStudent(req, function (data) {
            res.json('Deleted');
        });
    },
    editStudent: async(req, res) => {
        let students = Student.updateStudent(req, function (data) {
            res.json('Update successfully');
        });
    },
    getStudent: async(req, res) => {
        let students = Student.getStudentById(req, function (data) {
            res.json(data);
        });
    },
    helloStudent: async(req, res) => {
        res.json('Hello');
    },
}
