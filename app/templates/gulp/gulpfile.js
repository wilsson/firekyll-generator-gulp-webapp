/**
 *
 * @module gulpfile.js 
 *
 */

var gulp    = require('gulp'),
    path    = require('./gulpConfig/path'),
    plugins = require('./gulpConfig/plugins'),
    config  = require('./gulpConfig/config.local');

var tasks = plugins.fs.readdirSync('./gulpConfig/tasks');

tasks.forEach(function(task){
  var task = require('./gulpConfig/tasks/' + task);
    task(gulp,path,plugins,config);
});

gulp.task('server',function(){
  plugins.runSequence('jekyll-build','express','browserSync','watch');
});

gulp.task('default',['sass']);