(function() {
  'use strict';

  describe('Directive - progress', function() {
      var $compile;
      var evalService;
      var scope;
      var videoURL;

      beforeEach(function() {
          module('media-events');
      });

      beforeEach(inject(function($injector) {
          $compile    = $injector.get('$compile');
          evalService = $injector.get('eval-service');
          scope       = $injector.get('$rootScope');
          videoURL    = 'https://scontent.cdninstagram.com/hphotos-xfa1/t50.2886-16/11726387_1613973172221601_1804343601_n.mp4';
      }));

      it('should fire progress event, create new variables, use existing vars on scope', function(done) {
          var callback;
          var element;
          var evalSpy;
          var template;
          var testTxt;

          evalSpy = spyOn(evalService, 'scopeEval').and.callThrough();

          callback = function(attrs, $event, test) {
              expect(attrs.buffered).toBeDefined();
              expect($event.bubbles).toBeDefined();
              expect($event.type).toBe('progress');
              expect(test).toBe(testTxt);
              expect(evalSpy.calls.count()).toBe(1);
              done();
          };

          testTxt        = '<test>';
          scope.callback = callback;
          scope.test     = testTxt;

          template = '<video ng-src="'+ videoURL +'" on-progress="callback(attrs, $event, test)" />';
          element  = $compile(template)(scope);
          scope.$digest();
      });
  });
})();
