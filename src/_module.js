(function() {
  'use strict';

  angular
    .module('media-events', [])
    .service('eval-service', [
      function() {
        this.scopeEval = function(options) {
          var scope;

          options = options || {};
          scope   = options.scope;

          var locals = {
            $event: options.$event
          };

          if(options.attrs) {
            locals.attrs = options.attrs;
          }

          scope.$eval(options.fn, locals);
        }
      }
    ]);
})();
