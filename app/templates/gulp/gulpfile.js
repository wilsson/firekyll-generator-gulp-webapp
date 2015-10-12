/**
 *
 * @module gulpfile.js 
 *
 */

var gulp    = require('gulp'),
    path    = require('./gulpConfig/path'),
    plugins = require('./gulpConfig/plugins'),
    config  = require('./gulpConfig/config.local'), 
    fs      = require('fs');

var tasks = fs.readdirSync('./gulpConfig/tasks');

tasks.forEach(function(task){
	task = require('./gulpConfig/tasks/' + task);
    task(gulp,path,plugins,config);
});

gulp.task('server',['jekyll-build','express','browserSync','watch']);
gulp.task('default',['sass']);