const express = require('express');
const router = express.Router();

function getTimeArr( type ){

  var count, mins;

  var arr = [];

  var now = new Date();

  switch (type) {

  case '1Day':

    count = 24;
    mins = 60;

    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    break;

  default:

  }

  now = now.getTime();

  for ( var i = 0; i < count; i++ ) {
    var time = now - 60 * mins * 1000 * i;
    arr.unshift([ time / 1000, 100]);
  }

  return arr;
}

router.get('/generator', function(req, res, next) {

  var generator = {
    user: {
      email: 'demo@nxg.me',
    },

    websiteTrends: {
      '1Day': getTimeArr('1Day'),
    },
  };

  res.send(generator);
});

router.post('/generator', function(req, res, next) {
  console.log('save');
  console.log(req.body);
  res.send({status: 'uploaded success'});
});

module.exports = router;
