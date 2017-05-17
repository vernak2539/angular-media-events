const config = require('./shared-config');

let pkg = require('../../package.json');
let external = Object.keys(pkg.peerDependencies);

export default {
	entry: config.entry,
	plugins: config.plugins,
	external,
	targets: config.targets
};
