'use strict';

var karma = require('karma').server;

module.exports = function(workflow, gulp, $, config) {
    workflow.subtask('karma', function(done) {
        var configFile = (config.args.ci) ? config.karma.ci : config.karma.dev;

        return karma.start({
            configFile: configFile,
            singleRun: true
        }, done);
    });
};
