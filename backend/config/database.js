'use strict';

const mysql = require('mysql');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'your_database',
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id', connection.threadId);
});

module.exports = connection;
