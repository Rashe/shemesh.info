var User = require('../model/user').User;
var async = require('async');
var errors = require('../data/errors');
var data_content = require('../data/content');

exports.get = function (req, res) {
    var username = req.session.user;

    async.parallel({
        one: function(callback) {
            User.lastInfos(username, function(cb){
                callback(null, cb);
            });
        },
        two: function(callback) {
            User.showAllUsers(function (users_data){
                callback(null, users_data);
            });


        }
    }, function (err, results) {
        res.render('services', {data: data_content, css: 'services', users_data: results});
        console.log('hujresults ', results);
    });

    //User.showAllUsers(function (users_data) {
    //   var users_data = users_data;
    //    res.render('services', {data: data_content, css: 'services', users_data: users_data});
    //});


};
