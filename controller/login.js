var User = require('../model/user').User;
var Encript = require('./crypto').Encript;
var errors = require('../data/errors');

exports.post = function (req, res, next) {
    var qRes = res,
        user = req.body.username,
        pass = req.body.password,
        hashedPass = Encript(user, pass),
        login_data = [user, hashedPass];

    if (user == '' || user == null) {
        res.writeHead(403, {"Content-Type": "text/plain"});
        res.end(errors.fuck_you);

    } else if (pass == '' || pass == null) {

        res.writeHead(403, {"Content-Type": "text/plain"});
        res.end(errors.fuck_you);
    } else {
        User.authorize(login_data, function (user_c) {
            if (user_c == 1) {
                res.writeHead(403, {"Content-Type": "text/plain"});
                res.end(errors.no_suchUser);

            } else if (user_c == 2) {
                res.writeHead(403, {"Content-Type": "text/plain"});
                res.end(errors.wrong_pass);
            } else {
                req.session.user = user;
                qRes.send({});
            }
        });
    }
};