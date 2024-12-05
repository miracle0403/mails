var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* send proposal */
router.post('/send-prop', function(req, res, next) {
  console.log("fd")
});

module.exports = router;
