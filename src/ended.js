'use strict';

import EvalService from './eval-service';

const ENDED_DIRECTIVE_NAME = 'onEnded';

const EndedDirective = (evalService) => ({
    restrict: 'A',
    scope: true,
    link(scope, element, attrs) {
        element.on('ended', (event) => {
            evalService.scopeEval({
                scope: scope,
                fn: attrs[ENDED_DIRECTIVE_NAME],
                $event: event
            });
        });
    }
});

export default {
    name: ENDED_DIRECTIVE_NAME,
    main: [
        EvalService.name,
        EndedDirective
    ]
};
