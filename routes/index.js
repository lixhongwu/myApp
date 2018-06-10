var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/queryCity', function(req, res, next) {
  res.render('queryCity',{cityList:[],province:''});
});


module.exports = router;
