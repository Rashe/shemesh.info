var User = require('../model/user').User;
var errors = require('../data/errors');

exports.post = function (req, res, next) {
    var qRes = res,
        user = req.body.username,
        pass = req.body.password;

    if (user == '' || user == null) {
        res.writeHead(403, {"Content-Type": "text/plain"});
        res.end(errors.fuck_you);

    } else if (pass == '' || pass == null) {

        res.writeHead(403, {"Content-Type": "text/plain"});
        res.end(errors.fuck_you);
    } else {
        User.authorize(user, pass, function(err, user) {
                //todo complete
        });
    }
};