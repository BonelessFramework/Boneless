var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    sassdoc = require('sassdoc');

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


gulp.task('build', function() {
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

gulp.task('watch', function() {
    gulp.watch(config.paths.boneless.watch, ['build']);
});

gulp.task('docs', function() {
    return gulp.src(config.paths.boneless.docs)
        .pipe(sassdoc(config.plugins.sassdoc.options));
});

gulp.task('watch-docs', function() {
    gulp.watch(config.paths.boneless.docs, ['build','docs']);
});
