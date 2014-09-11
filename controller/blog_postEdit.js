var Blog = require('../model/blog').Blog;
var async = require('async');
var url = require('url');
var errors = require('../data/errors');
var data_content = require('../data/content');

exports.get = function (req, res) {
    var url_parts = url.parse(req.url, true).pathname.split("/");
    var post_url = url_parts[3];
    Blog.showPostEdit(post_url, function (callback) {
        if(callback == false){
            res.render('error', {data: data_content});
        }else{
            res.render('blog_edit_post', {data: data_content, css: 'blog', post_data: callback});
        }
    });
};


exports.post = function (req, res, next) {
    var qRes = res,
        user = req.session.user,
        title = req.body.title,
        post_link = req.body.post_link,//TODO: make automatic link
        post_body = req.body.post_body,
        post_publish = req.body.publish,
        blog_data = [user, title, post_link, post_body, post_publish];

    Blog.create_post(blog_data, function (call) {
        qRes.send({});
    });
};


