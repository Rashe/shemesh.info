var Blog = require('../model/blog').Blog;
var async = require('async');
var errors = require('../data/errors');
var data_content = require('../data/content');

exports.get = function (req, res) {
    //var username = req.session.user;
            Blog.showAllPosts(function (posts) {
                res.render('blog', {data: data_content, css: 'blog', posts: posts});

            });



    //User.showAllUsers(function (users_data) {
    //   var users_data = users_data;
    //    res.render('services', {data: data_content, css: 'services', users_data: users_data});
    //});


};











