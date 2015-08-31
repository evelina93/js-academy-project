/**
 * Created by Evelina.Vaduva on 8/20/2015.
 */
var path = require("path");
var fs = require('fs');
var connectLR = require('connect-livereload');
var connect = require('connect');
var serveStatic = require('serve-static');
var livereload = require('gulp-livereload');
var gutil = require('gulp-util');
var http = require('http');

var gulp = require('gulp');
var webpack = require("webpack");
var gulpWebpack = require("gulp-webpack");
var rename = require("gulp-rename");

var server = function (paths, port) {
    var app, i, len, p;
    if (port == null) {
        port = 9001;
    }
    app = connect().use(connectLR()).use(function (req, res, next) {
        var filename, found, i, len, p;
        filename = req.url.split('?', 2)[0];
        if (req.url !== '/') {
            found = false;
            for (i = 0, len = paths.length; i < len; i++) {
                p = paths[i];

                if (fs.existsSync(path.join(p, filename))) {
                    return next();
                }
            }
            if (!req.url.match(/\.[a-zA-Z0-9]{3,4}/)) {
                gutil.log('WARNING: path [' + req.url + '] not found, redirecting to index.html');
                req.url = '/index.html';
            }
        }
        return next();
    });
    for (i = 0, len = paths.length; i < len; i++) {
        p = paths[i];
        app.use(serveStatic(p));
    }
    return require('http').createServer(app).listen(port).on('listening', function () {
        gutil.log("Started connect web server on http://localhost:" + port);
        return require('opn')("http://localhost:" + port);
    });
};



gulp.task("html", function(){
    return gulp.src(["./src/**/*.*", "!./src/**/*.js"])
        .pipe(gulp.dest("./dist"))
});

gulp.task("compile", function () {
    return gulp.src("./src/scripts/app.js")
        .pipe(gulpWebpack({
            devtool: '#inline-source-map',
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        loader: 'babel-loader?stage=0'
                    },{
                        test: /\.html$/,
                        loader: "ngtemplate?relativeTo=" + (path.resolve(__dirname, './src')) + "/!html?root=./src"
                    }
                ]
            }
        }))
        .pipe(rename("app.js"))
        .pipe(gulp.dest("./dist/scripts"));

});

gulp.task('serve', ["compile", 'html'], function(){
    gulp.watch("./src/**/*.js", ['compile']);
    gulp.watch(["./src/**/*.*", "!./src/**/*.js"], ['html']);

    livereload.listen();
    gulp.watch([
        './dist/**/*.*',
    ]).on('change', function (file) {
        return setTimeout(function () {
            return livereload.changed(file);
        }, 100);
    });
    server(['./dist'])
});