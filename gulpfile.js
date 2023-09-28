const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemap = require('gulp-sourcemaps');

const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const ugly = require('gulp-uglify');

function convertSCSS() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sourcemap.init())
        .pipe(sass({
            // outputStyle: 'compressed'
        }))
        .pipe(rename('style.css'))
        .pipe(sourcemap.write('./maps'))
        .pipe(gulp.dest('./dist/css'));
}

function minifyImages() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

function uglifyJS() {
    return gulp.src('./src/scripts/*.js')
        .pipe(ugly())
        .pipe(rename('script.js'))
        .pipe(gulp.dest('./dist/js'));
}

exports.default = gulp.parallel(convertSCSS, minifyImages, uglifyJS);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.parallel(convertSCSS));
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, gulp.parallel(uglifyJS));
}