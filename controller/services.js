var User = require('../model/user').User;
var async = require('async');
var errors = require('../data/errors');
var data_content = require('../data/content');

exports.get = function (req, res) {

    //async.parallel([
    //    function(cb){
    //        users.find({}, cb);
    //    },
    //    function(cb){
    //        articles.find({}, cb);
    //    }
    //], function(results){
    //    // results contains both users and articles
    //});

    User.showAllUsers(function (users_data) {
       var users_data = users_data;
        res.render('services', {data: data_content, css: 'services', users_data: users_data});
    });



};


