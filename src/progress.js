(function() {
  'use strict';

  angular
    .module('media-events')
    .directive('progress', [
      function() {
        return {
          restrict: 'A',
          scope: true,
          link: function(scope, element, attrs) {
            element.on('progress', function(event) {
              var locals = {
                $event: event,
                attrs: {
                  buffered: this.buffered
                }
              };

              scope.$eval(attrs.progress, locals);
            });
          }
        };
      }
    ]);
})();
