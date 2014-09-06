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
    },
    lastLogin:{
        type: Date,
        default: Date.now
    },
    lastIp:{
        type: String
    }
});

schema.statics.showAllUsers = function(callback){
    var User = this;
    User.find({}, function(err, users) {
       callback(users);
    });
};

schema.statics.authorize = function (login_data, callback) {
    var User = this;
    User.findOne({username: login_data[0]}, function (err, userDb, next) {
        if (userDb == null) {
            callback(1);
        } else if (userDb.password != login_data[1]) {
            callback(2);
        }
        else {
            userDb.lastLogin = new Date();
            userDb.save();
            callback();
        }
    });
};

schema.statics.register = function (regis_data, callback) {
    var User = this;
    User.findOne({username: regis_data[0]}, function (err, userDb, next) {
        if (userDb != null) {
            callback(false);
        }
        else {
            var createUser = new User({
                username: regis_data[0],
                email: regis_data[1],
                password: regis_data[2]
            });

            createUser.save(function (err) {
                if (err) throw  err;
            });
            callback();
        }
    });
};

schema.pre('save', function(next){
    this.lastLogin = new Date();
    next();
});

exports.User = mongoose.model('User', schema);