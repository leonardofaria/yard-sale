var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var notify = require("gulp-notify");
var bower = require('gulp-bower');
var uglify = require('gulp-uglifyjs');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');

var config = {
    sassPath: './resources/sass',
    bowerDir: './bower_components',
    jsPath: './public/js'
};

gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(config.bowerDir));
});

gulp.task('pure', function() {
    gulp.src([
                config.bowerDir + '/pure/pure-min.css',
                config.bowerDir + '/pure/grids-responsive-min.css',
                config.bowerDir + '/pure-extras/css/pure-extras.css'
            ])
        .pipe(concat('_base.scss'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./resources/sass/'));
});

gulp.task('css', function() {
    return sass('./resources/sass', {
            style:'compressed'
        })
        .on("error", notify.onError(function (error) {
            return "Error: " + error.message;
        }))
        .pipe(rename('yardsale.css'))
        .pipe(gulp.dest('./public'))
});

gulp.task("build-js", function() {
    return gulp.src([
              config.jsPath + '/app.js',
              config.jsPath + '/ProductsController.js',
              config.jsPath + '/angular-pageslide-directive.js'
            ])
        .pipe(uglify('yardsale.js', {
          mangle: false
        }))
        .pipe(gulp.dest('./public/'));
});


gulp.task('watch', function() {
    gulp.watch(config.sassPath + '/**/*.scss', ['pure', 'css']);
    gulp.watch(config.jsPath + "/*.js", ["build-js"]);
});

gulp.task('default', ['bower', 'css', 'build-js']);
