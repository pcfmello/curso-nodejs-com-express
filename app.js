var express = require('express');
var http = require('http');
var routes = require('./routes');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', function(req, res) {
    res.json({ routeName: 'Curso de NodeJS com Express'});
});
app.use('/hello', routes);

http.createServer(app).listen(3000, function() {
    console.log('Express started!')
});