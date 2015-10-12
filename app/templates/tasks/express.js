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

  var express = require('express');
  var app = express();
  app.set('views', path.base);
  app.use(express.static(path.base + '/_site'));

  gulp.task('express',function(){
    app.get('/',function(req,res){
      res.sendFile(_path.resolve(path.base + '/_site/index.html'));
    });

    app.listen(config.port,function(){
      console.log('> ready - express <!');
    });
  });
}

module.exports = Task;