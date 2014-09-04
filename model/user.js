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
    var User = this;
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


exports.User = mongoose.model('User', schema);