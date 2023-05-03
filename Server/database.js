const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'gateway',
    password: 'gatewayagency',
    database: 'CRM',
    multipleStatements: true
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
});

module.exports = connection;