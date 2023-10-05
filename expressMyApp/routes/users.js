var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/fran', function (req, res) {
  res.send('FranComida!');
});

module.exports = router;
