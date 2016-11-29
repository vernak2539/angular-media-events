const EVAL_SERVICE_NAME = 'eval-service';

class EvalService {
    scopeEval(options = {}) {
        var scope = options.scope;
        var locals = {
            $event: options.$event
        };

        if (options.attrs) {
            locals.attrs = options.attrs;
        }

        scope.$apply(() => {
            scope.$eval(options.fn, locals);
        });
    }
}

export default {
    name: EVAL_SERVICE_NAME,
    main: EvalService
};
