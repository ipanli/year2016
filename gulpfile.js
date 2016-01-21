var gulp = require('gulp');

var day = '20160120',
    mainjs = 'app',
    maincss = 'app';

// 引入组件
var sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');



var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;



//编译Sass，Autoprefix及缩小化
gulp.task('sass', function() {
    return gulp.src('./src/scss/'+ maincss +'.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./._temp/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('./build/css'))
        .pipe(reload({stream: true}))
        .pipe(notify({ message: 'Styles  task complete' }));
});



gulp.task('html',function(){
    gulp.src('./*.html')
        .pipe(reload({stream: true}))
});



gulp.task('scripts',function(){
    return gulp.src('./src/js/*.js')
        .pipe(concat(mainjs+'.js'))
        .pipe(gulp.dest('./._temp/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js/'))
        .pipe(reload({stream: true}))
        .pipe(notify({ message: 'Scripts task complete' }));

});


// 静态服务器 + 监听 scss/html 文件
gulp.task('dev', ['sass'], function() {

    browserSync.init({
        server: './'
    });

    // 看守.scss 档
    gulp.watch('./src/scss/*.scss', ['sass']);

    // 看守所有.js档

    gulp.watch('./src/js/*.js', ['html','scripts']);

    // 看守所有.html
    gulp.watch('./*.html').on('change', reload);


});






gulp.task('default', ['dev']);
