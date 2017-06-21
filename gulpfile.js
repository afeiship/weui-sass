(function () {

  'use strict';

  const path = require('path');
  const gulp = require('gulp');
  const argv = require('yargs').argv;
  const fs = require('fs');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  //import
  fs.readdirSync('./build').map(function (file) {
    require('./build/' + file);
  });


  gulp.task('default', ['build']);

}());
