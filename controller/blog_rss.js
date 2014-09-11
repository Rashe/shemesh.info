var Blog = require('../model/blog').Blog;
var async = require('async');
var errors = require('../data/errors');
var data_content = require('../data/content');

exports.get = function (req, res) {
    Blog.showAllPosts(function (posts) {
        res.render('rss', {data: data_content, css: 'blog', posts: posts});

    });
};











