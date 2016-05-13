(function() {
  'use strict';

  angular
    .module('media-events')
    .directive('onPlay', [
      'eval-service',
      function(evalService) {
        return {
          restrict: 'A',
          scope: true,
          link: function(scope, element, attrs) {
            element.on('play', function(event) {
              evalService.scopeEval({
                scope: scope,
                fn: attrs.onPlay,
                $event: event
              });
            });
          }
        };
      }
    ]);
})();
