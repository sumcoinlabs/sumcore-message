'use strict';

var gulp = require('gulp');
var sumcoreTasks = require('sumcore-build');

sumcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
