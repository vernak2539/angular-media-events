(function() {
  'use strict';

  angular
    .module('media-events')
    .directive('loadedMetadata', [
      function() {
        return {
          restrict: 'A',
          scope: true,
          link: function(scope, element, attrs) {
            element.on('loadedmetadata', function(event) {
              var locals = {
                $event: event,
                attrs: {
                  width: this.videoWidth,
                  height: this.videoHeight
                }
              };

              // Need to figure out what an error looks like. PR would be great
              // https://github.com/vernak2539/angular-media-events/issues/1

              scope.$eval(attrs.loadedMetadata, locals);
            });
          }
        };
      }
    ]);

})();
