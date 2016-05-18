'use strict';

var gulp     = require('gulp');
var workflow = require('gulp-workflow');

workflow
    .load(gulp)
    .task('release', 'Generate dist files', ['clean', 'build:js', 'tests'])
    .task('lint', 'Run JSHint', ['jshint'])
    .task('tests', 'Run unit tests', [['clean', 'lint'], 'build:js', 'karma'], {
        ci: 'For use on TravisCI with SauceLabs'
    });
