var gulp = require('gulp')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer')
var sassdoc = require('sassdoc')
var sasslint = require('gulp-sass-lint')
var header = require('gulp-header')
var pkg = require('./package.json')

var watch = require('gulp-watch')
var browserSync = require('browser-sync').create()

var config = {
  paths: {
    boneless: {
      src: './boneless.scss',
      dest: './bin',
      examples: './examples/css',
      watch: ['./boneless.scss', './lib/**/**/*.scss']
    }
  },
  plugins: {
    sass: {
      outputStyle: 'nested',
      precision: 10,
      noCache: true
    },
    autoprefixer: {
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'],
      cascade: false
    },
    sassdoc: {
      options: {
        dest: 'docs',
        basePath: 'https://github.com/benhinchley/Boneless/tree/master/scss',
        display: {
          access: 'public'
        }
      }
    },
    header: {
      banner: ['/**',
        ' * <%= pkg.name %> - <%= pkg.description %>',
        ' * @version v<%= pkg.version %>',
        ' * @license <%= pkg.license %>',
        ' */',
        '\n'
      ].join('\n')
    }
  }
}

function buildTask (options) {
  return gulp.src(options.src)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: config.plugins.sass.outputStyle,
      precision: config.plugins.sass.precision,
      noCache: config.plugins.sass.noCache
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: config.plugins.autoprefixer.browsers,
      cascade: config.plugins.autoprefixer.cascade
    }))
    .pipe(header(config.plugins.header.banner, {
      pkg: pkg
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(options.dest))
    .pipe(browserSync.stream())
}

gulp.task('build', function () {
  buildTask({
    src: config.paths.boneless.src,
    dest: config.paths.boneless.dest
  })
})

gulp.task('docs', function () {
  return gulp.src(config.paths.boneless.watch)
    .pipe(sassdoc(config.plugins.sassdoc.options))
})

gulp.task('watch', function () {
  browserSync.init({
    server: {
      baseDir: './examples'
    },
    logPrefix: 'boneless'
  })

  watch(config.paths.boneless.watch, function () {
    buildTask({
      src: config.paths.boneless.src,
      dest: config.paths.boneless.examples
    })
  })
  gulp.watch('./examples/*.html').on('change', browserSync.reload)
})

// Lint task
gulp.task('lint', function () {
  gulp.src(config.paths.boneless.watch)
    .pipe(sasslint())
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError())
})
