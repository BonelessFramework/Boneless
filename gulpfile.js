var gulp = require('gulp'),
  sass = require('gulp-sass'),
  plumber = require('gulp-plumber'),
  gutil = require('gulp-util'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  sassdoc = require('sassdoc'),
  sasslint = require('gulp-sass-lint'),
  header = require('gulp-header'),
  pkg = require('./package.json');

var config = {
  paths: {
    boneless: {
      src: './boneless.scss',
      dest: './bin',
      examples: './examples/css',
      watch: './lib/**/**/*.scss'
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
        groups: {
          utility: 'Utility',
          config: 'Configuration',
          grid: 'Grid'
        },
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
        ''
      ].join('\n')
    }
  }
};

function handleError(err) {
  console.log(err.toString());
  gutil.beep(); // little beep so you know there's an error
  this.emit('end');
}

gulp.task('build', function() {
  return gulp.src(config.paths.boneless.src)
    .pipe(plumber({
      errorHandler: handleError
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: config.plugins.sass.outputStyle,
      precision: config.plugins.sass.precision,
      noCache: config.plugins.sass.noCache
    }))
    .pipe(autoprefixer({
      browsers: config.plugins.autoprefixer.browsers,
      cascade: config.plugins.autoprefixer.cascade
    }))
    .pipe(header(config.plugins.header.banner, {
      pkg: pkg
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(plumber.stop())
    .pipe(gulp.dest(config.paths.boneless.dest))
    .pipe(gulp.dest(config.paths.boneless.examples));
});

gulp.task('docs', function() {
  return gulp.src(config.paths.boneless.watch)
    .pipe(sassdoc(config.plugins.sassdoc.options));
});

gulp.task('watch', function() {
  gulp.watch(config.paths.boneless.watch, ['build', 'docs']);
});

// Lint task
gulp.task('lint', function() {
  gulp.src(config.paths.boneless.watch)
    .pipe(sasslint())
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError())
});
