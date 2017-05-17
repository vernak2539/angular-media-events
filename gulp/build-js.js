'use strict';

const rollup = require('rollup');
const rollupConfig = require('./config/shared-config');

module.exports = workflow => {
	workflow.subtask('build:js', () => {
		return rollup
			.rollup({
				entry: rollupConfig.entry,
				plugins: rollupConfig.plugins
			})
			.then(bundle => rollupConfig.targets.forEach(target => bundle.write(target)));
	});
};
