/**
 *
 * @module Task (gulp jekyll-build)
 * @extends Gulp
 * @extends Path
 * @extends Config
 * @extends Plugins
 * 
 */
 
function Task(gulp, path, plugins, config){

  var jekyll = process.platform  === 'win32' ? 'jekyll.bat' : 'jekyll';
  gulp.task('jekyll-build',function(cb){
    return plugins.cp.spawn(jekyll, ['build'], {stdio: 'inherit',cwd: path.base})
      .on('close', cb);
  });
}

module.exports = Task;