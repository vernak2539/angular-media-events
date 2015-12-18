# Angular Media Events [![Build Status](https://travis-ci.org/vernak2539/angular-media-events.svg?branch=master)](https://travis-ci.org/vernak2539/angular-media-events)

This library should introduce angular directives that respond to [events on media objects][1].

[![Sauce Test Status](https://saucelabs.com/browser-matrix/alvernacchia.svg)](https://saucelabs.com/u/alvernacchia)


*Please note, the SauceLabs badge will show results for all tests run, not just master. If the build status is "passing" on the master branch, you can be sure that all these browser versions are passing.*

#### Supported Events

This list should grow as time goes on.

* [loadedmetadata][2] ([example][3])
* [progress][6] ([example][5])

## Setup

#### Installing

```
bower install angular-media-events
```

#### Including

```js
<script src="/bower_components/angular-media-events/dist/media-events.js"></script>
// or
<script src="/bower_components/angular-media-events/dist/media-events.min.js"></script>
```

#### Using in Angular

```js
angular.module('test', ['media-events']);
```

##Events

#### loadedmetadata

* **available params** (in template):
  * anything in the scope
  * `$event` (jqlite/jQuery Event object)
  * `attrs`
    * `width`
    * `height`
  * **Note:** some videos do not return these attributes. I believe this is due to how it is encoded/what codec is used

```html
  <video
    ng-src="https://path/to/source"
    loaded-metadata="someFunction($event, attrs)" />
```

#### progress

* **available params** (in template):
  * anything in the scope
  * `$event` (jqlite/jQuery Event object)
  * `attrs`
    * `buffered`

```html
  <video
    ng-src="https://path/to/source"
    progress="someFunction($event, attrs)" />
```

## Conributing

Please feel free to contribute. Checkout [the guidelines][4]. I'm pretty responsive, if I say so myself, so hit me up.

[4]: https://github.com/vernak2539/angular-media-events/blob/master/CONTRIBUTING.md
[1]: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
[3]: #loadedmetadata
[5]: #progress
[2]: https://developer.mozilla.org/en-US/docs/Web/Events/loadedmetadata
[6]: https://developer.mozilla.org/en-US/docs/Web/Events/progress
