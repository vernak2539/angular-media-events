'use strict';

var Server = require('karma').Server;

module.exports = (workflow, gulp, $, config) => {
	workflow.subtask('karma', function(done) {
		const configFile = config.args.ci ? config.karma.ci : config.karma.dev;

		const server = new Server(
			{
				configFile: configFile,
				singleRun: true
			},
			done
		);

		return server.start();
	});
};
