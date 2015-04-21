var gulp = require('gulp');
var inlineCss = require('gulp-inline-css');
var sass = require('gulp-sass');
var zip = require('gulp-zip');

var paths = {
  scss: './src/scss/**/*.scss',
  html: './src/index.html',
  assets: './src/images/**/*.*',
  distFonts: './dist/fonts/',
  distDir: 'dist/',
  distImages: 'dist/images',
  cssDir: './src/css'
};

gulp.task('default', ['build', 'zip'], function() {
  return gulp.watch([
      paths.scss,
      paths.cssDir,
      paths.html,
      paths.assets
    ], ['default']);
});

gulp.task('build', ['sass'], function() {
  return gulp.src(paths.html)
    .pipe(inlineCss())
    .pipe(gulp.dest(paths.distDir));
});

gulp.task('sass', ['img-copy'], function () {
  gulp.src(paths.scss)
    .pipe(sass())
    .pipe(gulp.dest(paths.cssDir));
});

gulp.task('img-copy', function() {
  return gulp.src(paths.assets)
  .pipe(gulp.dest(paths.distImages));
});

gulp.task('zip', ['build'], function () {
  return gulp.src('src/*')
    .pipe(zip('archive.zip'))
    .pipe(gulp.dest('dist'));
});