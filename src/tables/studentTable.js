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
        return db.query('Insert into Student(name, class, phone_number, id_line) values(?, ?, ?, ?)', [data.name, data.class, data.phone_number, data.idLine], callback)
    },
    deleteStudent: function(req, callback) {
        return db.query('Delete from Student where id = ?', [req.params.studentId], callback)
    },
    updateStudent: function(req, callback) {
        return db.query('Update Student set name = ?, class = ?, phone_number = ? where id = ?', [req.body.name, req.body.class, req.body.phone_number, req.params.studentId], callback)
    },
    getStudentHasLineId: async function(callback) {
        return db.query("Select * from Student where id_line != 'NULL'", function(err, result, fields) {
            if (err) callback(err);
            callback(result);
        });
    },
    getStudentByIdWeb: function(data, callback) {
        return db.query('Select * from Student where id = ?', [data.studentId],  function (err, result, fields) {
            if (err) throw err;
            callback((result[0]));
        })
    },
}

module.exports = student;