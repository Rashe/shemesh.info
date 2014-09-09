var Blog = require('../model/blog').Blog;
var async = require('async');
var errors = require('../data/errors');
var data_content = require('../data/content');

exports.post = function (req, res, next) {

    var qRes = res,
        user = req.session.user,
        title = req.body.title,
        post_link = req.body.post_link,
        post_body = req.body.post_body,
        post_publish = req.body.publish,
        blog_data = [user, title, post_link, post_body, post_publish];

    Blog.create_post(blog_data, function (call) {
        qRes.send({});
    });
};


