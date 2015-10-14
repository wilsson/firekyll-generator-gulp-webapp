var Plugins = {
  sass        : require('gulp-sass'),
  browserSync : require('browser-sync').create(),
  cp          : require('child_process'),
  path        : require('path'),
  express     : require('express'),
  runSequence : require('run-sequence'),
  fs          : require('fs')
}; 

module.exports = Plugins