var User = require('../model/user').User;
var Setti = require('../model/settings').Setti;
var Encript = require('./crypto').Encript;
var errors = require('../data/errors');

exports.post = function (req, res, next) {
        Setti.regEnableCheck(function(callback){
            if( callback.registration == false){
                res.writeHead(403, {"Content-Type": "text/plain"});
                res.end(errors.disabled_reg);
                return;
            }
            else{
                var qRes = res,
                    user = req.body.username,
                    email = req.body.email,
                    pass = req.body.password,
                    hashedPass = Encript(user, pass),
                    regis_data = [user, email, hashedPass];

                if (user == '' || user == null) {
                    res.writeHead(403, {"Content-Type": "text/plain"});
                    res.end(errors.fuck_you);
                } else if (pass == '' || pass == null) {
                    res.writeHead(403, {"Content-Type": "text/plain"});
                    res.end(errors.fuck_you);
                } else {
                    User.register(regis_data, function (call) {
                        if (call == false) {
                            res.writeHead(403, {"Content-Type": "text/plain"});
                            res.end(errors.user_exist);
                        } else {
                            req.session.user = user;
                            qRes.send({});
                        }
                    });
                }
            }
        });
};

//var ip = req.headers['x-forwarded-for'] ||
//    req.connection.remoteAddress ||
//    req.socket.remoteAddress ||
//    req.connection.socket.remoteAddress;

