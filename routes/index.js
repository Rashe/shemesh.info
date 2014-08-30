var express = require('express');
var data_content = require('../data/content');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { data: data_content });
});

module.exports = router;
