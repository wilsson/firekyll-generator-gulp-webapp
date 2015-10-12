/**
 *
 * @module Task (gulp watch)
 * @extends Gulp
 * @extends Path
 * @extends Config
 * @extends Plugins
 * 
 */

function Task(gulp, path, plugins, config){
	
  gulp.task('watch',function(){
  	gulp.watch([path.base +'/js/*.js'],['js',plugins.browserSync.reload]);
    gulp.watch([path.base + '/_sass/*.scss'],['sass',plugins.browserSync.reload]);
    gulp.watch([
    	path.base+'/_includes/*.html',
    	path.base +'/index.html', 
    	path.base+'/_layouts/*.html', 
    	path.base+'/_posts/*',
    	path.base+'/_config.yml'], ['jekyll-build',plugins.browserSync.reload]);  
  });
}

module.exports = Task;