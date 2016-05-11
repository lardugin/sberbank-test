var gulp = require('gulp'),
		uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minify_css = require('gulp-minify-css'),
		sass = require('gulp-sass'); 

gulp.task('default', function(){
  console.log('Hello from Gulp!')
});

gulp.task('gulp-uglify', function(){
  gulp.src('scripts/*.js')
  .pipe(uglify())
  .pipe(concat('common.js'))
  .pipe(gulp.dest('build/js'))
});


gulp.task('sass', function () {
  return gulp.src('styles/base.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minify_css())
    .pipe(gulp.dest('build/css/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('styles/**/*.scss', ['sass']);
});


