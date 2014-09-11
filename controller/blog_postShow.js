var Blog = require('../model/blog').Blog;
var async = require('async');
var url = require('url');
var errors = require('../data/errors');
var Valida = require('./validator').Valida;
var data_content = require('../data/content');

exports.get = function (req, res) {
    var url_parts = url.parse(req.url, true).pathname.split("/");
    var post_url = Valida(url_parts[3], 'str_num');
    if(post_url == false){
        res.writeHead(403, {"Content-Type": "text/plain"});
        res.end(errors.fuck_you);
    }
    Blog.showPost(post_url, function (callback) {
        if(callback == false){
            res.render('error', {data: data_content});
        }else{
            res.render('blog_article', {data: data_content, css: 'blog', post_data: callback});
        }
    });
};






