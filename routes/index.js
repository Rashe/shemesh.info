var express = require('express');
var data_content = require('../data/content');
var router = express.Router();

/* GET */
router.get('/', function (req, res) {
    res.render('index', {data: data_content, css: 'home'});
});

router.get('/about', function (req, res) {
    res.render('about', {data: data_content, css: 'about'});
});

router.get('/user_normal', function (req, res) {
    res.render('user_normal', {data: data_content, css: 'user_normal'});
});

router.get('/login', function (req, res) {
    if (!req.session.user) {
        res.render('login', {data: data_content, css: 'login'});
    }
    else {
        res.redirect('/services')
    }
});

router.get('/registration', function (req, res) {
    if (!req.session.user) {
        res.render('registration', {data: data_content, css: 'registration'});
    }
    else {
        res.redirect('/services')
    }
});

router.get('/services', function (req, res) {
    if (!req.session.user) {
        res.redirect('/login');
    }
    else {
        require('../controller/services').get(req, res);
        //res.render('services', {data: data_content, css: 'services'});
    }
});


//POST

router.post('/registration', function (req, res) {
    require('../controller/registration').post(req, res);
});

router.post('/login', function (req, res) {
    require('../controller/login').post(req, res);
});
module.exports = router;
