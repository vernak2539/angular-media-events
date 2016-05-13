/**
 * angular-media-events - angular directives for media events
 * @author Alex Vernacchia <alvernacchia@gmail.com>
 * @version 0.4.0
 * @repo https://github.com/vernak2539/angular-media-events
 * @license MIT
 * Created: Fri May 13 2016 11:35:17 GMT+0100 (GMT Summer Time)
 */
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
      };
      }
    ]);
})();

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
