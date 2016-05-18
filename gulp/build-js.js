'use strict';

var webpack = require('webpack');

module.exports = function(workflow, gulp, $, config) {
    workflow.subtask('build:js', function(done) {
        var webpackConfig = require(config.webpack.config);
        var devWebpackCompiler = webpack(webpackConfig);

        devWebpackCompiler.run(done);
    });
};
