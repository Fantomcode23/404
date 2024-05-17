const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhoshttp://localhost/phpmyadmin/index.php?route=/table/export&db=Aadhar&table=aadhar&single_table=true',
  user: 'root',
  password: 'your_password',
  database: 'aadhar'
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL database');
});
