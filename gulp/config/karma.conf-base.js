'use strict';

module.exports = function(config) {
  return {
    basePath: process.cwd(),
    frameworks: ['jasmine'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'dist/*.js',
      'tests/specs/*.js'
    ],
    exclude: [],
    preprocessors: {},
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    singleRun: false,
    autoWatch: true,
    reporters: ['progress'],
    browsers: ['Chrome', 'Firefox']
  };
};
