'use strict';

// change directory name here.
var dir = 'app';


var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var $ = require('gulp-load-plugins')();

var port = 9000;

gulp.task('connect', function () {
    var connect = require('connect');
    var app = connect()
        .use(require('connect-livereload')({ port: 35729 }))
        .use(connect.static(dir))
        .use(connect.directory(dir));

    require('http').createServer(app)
        .listen(port)
        .on('listening', function () {
            console.log('Started connect web server on http://localhost:' + port);
        });
});


gulp.task('serve', ['connect'], function () {
    require('opn')('http://localhost:' + port, 'Google Chrome');
});



gulp.task('styles', function () {
    return gulp.src(dir + '/sass/**/*.scss')
        .pipe($.compass({
            css: dir + '/styles',
            sass: dir + '/sass',
            img: dir + '/images'
        }))
        .pipe(gulp.dest(dir + '/styles'))
        .pipe(reload({stream:true}));
});


gulp.task('default', ['serve'], function () {
    var server = $.livereload();

    gulp.watch(dir + '/sass/**/*.scss', ['styles']);
    gulp.watch([
        dir + '/*.html',
        dir + '/styles/**/*.css',
        dir + '/sass/**/*.scss',
        dir + '/scripts/**/*.js'
    ]).on('change', function (file) {
        server.changed(file.path);
    });
});

