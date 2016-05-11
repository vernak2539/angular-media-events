(function() {
  'use strict';

  angular
    .module('media-events')
    .directive('onPause', [
      'eval-service',
      function(evalService) {
        return {
          restrict: 'A',
          scope: true,
          link: function(scope, element, attrs) {
            element.on('pause', function(event) {
              evalService.scopeEval({
                scope: scope,
                fn: attrs.onPause,
                $event: event
              });
            });
          }
        };
      }
    ]);

})();
