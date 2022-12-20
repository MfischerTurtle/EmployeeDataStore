const mysql = require('mysql2');


const connection = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL Username
    user: 'root',
    // TODO: Add MySQL Password
    password: 'password12345',
    database: 'employees'
  },
  console.log(`Connected to the employees database.`)
);


module.exports = connection
