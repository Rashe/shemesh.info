var mongoose = require('../model/mongoose');

var schema = mongoose.Schema({
    registration: {
        type: Boolean,
        default: true
            },
    whoChanged: {
        type: String
    }
});

schema.statics.regEnableCheck = function(callback){
    var Setti = this;
    Setti.find({}, function (err, sett) {
        if(sett.registration == undefined){
            var def_data = {
              registration: true,
                whoChanged: 'Not been changed'
            };
            callback(def_data);
        }else{
            callback(sett);
        }
    });
};

schema.statics.regEnableChange = function(rdata, callback){
    var Setti = this;
    Setti.find({}, function (err, sett) {
        if(sett.registration == false){
            sett.registration = true;
            sett.save();
            callback();
        }
        else{
            sett.registration = false;
            sett.save();
            callback();
        }

    });
};

exports.Setti = mongoose.model('Setti', schema);