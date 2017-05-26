'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');

var paths = {
  scripts: ['src/app/**/*.js', '!src/app/**/*.test.js']
};

gulp.task('lint', function() {
  return gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
});
