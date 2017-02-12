(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _evalService = __webpack_require__(1);
	
	var _evalService2 = _interopRequireDefault(_evalService);
	
	var _loadedmetadata = __webpack_require__(3);
	
	var _loadedmetadata2 = _interopRequireDefault(_loadedmetadata);
	
	var _progress = __webpack_require__(6);
	
	var _progress2 = _interopRequireDefault(_progress);
	
	var _ended = __webpack_require__(2);
	
	var _ended2 = _interopRequireDefault(_ended);
	
	var _play = __webpack_require__(5);
	
	var _play2 = _interopRequireDefault(_play);
	
	var _pause = __webpack_require__(4);
	
	var _pause2 = _interopRequireDefault(_pause);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MODULE_NAME = 'media-events';
	
	angular.module(MODULE_NAME, []).service(_evalService2.default.name, _evalService2.default.main).directive(_loadedmetadata2.default.name, _loadedmetadata2.default.main).directive(_progress2.default.name, _progress2.default.main).directive(_ended2.default.name, _ended2.default.main).directive(_play2.default.name, _play2.default.main).directive(_pause2.default.name, _pause2.default.main);
	
	module.exports = MODULE_NAME;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EVAL_SERVICE_NAME = 'eval-service';
	
	var EvalService = function () {
	    function EvalService() {
	        _classCallCheck(this, EvalService);
	    }
	
	    _createClass(EvalService, [{
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
	
	exports.default = {
	    name: EVAL_SERVICE_NAME,
	    main: EvalService
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _evalService = __webpack_require__(1);
	
	var _evalService2 = _interopRequireDefault(_evalService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
	exports.default = {
	    name: ENDED_DIRECTIVE_NAME,
	    main: [_evalService2.default.name, EndedDirective]
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _evalService = __webpack_require__(1);
	
	var _evalService2 = _interopRequireDefault(_evalService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
	exports.default = {
	    name: LOADED_METADATA_DIRECTIVE_NAME,
	    main: [_evalService2.default.name, LoadedMetadataDirective]
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _evalService = __webpack_require__(1);
	
	var _evalService2 = _interopRequireDefault(_evalService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
	exports.default = {
	    name: PAUSE_DIRECTIVE_NAME,
	    main: [_evalService2.default.name, PauseDirective]
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _evalService = __webpack_require__(1);
	
	var _evalService2 = _interopRequireDefault(_evalService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
	exports.default = {
	    name: PLAY_DIRECTIVE_NAME,
	    main: [_evalService2.default.name, PlayDirective]
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _evalService = __webpack_require__(1);
	
	var _evalService2 = _interopRequireDefault(_evalService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
	exports.default = {
	    name: PROGRESS_DIRECTIVE_NAME,
	    main: [_evalService2.default.name, ProgressDirective]
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=media-events.js.map