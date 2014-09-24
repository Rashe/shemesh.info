var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('static-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('./model/mongoose');
var sass = require('node-sass');
var routes = require('./routes/index');

var app = express();

var swig = require('swig');
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

if (app.get('env') === 'development') {
    app.set('view cache', false);
    swig.setDefaults({cache: false});
}
else {
    app.set('view cache', true);
    swig.setDefaults({cache: 'memory'});
}
//swing end

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//app.use(favicon());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({
    cookie: {
        path: '/',
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    },
    secret: '12'
}));

app.use('/', routes);

app.use(express.static(path.join(__dirname, 'public')));

if (app.get('env') === 'development') {
    app.use(express.static(path.join(__dirname, 'public/dev')));
    app.use(sass.middleware({
        src: __dirname + '/public/dev/sass',
        dest: __dirname + '/public/dev',
        debug: true
    }));
}
else {
    app.use(express.static(path.join(__dirname, 'public/dev')));
    app.use(sass.middleware({
        src: __dirname + '/public/dev/sass',
        dest: __dirname + '/public/dev',
        debug: false,
        outputStyle: 'compressed'
    }));
}

app.use('/', routes);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        console.log('error from app.js', err);
        res.status(err.status || 500);
        var data_content = require('./data/content');
        res.render('error', {
            message: err.message,
            error: err,
            data: data_content
        });
    });
}
else {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        var data_content = require('./data/content');
        res.render('error', {
            message: err.message,
            data: data_content,
            error: {}
        });
    });
}

swig.setFilter('substr', function (input) {
  var content = input.replace(/(<p>|<\/p>)/g, "");
    var shorten_content = content.substring(0, 450);
    return ('<p>'+ shorten_content+ '</p>')
});

module.exports = app;
