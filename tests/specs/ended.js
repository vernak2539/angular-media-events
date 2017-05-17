(function() {
	'use strict';
	describe('Directive - onEnded', function() {
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

		it('should fire event when video has ended', function(done) {
			// Arrange
			var template, element;

			scope.endedCb = function($event) {
				// Assert
				expect($event.type).toBe('ended');
				done();
			};

			// loadedmetatdata has to fire first to get duration
			scope.lmdCb = function() {
				var video = element[0];

				// Act
				video.currentTime = video.duration - 0.02;
				video.play();
			};

			template = '<video ng-src="' + videoURL + '" on-loaded-metadata="lmdCb()"  on-ended="endedCb($event)" />';
			element = $compile(template)(scope);
			scope.$digest();
		});

		it('should fire event with scope variables', function(done) {
			// Arrange
			var template, element;
			var outsideVar = '<test>';

			scope.otherVar = outsideVar;
			scope.endedCb = function(otherVar) {
				// Assert
				expect(otherVar).toBe(outsideVar);
				done();
			};

			// loadedmetatdata has to fire first to get duration
			scope.lmdCb = function() {
				var video = element[0];

				// Act
				video.currentTime = video.duration - 0.02;
				video.play();
			};

			template = '<video ng-src="' + videoURL + '" on-loaded-metadata="lmdCb()"  on-ended="endedCb(otherVar)" />';
			element = $compile(template)(scope);
			scope.$digest();
		});
	});
})();
