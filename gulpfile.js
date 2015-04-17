var gulp = require('gulp');
var inlineCss = require('gulp-inline-css');
var sass = require('gulp-sass');
 
gulp.task('build', function() {
  return gulp.src('./*.html')
    .pipe(inlineCss())
    .pipe(gulp.dest('dist/'));
});

gulp.task('sass', function () {
  gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});