#Contributing to Angular Media Events

I'm pretty cool with most things, just please follow these rules. Will add at travic step later to automate the PRs so I don't have to.

* spaces (preferably two)
* stay with the style
* tests are **required** for all new code. See below for more info

###Tests

Since [PhantomJS doesn't suport the video tag](https://github.com/ariya/phantomjs/issues/10839), the tests have to be run in browsers. Thus, we've introduced Karma to do this.

Ways to run tests:

1. Karma (`karma start`)
2. Gulp task (`gulp karma`)
3. In browser
  * I suggest using [serve module](https://www.npmjs.com/package/serve) to serve this repo, then navigate to `'tests/index.html'`

####Travis Builds

[Builds on Travis CI](https://travis-ci.org/vernak2539/angular-media-events) will be run through SauceLabs. Browser grid is below.

[![Sauce Test Status](https://saucelabs.com/browser-matrix/alvernacchia.svg)](https://saucelabs.com/u/alvernacchia)

Please note, this badge will show results for all tests run, not just master. If the build status is "passing" on the master branch, you can be sure that all these browser versions are passing.
