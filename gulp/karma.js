'use strict';

var karma = require('karma').server;

module.exports = function(workflow, gulp, $, config) {
    workflow.subtask('karma', function(done) {
        return karma.start({
            configFile: config.karma.config,
            singleRun: true
        }, done);
    });
};
