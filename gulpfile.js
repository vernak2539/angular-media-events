/* jshint node:true */
'use strict';

var concat     = require('gulp-concat');
var gulp       = require('gulp');
var jshint     = require('gulp-jshint');
var rename     = require('gulp-rename');
var rimraf     = require('gulp-rimraf');
var sourcemaps = require('gulp-sourcemaps');
var uglify     = require('gulp-uglify');

gulp.task('dist', ['clean'], function() {
  gulp.src('./src/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('media-events.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(uglify())
    .pipe(rename('media-events.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/'));
});


gulp.task('clean', function() {
  gulp.src('./dist/')
    .pipe(rimraf());
});

gulp.task('jshint', function() {
  gulp.src([ './src/**', './gulpfile.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});
