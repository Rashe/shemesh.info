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

schema.statics.regEnableCheck = function (callback) {
    var Setti = this;
    Setti.findOne({}, function (err, sett) {
        if (sett == null ) {
            var first_setting = new Setti({
                registration: true,
                whoChanged: 'Not been changed'
            });
            first_setting.save(function (err) {
                if (err) throw err;
            });
            var def_data = {
                registration: true, whoChanged: 'Not been changed'
            };
            callback(def_data);
        } else {
            callback(sett);
        }
    });
};

schema.statics.regEnableChange = function (rdata) {
    var Setti = this;
    Setti.findOne({}, function (err, sett) {
        if(sett != null){
            if (sett.registration == false) {
                sett.registration = true;
                sett.whoChanged = rdata;
                sett.save();
            }
            else {
                sett.registration = false;
                sett.whoChanged = rdata;
                sett.save();
            }
        }else{
            var createSett = new Setti({
                whoChanged: rdata
            });
            createSett.save(function(err){
               if(err) throw  err;
            });
        }
    });
};

exports.Setti = mongoose.model('Setti', schema);