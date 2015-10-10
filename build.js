#!/usr/bin/env node

var fs = require('fs')
var sass = require('node-sass')
var Eyeglass = require('eyeglass').Eyeglass
var postcss = require('postcss')
var autoprefixer = require('autoprefixer')

var rootDir = __dirname
var sassOptions = {
  root: rootDir,
  file: './sass/boneless.scss',
  outputStyle: 'expanded'
}

var eyeglass = new Eyeglass(sassOptions, sass)
sass.render(eyeglass.sassOptions(), function (err, result) {
  if (err) throw err

  postcss([autoprefixer]).process(result.css.toString()).then(function (result) {
    result.warnings().forEach(function (warn) {
      console.warn(warn.toString())
    })
    fs.writeFile('./test/boneless.css', result.css.toString(), function (err) {
      if (err) throw err
    })
    console.log('Done')
  })
})
