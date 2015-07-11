/**
 * angular-media-events - angular directives for media events
 * @author Alex Vernacchia <alvernacchia@gmail.com>
 * @version 0.2.0
 * @repo https://github.com/vernak2539/angular-media-events
 * @license MIT
 * Created: Sat Jul 11 2015 20:52:41 GMT+0100 (BST)
 */
(function() {
  'use strict';

  angular.module('media-events', []);
})();

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
