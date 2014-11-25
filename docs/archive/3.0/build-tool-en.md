---
layout: index-secmenu-3.0-en
title: Build Tool
categories:
  - documentation
published: true
---

{% include JB/setup %}

<a name="top" />

# Build Tool Setup {#wb-cont}



<div class="toc"></div>

## Dependencies
If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.

To install Grunt on Windows, you first need to install [Node.js](http://nodejs.org/) and [Git](http://msysgit.github.io/) binary, and then you can use the command prompt or PowerShell to run Grunt tasks. You also need to have Java installed.

* Node.js [installer](http://nodejs.org/#download)
* msysGit [installer](http://code.google.com/p/msysgit/downloads/list?q=full+installer+official+git)
* msysGit [mirror](https://github.com/msysgit/msysgit/releases)
* Java SDK [installer](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

After installing the dependencies, run the following in your command shell as Administrator

{% highlight sh %}
$ npm install -g grunt-cli
$ npm install -g bower
{% endhighlight %}

This will add the grunt and bower commands to your system path, allowing it to be run from any directory. You might want to restart your machine, just in case.

### Getting Started
To run the build tool do the following:

1. Open Command Prompt or PowerShell
2. Change to the project’s root directory
3. Use __npm install__ to install project dependencies (need to run only once or when adding new modules)
4. Use the following to run the default build task:

{% highlight sh %}
$ grunt
{% endhighlight %}

if you get an error that something is not found, try running __npm install__ again.

### Default Task
Unless you specify a task to run, __grunt__ command creates an unminified development, minified and tarballed distribution packages. They are located in __build__, __dist__, and __tarball__ folders respectivelly.

### Other Tasks

#### api
Generate API documentation using YUIDoc and annotated source code documents using Docco and save them in "__docs/docco__" and "__docs/yuidoc__" folder. Use the following to run this task:

{% highlight sh %}
$ grunt api
{% endhighlight %}

#### build
Creates an unminified development package. Use the following to run this task:

{% highlight sh %}
$ grunt build
{% endhighlight %}

#### clean
Removes all temporary and build folders:

* ./build/
* ./dist/
* ./tarball

Use the following to run this task:

{% highlight sh %}
$ grunt cleanAll
{% endhighlight %}

#### deploy
Creates a minified distribution package and copies it into to a specified location. This task _will_ fail if there are any JS errors present. Use the following to run this task:

{% highlight sh %}
$ grunt deploy
{% endhighlight %}

Note: The target folder is cleaned prior to copying files.

#### dist
Identical to the default task. Use the following to run this task:

{% highlight sh %}
$ grunt dist
{% endhighlight %}

#### serve:build
Creates an unminified development package, starts a node server on port 3002, watches for modified JS, CSS and other files, and reloads HTML page on change.

Use the following to run this task:

{% highlight sh %}
$ grunt serve:build
{% endhighlight %}

Access RAMP pages:
http://localhost:3002/ramp-en.html
http://localhost:3002/ramp-fr.html

#### serve:dist
Creates a minified distribution package and starts a node server on port 3002.

Use the following to run this task:

{% highlight sh %}
$ grunt serve:dist
{% endhighlight %}

Access RAMP pages:
http://localhost:3002/ramp-en.html
http://localhost:3002/ramp-fr.html

Note: This task does not monitor files and will not rebuild the package or reload the pages.

### Config File - package.json

package.json contains the metadata about the build tool project, grunt dependencies to be installed and some of the variables used by the build tool such as various paths, folders, and file names. package.json is a pure JSON file (no comments, no unquoted strings, no multiline values allowed). All the variables related to the build tool stored in __ramp__ object.

#### ramp.concat.jsLib
A list of JS libraries’ files to be concatenated together for use in RAMP.

#### ramp.concat.cssLib
A list of CSS libraries’ files to be concatenated together for use in RAMP.

#### ramp.deployToFolder
A path to the deploy folder.

#### ramp.docco.path
A path to the JavaScript folder to be parsed.

#### ramp.docco.outdir
A path where to put generated documents.

#### yuidocconfig
The Config object for YUIDoc is located in yuidoc.json file. You can read about its structure here: <http://yui.github.io/yuidoc/args/index.html>

### Grunt Modules
The build tool uses a number of Grunt-specific and general [NPM](https://www.npmjs.org/) modules. They are:

* [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
* [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat)
* [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
* [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)
* [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
* [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy)
* [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)
* [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less)
* [grunt-replace](https://github.com/outaTiME/grunt-replace)
* [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer)
* [csvtojson](https://github.com/Keyang/node-csvtojson)
* [request](https://github.com/mikeal/request)
* [grunt-docco](https://github.com/DavidSouther/grunt-docco)
* [grunt-contrib-yuidoc](https://github.com/gruntjs/grunt-contrib-yuidoc)
* [grunt-notify](https://github.com/dylang/grunt-notify)
* [jshint-stylish-plain](https://github.com/AleksueiR/jshint-stylish-plain)
* [grunt-complexity](https://github.com/vigetlabs/grunt-complexity)
* [grunt-bump](https://www.npmjs.org/package/grunt-bump)
* [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin)
* [grunt-jscs-checker](https://github.com/gustavohenke/grunt-jscs-checker)
* [grunt-html-build](https://github.com/spatools/grunt-html-build)
* [grunt-chmod](https://github.com/JamesMGreene/grunt-chmod)
* [grunt-contrib-compress](https://github.com/gruntjs/grunt-contrib-compress)
* [grunt-json-minify](https://www.npmjs.org/package/grunt-json-minify)

### Other

#### Making your Grunt Snarl
To see sweet notification balloons when your Grunt wants to tell you that your task has failed (or when JS has been JShinted successfully, or when LESS has been converted to proper CSS), install [Snarl](http://snarl.fullphat.net/) from here: <http://sourceforge.net/projects/snarlwin/files/latest/download?source=files>

You don’t need to do anything else.

#### Adding JavaScript Library
To add a JavaScript library, do the following:

1.	create a folder in __RAMP/src/js/lib/{library name}.{ library  version}__, and copy the library files into this folder;
2.	add the main uglified library file name(s) to the _jsLibToConcat_ property in __package.json__ file making sure the path is relative to the _jsFolder_ property; if the library doesn’t have an uglified version, do __step 3__ even if you didn’t modify the library’s source;
3.	if you made changes to the library’s source file(s), add their names to the _jsLibToUglify_ property of  the __package.json__ file; the build tool will create an uglified version with __*.min.js__ extension;
4.	include the reference to the library’s source file(s) if you modified them and to main uglified file(s) if you didn’t in __ramp-src.html__ between the <!-- JS LIB --> comment tags:
5.	run the tool;

#### Adding CSS Library
To add a CSS library, do the following:

1.	create a folder in __RAMP/src/css/lib/{library name}.{ library  version}__, and copy the library files into this folder;
2.	add the main minified library file name(s) to the _cssLibToConcat_ property in __package.json__ file making sure the path is relative to the _cssFolder_ property; if the library doesn’t have an minified version, do __step 3__ even if you didn’t modify the library’s source;
3.	if you made changes to the library’s source file(s), add their names to the _cssLibToMinify_ property of  the __package.json__ file; the build tool will create an minified version with __*.min.css__ extension;
4.	include the reference to the library’s source file(s) if you modified them and to main minified file(s) if you didn’t in __ramp-src.html__ between the <!-- CSS LIB --> comment tags:
5.	run the tool;

### Troubleshooting

#### Task Not Found
If you get a "Task not found" error like this one:

~~~
Warning: Task "***" not found.  Use --force to continue.
Aborted due to warnings.
~~~

Run the _npm install_ command again (you may want to delete the __node_modules__ folder from the root, if it didn’t work after the first try, just in case):