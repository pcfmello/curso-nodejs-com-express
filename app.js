var express = require('express');
var http = require('http');
var routes = require('./routes');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function(req, res, next) {
    console.log('Executando middleware de aplicação');
    req.frameworkName = 'Express';
    next();
});

app.get('/', function(req, res, next) {
    //next(new Error('erro customizado'));
    res.json({ routeName: 'Curso de NodeJS com ' + req.frameworkName});
});
app.use('/hello', routes);

app.use(function(err, req, res, next) {
    res.status(500)
        .json({
            message: "Houve um erro interno!"
        });
});

http.createServer(app).listen(3000, function() {
    console.log('Express started!')
});