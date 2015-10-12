function generator(){
  this.plugins = require('./plugins');
}

generator.prototype.directory = function(){
  var ctx = this;
  this.plugins.mkdirp('./frontend/gulpConfig/tasks', function (err) {
    if (err) console.error(err)
    else{
      ctx.tasksGulp();
      ctx.gulpfile();
    }
  });
}

generator.prototype.tasksGulp = function(){
  var _tasks = this.plugins.fs.readdirSync(this.plugins.path.join(__dirname,'/templates/tasks'));
  var input = this.plugins.path.join(__dirname,'/templates/tasks');
  var output = this.plugins.path.join('frontend','gulpConfig','tasks');
  this.files(_tasks,input,output);
}

generator.prototype.gulpfile = function(){
  var _tasks = this.plugins.fs.readdirSync(this.plugins.path.join(__dirname,'/templates/gulp'));
  var input = this.plugins.path.join(__dirname,'/templates/gulp');
  var output = this.plugins.path.join('frontend');
  this.files(_tasks,input,output);
}

generator.prototype.files = function(_tasks,input,output){
  for(var i=0;i<_tasks.length;i++){
    this.plugins.fs.createReadStream(this.plugins.path.join(input,_tasks[i])).pipe
      (this.plugins.fs.createWriteStream(this.plugins.path.join(output,_tasks[i])));
  }
}

//module.exports = generator;
var app = new generator();

app.directory();