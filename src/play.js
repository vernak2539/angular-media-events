'use strict';

import EvalService from './eval-service';

const PLAY_DIRECTIVE_NAME = 'onPlay';

const PlayDirective = evalService => ({
	restrict: 'A',
	scope: true,
	link(scope, element, attrs) {
		element.on('play', event => {
			evalService.scopeEval({
				scope: scope,
				fn: attrs[PLAY_DIRECTIVE_NAME],
				$event: event
			});
		});
	}
});

export default {
	name: PLAY_DIRECTIVE_NAME,
	main: [EvalService.name, PlayDirective]
};
