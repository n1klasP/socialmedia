const express = require('express');
const mysql      = require('mysql');
// https://github.com/mysqljs/mysql
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'dopani'
});

// Initialize the app
const app = express();

// https://expressjs.com/en/guide/routing.html
app.get('/user', function (req, res) {

    connection.query('SELECT * FROM user', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
    console.log(Date().toString() + " | User connected to /user")

});
// Start the server
app.listen(3001, () => {
    console.log('App is listening on port 3001');
});