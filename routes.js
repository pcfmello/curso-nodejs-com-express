var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
    console.log('Executando middle de rotas');
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'Hello World' });
});

router.get('/params/:name', function(req, res) {
    res.json({
        params: req.params,
        host: req.host,
        headers: req.headers
    });
});
router.post('/body', function(req, res) {
     res.json(req.body);
    //res.json(req.body.name); Retorna o atributo 'name' do objeto BODY
});

router.get('/busca-todos', function(req, res) {
     res.status(200).json(
         [
             { nome: 'Paulo Cesar', cidade: 'Florianópolis/SC' },
             { nome: 'Claudia Rodrigues', cidade: 'Florianópolis/SC' },
             { nome: 'Jaqueline Ferreira', cidade: 'Londrina/PR' },
             { nome: 'Gertrudes Sotta', cidade: 'Joaquim Távora/PR'}
         ]
     );
});

module.exports = router;