var express = require('express');
var data_content = require('../data/content');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { data: data_content, css: 'home' });
});

router.get('/about', function(req, res) {
    res.render('about', { data: data_content, css:'about' });
});

router.get('/user_normal', function(req, res) {
    res.render('user_normal', { data: data_content, css:'user_normal' });
});

module.exports = router;
