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


exports.Setti = mongoose.model('Setti', schema);