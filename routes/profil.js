var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.send('profil respons send');
});

module.exports = router;
