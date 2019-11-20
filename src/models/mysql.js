'use strict';

// import mysql from 'mysql';
const mysql = require('mysql');

console.log('Get connection ...');

// COnnect local
// try {
//   var con = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'nodejs_mysql',
//   });

//   con.getConnection(function(err) {
//       if (err) {
//           console.log('Err: ' + err);
//       } else {
//           console.log("Connected!");
//       }
//   });
// } catch($err) {
//     console.log($err)
// }


// Connect aws
const con = mysql.createConnection({
    host     : process.env.RDS_HOSTNAME,
    user     : process.env.RDS_USERNAME,
    password : process.env.RDS_PASSWORD,
    port     : process.env.RDS_PORT,
    database :  process.env.RDS_DATABASE
});

// exports.handler = async (event) => {
//     con.query("CREATE DATABASE nodejs_mysql", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//     return "Database Created"
// };
  
module.exports = con;
