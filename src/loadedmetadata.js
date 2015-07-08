(function() {
  'use strict';

  angular
    .module('media-events')
    .directive('loadedMetadata', function() {
      return {
        restrict: 'E',
        scope: true,
        link: function(scope, element, attrs) {
          element.bind('loadedmetadata', function() {
            scope.element = this;

            scope.$eval(attrs.loadedMetadata);
          });
        }
      };
    });
})();
