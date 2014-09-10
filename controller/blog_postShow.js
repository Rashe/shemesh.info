var Blog = require('../model/blog').Blog;
var async = require('async');
var url = require('url');
var errors = require('../data/errors');
var data_content = require('../data/content');

exports.get = function (req, res) {
    var url_parts = url.parse(req.url, true).pathname.split("/");
    var post_url = url_parts[3];
    Blog.showPost(post_url, function (callback) {
        if(callback == false){
            res.render('error', {data: data_content});
        }else{
            res.render('blog_article', {data: data_content, css: 'blog', post_data: callback});
        }
    });
};






