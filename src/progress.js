'use strict';

import EvalService from './eval-service';

const PROGRESS_DIRECTIVE_NAME = 'progress';

const ProgressDirective = (evalService) => ({
    restrict: 'A',
    scope: true,
    link(scope, element, attrs) {
        element.on('progress', function(event) {
            var locals = {
                buffered: this.buffered
            };

            evalService.scopeEval({
                scope: scope,
                fn: attrs.progress,
                $event: event,
                attrs: locals
            });
        });
    }
});

export default {
    name: PROGRESS_DIRECTIVE_NAME,
    main: [
        EvalService.name,
        ProgressDirective
    ]
};
