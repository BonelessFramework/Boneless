![Boneless Jelly](https://raw.githubusercontent.com/whatsnewsaes/Boneless/master/images/Jelly.png)

[![Things to do](https://badge.waffle.io/whatsnewsaes/Boneless.svg?label=todo&title=To%20do)](http://waffle.io/whatsnewsaes/Boneless)
[![Things in progress](https://badge.waffle.io/whatsnewsaes/Boneless.svg?label=in%20progress&title=In%20Progress)](http://waffle.io/whatsnewsaes/Boneless)

Boneless is a community driven front-end framework, written in  [Sass](http://sass-lang.com/) that takes it's roots from [Dave Gamache's](https://twitter.com/dhg) [Skeleton Framework](https://github.com/dhg/Skeleton). In Boneless there is no set direction of what it has to be, or where it has to go. Boneless is whatever the collective community wants it to be.

**Potential direction for Boneless**
 * Improve the current state of Skeleton by addressing it's [current issues](https://github.com/dhg/Skeleton/issues)
 * Enhance the current capabilities of Skeleton
 * Expand it to a full UI framework
 * Make Boneless the fastest front-end framework
 * Make Boneless the largest community driven front-end framework.

## Installation Instructions
To use Boneless simply download the zip, clone the repo or install through bower by going `bower install -D boneless` to save it as a development dependency.

## Contribution guidelines
Any and all contributions are welcome. We will define guidelines as the community grows

#### To contribute there is a tiny, little bit of setup involved

* Download and install npm. The easiest way to do this is to just install node. Which can be done [here](https://nodejs.org/download/).
* Install [gulp.js](http://gulpjs.com) `npm install -g gulp`

* Fork and clone this library. `git clone git@github.com:whatsnewsaes/Boneless.git`

* Navigate into the project folder and install dependencies via npm. `cd boneless && npm install`

* Make your changes

* Run `gulp build`

* Make your pull request

### Helping out with the documentation
We are using [SassDoc](http://sassdoc.com/) to generate our documentation, which works much like JSDoc, KSS etc.

There are a few gulp tasks that make it easy to generate the docs, the main one being `gulp docs` which runs the sassdoc task and regenerates the documentation. There is also a watch task `gulp watch-docs` for the awesome people going through and helping out with a lot of the documentation.

An example of the documentation added for the clearfix placeholder.
```scss
/// placeholder for clearfix
/// @name clearfix
/// @author Benjamin Hinchley
/// @group utility
/// @access public
/// @example
///   .thing-you-want-to-add-the-clearfix-to {
///     @extend %clearfix;
///   }
```

For a full list of the annotations that can be used can be found here -> [SassDoc Annotations](http://sassdoc.com/annotations/)

After you have made changes to the documentation, create a PR and start the title of the PR with `documentation (add | fix | update | extend):` and then whatever part that you added/fixed/updated/extended. For example, if you were to update the documentation for the clearfix placeholder, the title of the PR would be `documentation update: clearfix`

## Contributor list
(Your name here)

## License
Use me, fork me, steal me, build me, share me [open-source MIT license](http://opensource.org/licenses/mit-license.php).

## Acknowledgements
Boneless was inspired by [Dave Gamache's](https://twitter.com/dhg) [Skeleton Framework](https://github.com/dhg/Skeleton). Jellyfish logo was created by [Seth Coelen](http://www.twitter.com/whatsnewsaes). [It still needs a name](https://github.com/whatsnewsaes/Boneless/issues/1).

Made without love from my basement.
