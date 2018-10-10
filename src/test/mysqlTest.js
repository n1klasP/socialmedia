const express = require('express');
const mysql = require('mysql');

const app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dopani'
});

connection.connect(function(error){
    if(!!error){
        console.log('Error');
    } else {
        console.log('Connected');
    }
});

app.get('/', function(req, resp) {
    connection.query("SELECT * FROM user", function(error, rows, fields){
        if(!!error) {
            console.log("Error in query");
        } else {
            resp.json(rows);
        }
    });
})

app.listen(1337);