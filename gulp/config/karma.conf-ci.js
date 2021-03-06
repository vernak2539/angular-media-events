'use strict';

module.exports = function(config) {
	var karmaConfig = require('./karma.conf-base')(config);

	var customLaunchers = {
		sl_chrome: {
			base: 'SauceLabs',
			browserName: 'chrome',
			platform: 'Windows 7'
		},
		sl_chrome_win_8: {
			base: 'SauceLabs',
			browserName: 'chrome',
			platform: 'Windows 8'
		},
		sl_chrome_win_10: {
			base: 'SauceLabs',
			browserName: 'chrome',
			platform: 'Windows 10'
		},
		sl_firefox: {
			base: 'SauceLabs',
			browserName: 'firefox',
			platform: 'Windows 7'
		},
		sl_firefox_win_8: {
			base: 'SauceLabs',
			browserName: 'firefox',
			platform: 'Windows 8'
		},
		sl_firefox_win_10: {
			base: 'SauceLabs',
			browserName: 'firefox',
			platform: 'Windows 10'
		},
		sl_edge_14: {
			base: 'SauceLabs',
			browserName: 'MicrosoftEdge',
			platform: 'Windows 10',
			version: '14'
		},
		sl_edge_13: {
			base: 'SauceLabs',
			browserName: 'MicrosoftEdge',
			platform: 'Windows 10',
			version: '13'
		},
		sl_ie_11: {
			base: 'SauceLabs',
			browserName: 'internet explorer',
			platform: 'Windows 10',
			version: '11'
		},
		sl_firefox_osx: {
			base: 'SauceLabs',
			platform: 'OS X 10.12',
			browserName: 'firefox'
		},
		sl_chrome_osx: {
			base: 'SauceLabs',
			platform: 'OS X 10.12',
			browserName: 'chrome'
		}
	};

	karmaConfig.browsers = Object.keys(customLaunchers);
	karmaConfig.captureTimeout = 120000;
	karmaConfig.customLaunchers = customLaunchers;
	karmaConfig.reporters = ['dots', 'saucelabs'];
	karmaConfig.singleRun = true;
	karmaConfig.sauceLabs = {
		recordVideo: true,
		testName: 'Build: ' + (process.env.TRAVIS_BUILD_NUMBER || 'Local') + ' - Angular Media Events'
	};

	config.set(karmaConfig);
};
