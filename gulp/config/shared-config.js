const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const babelrc = require('babelrc-rollup').default;
const pkg = require('../../package.json');

const entry = './src/_module.js';
const plugins = [
	resolve({
		jsnext: true,
		main: true
	}),
	babel(
		babelrc({
			path: './src/babel.rc'
		})
	)
];
const targets = [
	{
		dest: pkg.main,
		format: 'umd',
		moduleName: 'angularMediaEvents',
		sourceMap: true
	},
	{
		dest: pkg.module,
		format: 'es',
		sourceMap: true
	}
];

module.exports = {
	plugins,
	entry,
	targets
};
