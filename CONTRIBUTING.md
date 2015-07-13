#Contributing to Angular Media Events

I'm pretty cool with most things, just please follow these rules. Will add at travic step later to automate the PRs so I don't have to.

* spaces (preferably two)
* say with the style
* tests are **required** for all new code. See below for more info

###Tests

Since [PhantomJS doesn't suport the video tag](https://github.com/ariya/phantomjs/issues/10839), the tests have to be run in browsers. Thus, we've introduced Karma to do this.

Ways to run tests: 

1. Karma (`karma start`)
2. Gulp task (`gulp karma`)
3. In browser
  * I suggest using [serve module](https://www.npmjs.com/package/serve) to serve this repo, then navigate to `'tests/index.html'`

Due to an issue with karma-sauce-launcher, it will not be easy to implement a CI build step, but once that's fixed, the tests will be updated and a build step added; making my life easier.


