var express = require('express');
var http = require('http');
var app = express();

app.get('/', function(req, res) {
    res.json({ routeName: 'Curso de NodeJS com Express'});
});

http.createServer(app).listen(3000, function() {
    console.log('Express started!')
});