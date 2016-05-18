'use strict';

var del = require('del');

module.exports = function(workflow, gulp, $, config) {
    workflow.subtask('clean', function() {
        del.sync(config.dirs.dist.folder);
    });
};
