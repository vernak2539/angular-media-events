'use strict';

const del = require('del');

module.exports = (workflow, gulp, $, config) => {
	workflow.subtask('clean', function() {
		del.sync(config.dirs.dist.folder);
	});
};
