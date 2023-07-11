var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log('test')
    res.send('Welcome to stayfresh API !');
});

module.exports = router;
