var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shemesh_js');
module.exports = mongoose;