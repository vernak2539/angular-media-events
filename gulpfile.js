/* jshint node:true */
'use strict';

var concat     = require('gulp-concat');
var gulp       = require('gulp');
var header     = require('gulp-header');
var jshint     = require('gulp-jshint');
var karma      = require('karma').server;
var pkg        = require('./package.json');
var rename     = require('gulp-rename');
var rimraf     = require('gulp-rimraf');
var sourcemaps = require('gulp-sourcemaps');
var uglify     = require('gulp-uglify');

var banner = [
  '/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @author <%= pkg.author %>',
  ' * @version <%= pkg.version %>',
  ' * @repo <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' * Created: ' + new Date(),
  ' */',
  ''
].join('\n');

gulp.task('dist', ['clean'], function() {
  gulp.src('./src/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('media-events.js'))
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest('./dist/'))
    .pipe(uglify())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(rename('media-events.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('clean', function() {
  gulp.src('./dist/')
    .pipe(rimraf());
});

gulp.task('jshint', function() {
  gulp.src([ './src/**', './tests/specs/**', './gulpfile.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('karma', ['jshint'], function(done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('watch', function() {
  gulp.watch('./src/**', ['dist']);
});
