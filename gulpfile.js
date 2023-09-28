const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const ugly = require('gulp-uglify');

exports.default = gulp.parallel(styleSCSS, images, scripts);

exports.watch = function() {
    // gulp.watch('.src/styles/*.scss', gulp.parallel(styleSCSS));
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.parallel(styleSCSS));
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, gulp.parallel(scripts));
}