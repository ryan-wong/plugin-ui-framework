var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

var jshint = require('gulp-jshint');
var browserify = require('browserify');
var vinylSource = require('vinyl-source-stream');
var ngAnnotate = require('browserify-ngannotate');
var templateCache = require('gulp-angular-templatecache-ionic');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');

var paths = {
  sass: ['./scss/**/*.scss'],
  jsSrc: ['./application/**/*.js'],
  entry: ['./application/entry.js'],
  vendor: ['./application/vendor.js'],
  vendorSrc: 'vendor.js',
  bundleSrc: 'bundle.js',
  bundleProdSrc: 'prodBundle.js',
  bundleDest: './js',
  templateSrc: ['./application/**/*.html']
};

gulp.task('default', ['sass', 'browserify', 'templates']);


gulp.task('sass', function(done) {
  gulp.src('./scss/main.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.templateSrc, ['templates']);
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.jsSrc, ['browserify']);
//   gulp.watch(paths.jsSrc, ['lint']);
});

gulp.task('templates', function () {
  gulp.src(paths.templateSrc)
    .pipe(templateCache())
    .pipe(gulp.dest(paths.bundleDest));
});

gulp.task('lint', function() {
  gulp.src(paths.jsSrc)
  .pipe(jshint())
  // You can look into pretty reporters as well, but that's another story
  .pipe(jshint.reporter('default'))
  .pipe(jshint.reporter('fail'));
})

gulp.task('browserify', function() {
  return browserify(paths.entry, {
    transform: [ngAnnotate],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
    })
    .bundle()
    .on('error', function(message){
        console.log(message)
    })
    .pipe(vinylSource(paths.bundleSrc))
    .pipe(gulp.dest(paths.bundleDest));
});

gulp.task('browserify:vendor', function() {
  return browserify(paths.vendor, {
    transform: [ngAnnotate],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
    })
    .bundle()
    .on('error', function(message){
        console.log(message)
    })
    .pipe(vinylSource(paths.vendorSrc))
    .pipe(gulp.dest(paths.bundleDest));
});

gulp.task('prod', function() {
  var bundleStream = browserify(paths.entry, {
    transform: [ngAnnotate],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
    })
    .bundle();

  bundleStream
    .pipe(vinylSource(paths.bundleProdSrc))
    .pipe(streamify(uglify({
        output: {
                comments: false
        },
        mangle: true
    })))
    .pipe(gulp.dest(paths.bundleDest));

var bundleStream = browserify(paths.templateFile, {
    transform: [ngAnnotate],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
    })
    .bundle();

  bundleStream
    .pipe(vinylSource(paths.templateFileProd))
    .pipe(streamify(uglify({
        output: {
                comments: false
        },
        mangle: true
    })))
    .pipe(gulp.dest(paths.bundleDest));
});