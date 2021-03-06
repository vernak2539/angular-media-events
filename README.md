# Angular Media Events [![Build Status](https://travis-ci.org/vernak2539/angular-media-events.svg?branch=master)](https://travis-ci.org/vernak2539/angular-media-events)

This library should introduce angular directives that respond to [events on media objects][1].

[![Sauce Test Status](https://saucelabs.com/browser-matrix/alvernacchia.svg)](https://saucelabs.com/u/alvernacchia)


*Please note, the SauceLabs badge will show results for all tests run, not just master. If the build status is "passing" on the master branch, you can be sure that all these browser versions are passing.*

## \*\*To Rollup from Webpack\*\*

v2 will use [rollup.js][13] to do packaging instead of webpack. This is due to the fact that webpack is better suited for application building,
and rollup is better suited for library/module building. Please let me know if it doesn't work in any way.


#### Supported Events

This list should grow as time goes on.

* [loadedmetadata][2] ([example][3])
* [progress][6] ([example][5])
* [play][9] ([example][10])
* [pause][7] ([example][8])
* [ended][11] ([example][12])

## Setup

### Installing

#### Bower
```
bower install angular-media-events --save
```

#### NPM
```
npm install angular-media-events --save
```

### Including

```js
<script src="/bower_components/angular-media-events/dist/media-events.js"></script>
// or
import angularMediaEvents from 'angular-media-events';
```

### Using in Angular

```js
// using script include
angular.module('myApp', ['media-events']);
angular.module('myApp', [window.angularMediaEvents]);

// or using import
angular.module('myApp', [angularMediaEvents]);
```

## Events

### loadedmetadata

* **available params** (in template):
  * anything in the scope
  * `$event` (jqlite/jQuery Event object)
  * `attrs`
    * `width`
    * `height`
  * **Note:** some videos do not return these attributes. I believe this is due to how it is encoded/what codec is used

```html
  <video ng-src="..." on-loaded-metadata="someFunction($event, attrs)" />
```

### progress

* **available params** (in template):
  * anything in the scope
  * `$event` (jqlite/jQuery Event object)
  * `attrs`
    * `buffered`

```html
  <video ng-src="..." on-progress="someFunction($event, attrs)" />
```

### play (on-play)

* **available params** (in template):
  * anything in the scope
  * `$event` (jqlite/jQuery Event object)

```html
  <video ng-src="..." on-play="someFunction($event)" />
```

### pause (on-pause)

* **available params** (in template):
  * anything in the scope
  * `$event` (jqlite/jQuery Event object)

```html
  <video ng-src="..." on-pause="someFunction($event)" />
```

### ended (on-ended)

* **available params** (in template):
  * anything in the scope
  * `$event` (jqlite/jQuery Event object)

```html
  <video ng-src="..." on-ended="someFunction($event)" />
```

## Contributing

Please feel free to contribute. Checkout [the guidelines][4]. I'm pretty responsive, if I say so myself, so hit me up.

[4]: https://github.com/vernak2539/angular-media-events/blob/master/CONTRIBUTING.md
[1]: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
[3]: #loadedmetadata
[5]: #progress
[2]: https://developer.mozilla.org/en-US/docs/Web/Events/loadedmetadata
[6]: https://developer.mozilla.org/en-US/docs/Web/Events/progress
[7]: https://developer.mozilla.org/en-US/docs/Web/Events/pause
[8]: #pause-on-pause
[9]: https://developer.mozilla.org/en-US/docs/Web/Events/play
[10]: #play-on-play
[11]: https://developer.mozilla.org/en-US/docs/Web/Events/ended
[12]: #ended-on-ended
[13]: https://rollupjs.org/
