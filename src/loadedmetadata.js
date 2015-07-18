(function() {
  'use strict';

  angular
    .module('media-events')
    .directive('loadedMetadata', [
      'eval-service',
      function(evalService) {
        return {
          restrict: 'A',
          scope: true,
          link: function(scope, element, attrs) {
            element.on('loadedmetadata', function(event) {
              var locals = {
                width: this.videoWidth,
                height: this.videoHeight
              };

              evalService.scopeEval({
                scope: scope,
                fn: attrs.loadedMetadata,
                $event: event,
                attrs: locals
              });
            });
          }
        };
      }
    ]);

})();
