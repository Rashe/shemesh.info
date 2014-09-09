var mongoose = require('../model/mongoose');

var schema = mongoose.Schema({
    post_user: {
        type: String
    },
    post_title: {
        type: String
    },
    post_body: {
        type: String
    },
    post_link: {
        type: String
    },
    post_published: {
        type: Boolean
    },
    post_dateCreate: {
        type: Date,
        default: Date.now
    }
});

schema.statics.showAllPosts = function (callback) {
    var Blog = this;
    Blog.find({post_published: true}, function (err, posts) {
        callback(posts);
    });
};

schema.statics.showAllPostsAdmin = function (callback) {
    var Blog = this;
    Blog.find({}, function (err, posts) {
        if (posts.length != 0) {
            console.log('huj here', posts);
            callback(posts);
        } else {
            var def_data = {
                def_data: "No posts"
            };
            callback(def_data);
        }
    });
};

schema.statics.countPostsAdmin = function (callback) {
    var Blog = this;
    Blog.count({}, function (err, posts) {
        if (posts != null) {
            callback(posts);
        } else {
            var def_data_count = {
                def_data_count: "0"
            };
            callback(def_data_count);
        }
    });
};
//
//schema.statics.lastInfos = function (Blogname, callback) {
//    var Blog = this;
//    Blog.findOne({Blogname: Blogname}, function (err, BlogDb, next) {
//        if (BlogDb.lastLogin == null) {
//            callback(BlogDb.dateCreate);
//        } else {
//            callback(BlogDb.lastLogin);
//        }
//    });
//};
//
//schema.statics.authorize = function (login_data, callback) {
//    var Blog = this;
//    Blog.findOne({Blogname: login_data[0]}, function (err, BlogDb, next) {
//        if (BlogDb == null) {
//            callback(1);
//        } else if (BlogDb.password != login_data[1]) {
//            callback(2);
//        }
//        else {
//            BlogDb.lastLogin = new Date();
//            BlogDb.save();
//            callback();
//        }
//    });
//};
//
schema.statics.create_post = function (post_data, callback) {
    var Blog = this;
    var createBlog = new Blog({
        Blogname: regis_data[0],
        email: regis_data[1],
        password: regis_data[2]
    });

    createBlog.save(function (err) {
        if (err) throw  err;
    });
    callback();

};

//
//schema.pre('save', function (next) {
//    this.lastLogin = new Date();
//    next();
//});

exports.Blog = mongoose.model('Blog', schema);