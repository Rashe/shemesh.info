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

router.get('/forgot_pass', function (req, res) {
    res.render('forgot_pass', {data: data_content, css: 'forgot_pass'});
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

router.get('/logout', function (req, res) {
    delete req.session.user;
    res.redirect('/');
});

router.get('/blog', function (req, res) {
    require('../controller/blog').get(req, res);
});

router.get('/blog_article', function (req, res) {
    res.render('blog_article', {data: data_content, css: 'blog'});
});

router.get('/blog_admin', function (req, res) {
    if (!req.session.user) {
        res.redirect('/login');
    }
    else {
        require('../controller/blog_admin').get(req, res);
        //res.render('blog', {data: data_content, css: 'blog'});
    }
});

router.get('/blog_make_post', function (req, res) {
    if (!req.session.user) {
        res.redirect('/login');
    }
    else {
        //require('../controller/blog_make_post').get(req, res);
        res.render('blog_make_post', {data: data_content, css: 'blog_make_post'});
    }
});

router.get('/blog/post/*', function (req, res) {
    require('../controller/blog_postShow').get(req, res);
});
router.get('/blog/post_edit/*', function (req, res) {
    if (!req.session.user) {
        res.redirect('/login');
    } else {
        require('../controller/blog_postEdit').get(req, res);
    }
});

//POST

router.post('/registration', function (req, res) {
    require('../controller/registration').post(req, res);
});

router.post('/reg_onOff', function (req, res) {
    require('../controller/services').post(req, res);
});

router.post('/login', function (req, res) {
    require('../controller/login').post(req, res);
});

router.post('/blog_make', function (req, res) {
    require('../controller/blog_make').post(req, res);
});

router.post('/post_edit', function (req, res) {
    if (!req.session.user) {
        res.redirect('/login');
    } else {
        require('../controller/blog_postEdit').post(req, res);
    }
});

module.exports = router;
