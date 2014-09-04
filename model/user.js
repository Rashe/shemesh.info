var crypto = require('crypto');
var mongoose = require('../model/mongoose');

var schema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateCreate: {
        type: Date,
        default: Date.now
    }
});

schema.methods.encryptPassword = function(username, password ) {
    return crypto.createHmac('sha1', username).update(password).digest('hex');
};

schema.statics.authorize = function(username, password, callback) {
    console.log('huj 12' );
    var User = this;
    console.log('huj 13' );
    User.findOne({username: username}, function (err, userDb, next) {
        if (userDb == null) {
            callback('no_user');
        } else if (userDb.password != password) {
            callback('pass_wrong');
        }
        else {
          callback('ok');
        }
    });
};

schema.statics.register = function(username, password, email, callback){
    User.findOne({username: username}, function (err, userDb, next) {
        var User = this;
        if (userDb != null) {
            callback('already');
        }
        else {
            var hashedPass = this.encryptPassword(username, password);
            var createUser = new User({
                username: username,
                email: email,
                password: hashedPass
            });

            createUser.save(function (err) {
                if (err) throw  err;
            });
            callback('ok');
        }
    });
};

exports.User = mongoose.model('User', schema);