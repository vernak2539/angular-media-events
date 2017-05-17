'use strict';

import EvalService from './eval-service';

const PAUSE_DIRECTIVE_NAME = 'onPause';

const PauseDirective = evalService => ({
	restrict: 'A',
	scope: true,
	link(scope, element, attrs) {
		element.on('pause', event => {
			evalService.scopeEval({
				scope: scope,
				fn: attrs[PAUSE_DIRECTIVE_NAME],
				$event: event
			});
		});
	}
});

export default {
	name: PAUSE_DIRECTIVE_NAME,
	main: [EvalService.name, PauseDirective]
};
