(function() {
	'use strict';
	describe('Directive - onPause', function() {
		var $compile;
		var evalService;
		var scope;
		var videoURL;

		beforeEach(function() {
			module('media-events');
		});

		beforeEach(
			inject(function($injector) {
				$compile = $injector.get('$compile');
				evalService = $injector.get('eval-service');
				scope = $injector.get('$rootScope').$new();
				videoURL =
					'https://scontent.cdninstagram.com/hphotos-xfa1/t50.2886-16/11726387_1613973172221601_1804343601_n.mp4';
			})
		);

		it('should fire event when video is paused', function(done) {
			// Arrange
			var template, element;

			scope.callback = function($event) {
				// Assert
				expect($event.type).toBe('pause');
				done();
			};

			template = '<video ng-src="' + videoURL + '" on-pause="callback($event)" />';
			element = $compile(template)(scope);
			scope.$digest();

			// Act
			element[0].play();
			setTimeout(function() {
				element[0].pause();
			}, 500);
		});

		it('should fire event with scope variables', function(done) {
			// Arrange
			var template, element;
			var outsideVar = '<test>';

			scope.otherVar = outsideVar;
			scope.callback = function(otherVar) {
				// Assert
				expect(otherVar).toBe(outsideVar);
				done();
			};

			template = '<video ng-src="' + videoURL + '" on-pause="callback(otherVar)" />';
			element = $compile(template)(scope);
			scope.$digest();

			// Act
			element[0].play();
			setTimeout(function() {
				element[0].pause();
			}, 500);
		});
	});
})();
