/**
 *
 * @module Task (gulp browserSync)
 * @extends Gulp
 * @extends Path
 * @extends Config
 * @extends Plugins
 * 
 */

function Task(gulp, path, plugins, config){
  gulp.task('browserSync',function(){
    plugins.browserSync.init({
      proxy: "http://localhost:" + config.port + "/"
    });
  });
}

module.exports = Task;