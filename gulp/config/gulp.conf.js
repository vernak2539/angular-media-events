'use strict';

var path = require('path');

module.exports = {
    dirs: {
        src: {
            app: './src/**/*.js',
            gulp: './gulp/**/*.js',
            tests: './tests/specs/**/*.js'
        },
        dist: {
            folder: './dist'
        }
    },
    karma: {
        config: path.join(process.cwd(), './karma.conf.js')
    },
    webpack: {
        config: path.join(process.cwd(), './webpack.config.js')
    }
};
