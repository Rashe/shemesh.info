var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
var mongodbUri = 'mongodb://ra:12@ds035290.mongolab.com:35290/shemesh';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);



mongoose.connect(mongooseUri);
//mongoose.connect('mongodb://localhost/shemesh_js7');
module.exports = mongoose;