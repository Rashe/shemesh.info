var User = require('../model/user').User;
var Setti = require('../model/settings').Setti;
var async = require('async');
var errors = require('../data/errors');
var data_content = require('../data/content');

exports.get = function (req, res) {
    var username = req.session.user;

    async.parallel({
        last_info: function (callback) {
            User.lastInfos(username, function (cb) {
                callback(null, cb);
            });
        },
        showallUsers: function (callback) {
            User.showAllUsers(function (users_data) {
                callback(null, users_data);
            });
        },
        reg_settings: function (callback) {
            Setti.regEnableCheck(function (sett) {
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


// REgistration enable or disable
exports.post = function (req, res, next) {
    var qRes = res,
        head_host = req.headers.host,
        huj_a = req.body.huj,
        cur_user = req.session.user;

     if(((head_host == 'localhost:3000') || (head_host='shemesh.info'))  && (huj_a== 'givi')  ){
         Setti.regEnableChange(cur_user);
     }
    //User.authorize(login_data, function (user_c) {
    //
    //
    //    if (user_c == 1) {
    //        res.writeHead(403, {"Content-Type": "text/plain"});
    //        res.end(errors.no_suchUser);
    //
    //    } else if (user_c == 2) {
    //        res.writeHead(403, {"Content-Type": "text/plain"});
    //        res.end(errors.wrong_pass);
    //    } else {
    //        req.session.user = user;
    //        qRes.send({});
    //    }
    //});

};
