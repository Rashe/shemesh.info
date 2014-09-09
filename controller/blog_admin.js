//var User = require('../model/user').User;
//var Setti = require('../model/settings').Setti;
var Blog = require('../model/blog').Blog;
var async = require('async');
var errors = require('../data/errors');
var data_content = require('../data/content');

exports.get = function (req, res) {
    //var username = req.session.user;

    async.parallel({
        all_posts: function (callback) {
            Blog.showAllPostsAdmin(function (posts) {
                console.log('huj posts', posts);
                callback(null, posts);
            });
        },
        count_posts: function (callback) {
            Blog.countPostsAdmin(function (count) {
                callback(null, count);
            });
        }
    }, function (err, results) {
        res.render('blog_admin', {data: data_content, css: 'blog_admin', blog_admin: results});
    });


    //User.showAllUsers(function (users_data) {
    //   var users_data = users_data;
    //    res.render('services', {data: data_content, css: 'services', users_data: users_data});
    //});


};











