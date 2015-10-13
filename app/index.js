/**
 *
 * @module Generator
 * @author Wilson Flores
 *
 */

function Generator(){
  this.plugins = require('./plugins');
}

Generator.prototype.directory = function(path){
  var ctx = this;
  this.plugins.mkdirp(this.plugins.path.join(path,'/frontend/gulpConfig/tasks'), function (err) {
    if (err) console.error(err)
    else{
      ctx.tasksGulp(path);
      ctx.gulpfile(path);
      ctx.gulpConfig(path);
    }
  });
}

Generator.prototype.gulpConfig = function(path){
  var _tasks = this.plugins.fs.readdirSync(this.plugins.path.join(__dirname,'/templates/gulpConfig'));
  var input = this.plugins.path.join(__dirname,'/templates/gulpConfig');
  var output = this.plugins.path.join(path,'frontend','gulpConfig');
  this.files(_tasks,input,output);
}

Generator.prototype.tasksGulp = function(path){
  var _tasks = this.plugins.fs.readdirSync(this.plugins.path.join(__dirname,'/templates/tasks'));
  var input = this.plugins.path.join(__dirname,'/templates/tasks');
  var output = this.plugins.path.join(path,'frontend','gulpConfig','tasks');
  this.files(_tasks,input,output);
}

Generator.prototype.gulpfile = function(path){
  var _tasks = this.plugins.fs.readdirSync(this.plugins.path.join(__dirname,'/templates/gulp'));
  var input = this.plugins.path.join(__dirname,'/templates/gulp');
  var output = this.plugins.path.join(path,'frontend');
  this.files(_tasks,input,output);
}

Generator.prototype.files = function(_tasks,input,output){
  for(var i=0;i<_tasks.length;i++){
    this.plugins.fs.createReadStream(this.plugins.path.join(input,_tasks[i])).pipe
      (this.plugins.fs.createWriteStream(this.plugins.path.join(output,_tasks[i])));
  }
}

module.exports = Generator;