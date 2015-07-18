(function() {
  'use strict';

  angular
    .module('media-events')
    .directive('progress', [
      'eval-service',
      function(evalService) {
        return {
          restrict: 'A',
          scope: true,
          link: function(scope, element, attrs) {
            element.on('progress', function(event) {
              var locals = {
                buffered: this.buffered
              };

              evalService.scopeEval({
                scope: scope,
                fn: attrs.progress,
                $event: event,
                attrs: locals
              });
            });
          }
        };
      }
    ]);
})();
