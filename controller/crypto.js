var crypto = require('crypto');

function Encript(username, password ){
    return crypto.createHmac('sha1', username).update(password).digest('hex');
}

exports.Encript = Encript;