[![npm version](https://badge.fury.io/js/firekyll-generator-gulp-webapp.svg)](https://badge.fury.io/js/firekyll-generator-gulp-webapp)

Scaffolding development assistance front-end of his blog, using [firekyll][1]

#### Install

```bash
sudo npm install firekyll-generator-gulp-webapp -g
```

```
|-- frontend
    |-- gulpConfig
	    |-- tasks
		    |-- browsersync.js
		    |-- express.js
		    |-- jekyll.js
		    |-- sass.js
		    |-- watch.js
	    |-- config.local.js
	    |-- path.js
	    |-- plugins.js
	|-- gulpfile.js
	|-- package.json
```

## gulpConfig

Will be all the necessary settings for working with gulp

#### path.js

Routes necessary for tasks.

#### config.local.js

configuration file for tasks.

#### plugins.js

All modules necessary for our blog.

## tasks

#### browsersync.js

Task needed to create a proxy server to listen to express.

#### express.js

Where is the server task configured to listen to port **4000**.
To configure the port, edit **config.local.js**.

#### jekyll.js

Jekyll task to run gem.

#### sass.js

Task copilar style sheets in sass.

#### watch.js

Task to hear all the changes implemented and refresh the browser.

[1]:https://www.npmjs.com/package/firekyll