'use strict';

var jshint = require('gulp-jshint');

module.exports = function(workflow, gulp, $, config) {
    workflow.subtask('jshint', function() {
        return gulp.src([
                config.dirs.src.app,
                config.dirs.src.gulp,
                config.dirs.src.tests,
                './gulpfile.js'
            ])
           .pipe(jshint())
           .pipe(jshint.reporter('jshint-stylish'))
           .pipe(jshint.reporter('fail'));
    });
};
