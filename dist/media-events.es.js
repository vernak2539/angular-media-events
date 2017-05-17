var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var EVAL_SERVICE_NAME = 'eval-service';

var EvalService = function () {
	function EvalService() {
		classCallCheck(this, EvalService);
	}

	createClass(EvalService, [{
		key: 'scopeEval',
		value: function scopeEval() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			var scope = options.scope;
			var locals = {
				$event: options.$event
			};

			if (options.attrs) {
				locals.attrs = options.attrs;
			}

			scope.$apply(function () {
				scope.$eval(options.fn, locals);
			});
		}
	}]);
	return EvalService;
}();

var EvalService$1 = {
	name: EVAL_SERVICE_NAME,
	main: EvalService
};

var LOADED_METADATA_DIRECTIVE_NAME = 'onLoadedMetadata';

var LoadedMetadataDirective = function LoadedMetadataDirective(evalService) {
	return {
		restrict: 'A',
		scope: true,
		link: function link(scope, element, attrs) {
			element.on('loadedmetadata', function (event) {
				var locals = {
					width: this.videoWidth,
					height: this.videoHeight
				};

				evalService.scopeEval({
					scope: scope,
					fn: attrs[LOADED_METADATA_DIRECTIVE_NAME],
					$event: event,
					attrs: locals
				});
			});
		}
	};
};

var LoadedMetadata = {
	name: LOADED_METADATA_DIRECTIVE_NAME,
	main: [EvalService$1.name, LoadedMetadataDirective]
};

var PROGRESS_DIRECTIVE_NAME = 'onProgress';

var ProgressDirective = function ProgressDirective(evalService) {
	return {
		restrict: 'A',
		scope: true,
		link: function link(scope, element, attrs) {
			element.on('progress', function (event) {
				var locals = {
					buffered: this.buffered
				};

				evalService.scopeEval({
					scope: scope,
					fn: attrs[PROGRESS_DIRECTIVE_NAME],
					$event: event,
					attrs: locals
				});
			});
		}
	};
};

var Progress = {
	name: PROGRESS_DIRECTIVE_NAME,
	main: [EvalService$1.name, ProgressDirective]
};

var ENDED_DIRECTIVE_NAME = 'onEnded';

var EndedDirective = function EndedDirective(evalService) {
	return {
		restrict: 'A',
		scope: true,
		link: function link(scope, element, attrs) {
			element.on('ended', function (event) {
				evalService.scopeEval({
					scope: scope,
					fn: attrs[ENDED_DIRECTIVE_NAME],
					$event: event
				});
			});
		}
	};
};

var Ended = {
	name: ENDED_DIRECTIVE_NAME,
	main: [EvalService$1.name, EndedDirective]
};

var PLAY_DIRECTIVE_NAME = 'onPlay';

var PlayDirective = function PlayDirective(evalService) {
	return {
		restrict: 'A',
		scope: true,
		link: function link(scope, element, attrs) {
			element.on('play', function (event) {
				evalService.scopeEval({
					scope: scope,
					fn: attrs[PLAY_DIRECTIVE_NAME],
					$event: event
				});
			});
		}
	};
};

var Play = {
	name: PLAY_DIRECTIVE_NAME,
	main: [EvalService$1.name, PlayDirective]
};

var PAUSE_DIRECTIVE_NAME = 'onPause';

var PauseDirective = function PauseDirective(evalService) {
	return {
		restrict: 'A',
		scope: true,
		link: function link(scope, element, attrs) {
			element.on('pause', function (event) {
				evalService.scopeEval({
					scope: scope,
					fn: attrs[PAUSE_DIRECTIVE_NAME],
					$event: event
				});
			});
		}
	};
};

var Pause = {
	name: PAUSE_DIRECTIVE_NAME,
	main: [EvalService$1.name, PauseDirective]
};

var MODULE_NAME = 'media-events';

angular.module(MODULE_NAME, []).service(EvalService$1.name, EvalService$1.main).directive(LoadedMetadata.name, LoadedMetadata.main).directive(Progress.name, Progress.main).directive(Ended.name, Ended.main).directive(Play.name, Play.main).directive(Pause.name, Pause.main);

export default MODULE_NAME;
//# sourceMappingURL=media-events.es.js.map
