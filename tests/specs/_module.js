(function() {
    'use strict';

    describe('general tests', function() {
        it('should be a registered module', function() {
            var error = null;

            try {
                angular.module('media-events');
            } catch(err) {
                error = err;
            }

            expect(error).toBeNull();
        });
    });

    describe('eval-service', function() {
      var evalService;
      var sampleOptions;

      beforeEach(module('media-events'));

      beforeEach(inject(function($injector) {
        evalService = $injector.get('eval-service');

        sampleOptions = {
          $event: '<event>',
          fn: '<fn>',
          scope: {
            $eval: jasmine.createSpy(),
            $apply: function(fn) {
              fn();
            }
        };
      }));

      it('should be available', function() {
        expect(typeof evalService === 'object').toBeTruthy();
        expect(typeof evalService.scopeEval === 'function').toBeTruthy();
      });

      describe('scopeEval', function() {
        it('should call an eval with the proper local vars that had been passed', function() {
          var evalSpy = sampleOptions.scope.$eval;

          evalService.scopeEval(sampleOptions);
          expect(evalSpy.calls.count()).toBe(1);
          expect(evalSpy).toHaveBeenCalledWith(sampleOptions.fn, { $event: sampleOptions.$event });
        });

        it('should add locals passed in options if available', function() {
          var evalSpy = sampleOptions.scope.$eval;
          var expectedOptions;

          sampleOptions.attrs = { test: true };
          expectedOptions = {
            $event: sampleOptions.$event,
            attrs: sampleOptions.attrs
          };

          evalService.scopeEval(sampleOptions);
          expect(evalSpy.calls.count()).toBe(1);
          expect(evalSpy).toHaveBeenCalledWith(sampleOptions.fn, expectedOptions);
        });
      });
    });
})();
