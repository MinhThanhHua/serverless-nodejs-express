const db = require('../config/models/mysql');

var student = {
    getAllStudent: async function(callback) {
        return db.query('Select * from Student', function (err, result, fields) {
            if (err) callback(err);
            callback(result);
        });
    },
    getStudentById: function(req, callback) {
        return db.query('Select * from Student where id = ?', [req.params.studentId],  function (err, result, fields) {
            if (err) throw err;
            callback((result));
        })
    },
    addStudent: function(data, callback) {
        return db.query('Insert into Student(name, class, dob) values(?, ?, ?)', [data.name, data.class, data.dob], callback)
    },
    deleteStudent: function(req, callback) {
        return db.query('Delete from Student where id = ?', [req.params.studentId], callback)
    },
    updateStudent: function(req, callback) {
        return db.query('Update Student set name = ?, class = ?, dob = ? where id = ?', [req.body.name, req.body.class, req.body.dob, req.params.studentId], callback)
    }
}

module.exports = student;