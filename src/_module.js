'use strict';

const MODULE_NAME = 'media-events';

import EvalService  from './eval-service';
import Ended from './ended';
import LoadedMetadata from './loadedmetadata';
import Pause from './pause';
import Play from './play';
import Progress from './progress';

angular
    .module(MODULE_NAME, [])
    .service(EvalService.name, EvalService.main)
    .directive(Ended.name, Ended.main)
    .directive(LoadedMetadata.name, LoadedMetadata.main)
    .directive(Play.name, Play.main)
    .directive(Progress.name, Progress.main)
    .directive(Pause.name, Pause.main);

module.exports = MODULE_NAME;
