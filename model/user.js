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

schema.statics.register = function(username, email, password, callback){
    console.log('huj33' );
    var User = this,
        _that = this;

    User.findOne({username: username}, function (err, userDb, next) {
        if (userDb != null) {
            console.log('huj311111' );
            callback('already');
        }
        else {

                var createUser = new User({
                username: username,
                email: email,
                password: password
            });

            createUser.save(function (err) {
                if (err) throw  err;
            });
            console.log('huj1111111111' );
        }
    });
};

exports.User = mongoose.model('User', schema);