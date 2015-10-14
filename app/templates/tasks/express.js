/**
 *
 * @module Task (gulp express)
 * @extends Gulp
 * @extends Path
 * @extends Config
 * @extends Plugins
 * 
 */

function Task(gulp, path, plugins, config){
  gulp.task('express',function(){
    var app   = plugins.express();
    var index = plugins.path.join(path.base,'_site','index.html');
    var ruta  = plugins.path.resolve(index);

    app.set('views', path.base+'/_site');
    app.use(plugins.express.static(path.base+'/_site'));
    
    app.get('/',function(req,res){
      res.sendFile(ruta);
    });

    app.listen(config.port,function(){
      console.log('> ready - express <!');
    });
  });
}

module.exports = Task;