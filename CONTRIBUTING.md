# Contributing Guidelines

It is a bit hard to have a community driven front-end framework, without a community.
So here is how you can help out.

## Setup
There is a little bit of setup involved, but it isn't all that difficult to get started.

1. Make sure you have node installed, if you don't go here => [node.js download](https://nodejs.org/download/)
3. Fork and clone the repo `git clone git@github.com/<your_username>/Boneless.git`
4. Move into the cloned folder `cd boneless` and run `npm install`

**You are now setup and ready to go.**

just run `npm run watch` to start working.

### Working on a feature, bug fix, enhancement etc etc.
Before you start work on a new feature, make sure you check out the [issues](https://github.com/whatsnewsaes/Boneless/issues) and [pr](https://github.com/whatsnewsaes/Boneless/pulls) tabs, to make sure that someone else isn't working on it, or that it hasn't already been done, and is just waiting to be merged.

With that said, we are open to all ideas that you have, so please work on something and create a PR.

#### Some things to make it all a bit easier
There are a couple of `gulp tasks` that make development pretty easy, the main one being `gulp watch` to watch and compile the Sass files in realtime.

We also have a TravisCI build process setup that lints the Sass files, and also makes sure that it complies with both the *Ruby* compiler and the *node-sass* compiler. If when you make a PR and your build **fails**, pretty please go check the logs for that build and fix any of the issues that have come up.

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

After you have made changes to the documentation, create a PR and start the title of the PR with `documentation (add | fix | update | extend):` and then whatever part that you added/fixed/updated/extended.

For example, if you were to update the documentation for the clearfix placeholder, the title of the PR would be `documentation update: clearfix`
