const gulp = require('gulp');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const changed = require('gulp-changed');
const sass = require('gulp-sass');


//compile scc into css
function style() {
    // 1. where is my scss file
    return gulp.src('./src/Assets/scss/**/*.scss')
    // 2. pass that file through sass compiler
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min'}))
    .pipe(changed('./src/Assets/css'))
    //3 . where do I save the compiled CSS?
    .pipe(gulp.dest('./src/Assets/css'))
    //4. stream changes to all brouser
}

exports.default = function() {
    gulp.watch('./src/Assets/scss/**/*.scss', style);
}