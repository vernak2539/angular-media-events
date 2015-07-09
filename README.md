# Angular Media Events

This library should introduce angular directives that respond to [events on media objects][1].

#### Supported Events

This list should grow as time goes on.

* [loadedmetadata][2] ([example][3])

## Setup

#### Installing

```
bower install angular-media-events
```

#### Including

```js
<script src="/bower_components/angular-media-events/dist/media-events.js"></script>
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
  * `$event` (DOM Event object)
  * `attrs`
    * `width`
    * `height`

```html
  <video
    ng-src="https://path/to/source"
    loaded-metadata="someFunction($event, attrs)" />
</body>
```



####Tests

Coming soon

[1]: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
[2]: https://developer.mozilla.org/en-US/docs/Web/Events/loadedmetadata
[3]: #loadedmetadata
