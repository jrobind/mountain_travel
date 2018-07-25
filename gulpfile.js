const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const uglify = require('gulp-uglify');
const watch = require('gulp-watch');

// compile to css 
gulp.task('sass', function() {
    return gulp.src('./style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

// watch files
gulp.task('watch', function() {
   gulp.watch('./sass/**/*.scss', ['sass']); 
});

// build
gulp.task('build', ['sass']);

gulp.task('default', function() {
   gulp.start('build'); 
});