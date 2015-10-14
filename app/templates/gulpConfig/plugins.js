var Plugins = {
    sass        : require('gulp-sass'),
    browserSync : require('browser-sync').create(),
    cp          : require('child_process'),
    path        : require('path'),
    express     : require('express'),
    fs          : require('fs')
}; 

module.exports = Plugins