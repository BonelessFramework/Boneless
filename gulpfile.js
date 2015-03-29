var gulp = require('gulp'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer');

var config = {
  paths: {
    boneless: {
      src: './scss/boneless.scss',
      dest: './lib'
    }
  },
  plugins: {
    sass: {
      outputStyle: 'nested',
      precision: 10,
      noCache: true,
    },
    autoprefixer: {
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'],
      cascade: false
    }
  }
};


gulp.task('build', function () {
  return gulp.src(config.paths.boneless.src)
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
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.paths.boneless.dest));
});
