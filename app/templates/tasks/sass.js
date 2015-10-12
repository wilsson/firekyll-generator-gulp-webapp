/**
 *
 * @module Task (gulp sass)
 * @extends Gulp
 * @extends Path
 * @extends Config
 * @extends Plugins
 * 
 */

function Task(gulp, path, plugins, Config){
  
  gulp.task('sass',function(){
    return gulp.src(path.base + '/_sass/main.scss')
      .pipe(plugins.sass().on('error',plugins.sass.logError))
      .pipe(gulp.dest(path.base + '/_site/css'))
      .pipe(gulp.dest(path.base + '/css'));
  });  
};

module.exports = Task;