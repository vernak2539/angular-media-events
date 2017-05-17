'use strict';

var path = require('path');

function addCwd(relativePath) {
	return path.join(process.cwd(), relativePath);
}

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
		dev: addCwd('./gulp/config/karma.conf.js'),
		ci: addCwd('./gulp/config/karma.conf-ci.js')
	}
};
