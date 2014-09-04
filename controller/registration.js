var User = require('../model/user').User;
var errors = require('../data/errors');

exports.post = function (req, res, next) {
    var qRes = res,
        user = req.body.username,
        email= req.body.email,
        pass = req.body.password;

    if (user == '' || user == null) {
        res.writeHead(403, {"Content-Type": "text/plain"});
        //res.end(errors.fuck_you);
    } else if (pass == '' || pass == null) {
        res.writeHead(403, {"Content-Type": "text/plain"});
        //res.end(errors.fuck_you);
    } else {
        console.log('huj 1 ',User );
        User.register(user, email, pass, function(err, call) {
            console.log('huj ', call);
        });
        req.session.user = user;
        qRes.send({});
    }
};
