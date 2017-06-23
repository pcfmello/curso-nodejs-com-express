var express = require('express');
var router = express.Router();

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

module.exports = router;