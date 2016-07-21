'use strict';

const MODULE_NAME = 'media-events';

import EvalService  from './eval-service';
import LoadedMetadata from './loadedmetadata';
import Progress from './progress';
import Ended from './ended';
import Play from './play';
import Pause from './pause';

angular
    .module(MODULE_NAME, [])
    .service(EvalService.name, EvalService.main)
    .directive(LoadedMetadata.name, LoadedMetadata.main)
    .directive(Progress.name, Progress.main)
    .directive(Ended.name, Ended.main)
    .directive(Play.name, Play.main)
    .directive(Pause.name, Pause.main);

module.exports = MODULE_NAME;
