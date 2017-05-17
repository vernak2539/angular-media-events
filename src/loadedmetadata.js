'use strict';

import EvalService from './eval-service';

const LOADED_METADATA_DIRECTIVE_NAME = 'onLoadedMetadata';

const LoadedMetadataDirective = evalService => ({
	restrict: 'A',
	scope: true,
	link(scope, element, attrs) {
		element.on('loadedmetadata', function(event) {
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
});

export default {
	name: LOADED_METADATA_DIRECTIVE_NAME,
	main: [EvalService.name, LoadedMetadataDirective]
};
