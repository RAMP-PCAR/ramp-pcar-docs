---
layout: index-secmenu-5.3.0-en
title: Add New Module in RAMP
categories: [documentation]
---

<a name="top" />

#Add New Module in RAMP

{% markdown JB/work_in_progress %}

<div class="toc"></div>

RAMP modules is written in Asynchronous Module Definition (AMD) format. The AMD format is supported by Dojo module loader.

To create a module you use Dojo global function define; it allows you to register a module with the loader.

{% highlight js %}
  define(function(){
	...
  });
{% endhighlight js %}


For more information on modules, see [Introduction to AMD Modules](http://dojotoolkit.org/documentation/tutorials/1.9/modules/) tutorial on Dojo toolkit site.

##RAMP modules organization

RAMP organizes modules into three different location in the source tree. GUI and map related modules are stored under the *src/js/RAMP/Modules*. 
Toolbar related plug-in are stored in *src/js/RAMP/Tools* folder. Any utility module is stored in the *src/js/RAMP/Utils* folder.

These folders are mapped to packages for Dojo framework via dojoConfig object in RAMP-starter.js. When dojoConfig loads, it will associate the package name with
 the module identifiers(path) and load the RAMP JavaScript module when needed.


{% highlight js %}
...
dojoConfig = {
	...
	packages: [
		{
			name:"ramp",
			location: pathname + jsFolderPath + "RAMP/Modules"
		},
		...	
	],
	...
};
...
{% endhighlight js%}


To access a module, the *define* function can automatically load dependencies for your current module. The dependency list is passed as parameters to be used in your current module.

For example, to use the RAMP module defined in js/RAMP/Modules/ramp.js. We can now add the package name and module name ("ramp/ramp"). The dojo loader 
will know how to access the ramp module via ramp.js file, and pass the module as Ramp in your current module.

{% highlight js %}
define([
	...
	"ramp/ramp", "ramp/eventManager",
	...
	], function( ..., Ramp, EventManager, ...){
		...
		...
	}
);

{% endhighlight js%}


## RAMP Modules and Singleton Object

RAMP modules use singleton pattern extensively; lots of modules returning a singleton object to the global scope. The singleton object groups code into a 
single object to reduce the number of global variables.


Please take a look at [RAMP Naming Conventions](./namingconventions-en.html) for more information on how RAMP modules are organized, and why singleton are used in various module. 


## Resources

Tutorials:

[Introduction to AMD Modules](http://dojotoolkit.org/documentation/tutorials/1.9/modules/)

[Configuring Dojo with dojoConfig](http://dojotoolkit.org/documentation/tutorials/1.10/dojo_config/)

[Classy JavaScript with dojo/_base/declare](http://dojotoolkit.org/documentation/tutorials/1.10/declare/)

API reference:

[The Dojo Loader](http://dojotoolkit.org/reference-guide/1.8/loader/amd.html#loader-amd)