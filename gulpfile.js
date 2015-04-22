var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    sassdoc = require('sassdoc'),
    scsslint = require('gulp-scss-lint');

var config = {
    paths: {
        boneless: {
            src: './scss/boneless.scss',
            dest: './lib',
            watch: './scss/**/**/*.scss',
            docs: './scss/**/**/*.scss'
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
        },
        sassdoc: {
            options: {
                dest: 'docs',
                basePath: 'https://github.com/whatsnewsaes/Boneless/tree/master/scss',
                groups: {
                    utility: 'Utility',
                    config: 'Configuration',
                    grid: 'Grid'
                },
                display: {
                    access: 'public'
                }
            }
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
        .pipe(sourcemaps.write('.'))
        .pipe(plumber.stop())
        .pipe(gulp.dest(config.paths.boneless.dest));
});

gulp.task('watch', function() {
    gulp.watch(config.paths.boneless.watch, ['build']);
});

gulp.task('docs', function() {
    return gulp.src(config.paths.boneless.docs)
        .pipe(sassdoc(config.plugins.sassdoc.options));
});

gulp.task('watch-docs', function() {
    gulp.watch(config.paths.boneless.docs, ['build', 'docs']);
});


// Lint task
gulp.task('lint', function() {
    gulp.src('./scss/**/*.scss')
        .pipe(scsslint({
            'config': 'scsslint.yml',
        }))
        .pipe(scsslint.failReporter('E'));
});


// Lint task
gulp.task('lint', function() {
    gulp.src('./scss/**/*.scss')
        .pipe(scsslint({
            'config': 'scsslint.yml',
        }))
        .pipe(scsslint.failReporter('E'));
});
