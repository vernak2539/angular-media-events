'use strict';

module.exports = function(config) {
  config.set(require('./karma.conf-base')(config));
};
