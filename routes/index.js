var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/chat', function(req, res, next) {
  res.render('chat');
});

module.exports = router;
