var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.sendFile( __base + 'src/views/index.html' );
});

module.exports = router;
