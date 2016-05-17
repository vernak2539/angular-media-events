'use strict';

import EvalService  from './eval-service';
import LoadedMetadata from './loadedmetadata';
import Progress from './progress';
import Play from './play';
import Pause from './pause';

angular
    .module('media-events', [])
    .service(EvalService.name, EvalService.main)
    .directive(LoadedMetadata.name, LoadedMetadata.main)
    .directive(Progress.name, Progress.main)
    .directive(Play.name, Play.main)
    .directive(Pause.name, Pause.main);
