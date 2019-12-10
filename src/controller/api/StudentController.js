'use strict';

const Student = require(constain.TABLE + '/studentTable');
const Tesseract = require('tesseract.js');

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
    scaneOCR: async(req, res) => {
        Tesseract.recognize(
            constain.IMG + '/sign_text.png',
            'eng',
            {
                logger: m => console.log(m) 
            }
        ).then(({ data: { text } }) => {
            console.log(text);
            res.json(text);
        })
    },
    quickstart: async(req, res) => {
        // Imports the Google Cloud client library
        const vision = require('@google-cloud/vision');
      
        // Creates a client
        const client = new vision.ImageAnnotatorClient();
      
        // Performs label detection on the image file
        const [result] = await client.labelDetection(constain.IMG + '/sign_text.png');
        const labels = result.labelAnnotations;
        console.log('Labels:');
        labels.forEach(label => console.log(label.description));
    }
}
