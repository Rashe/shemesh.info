var User = require('../model/user').User;
var Setti = require('../model/settings').Setti;
var async = require('async');
var errors = require('../data/errors');
var data_content = require('../data/content');

exports.get = function (req, res) {
    var username = req.session.user;

    async.parallel({
        last_info: function(callback) {
            User.lastInfos(username, function(cb){
                callback(null, cb);
            });
        },
        showallUsers: function(callback) {
            User.showAllUsers(function (users_data){
                callback(null, users_data);
            });
        },
        reg_settings: function(callback){
            Setti.regEnableCheck(function(sett){
               callback(null, sett);
            });
        }
    }, function (err, results) {
        res.render('services', {data: data_content, css: 'services', users_data: results});
    });

    //User.showAllUsers(function (users_data) {
    //   var users_data = users_data;
    //    res.render('services', {data: data_content, css: 'services', users_data: users_data});
    //});


};
