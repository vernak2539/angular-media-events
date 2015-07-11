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
})();
