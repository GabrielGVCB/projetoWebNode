var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Sistema de Biblioteca' });
});

router.get('/login', function (req, res, next) {
  res.send('Aqui vai aparecer o form de login - aguarde...');
});

router.get('/listagem', function (req, res, next) {
  res.send('Aqui vai aparecer a lista de livros');
});

module.exports = router;
