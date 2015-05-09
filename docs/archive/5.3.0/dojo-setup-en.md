---
layout: index-secmenu-5.3.0-en
title: Initialization
categories: [documentation]
---
{% include JB/setup %}

<a name="top" />

# Initialization {#wb-cont}

{% markdown JB/work_in_progress %}

<div class="toc"></div>

##Loading Dojo and ESRI

RAMP uses the [Dojo](http://dojotoolkit.org/) and [ESRI](https://developers.arcgis.com/javascript/) Javascript API, which are loaded from your main html map page using:

{% highlight html %}
	<script type="text/javascript" src="./javascript/src/RAMP/RAMP-starter.js"></script>
	<script src="http://js.arcgis.com/3.8/" type="text/javascript"></script>
{% endhighlight %}

The latter load ESRI and Dojo, the former is a [configuration file](http://dojotoolkit.org/reference-guide/1.9/dojo/_base/config.html) that Dojo needs in order to link up RAMP modules (Note: order matters, the configuration file must be loaded before Dojo). The configuration file contains an object called “dojoConfig” (it is a globalObject that needs to be named exactly like that, case-sensitive):

{% highlight js %}
	dojoConfig = {
		parseOnLoad: false,
		locale: "en",
		async: true,
		packages:[{
			"name" : "ramp",
			"location" : "javascript/src/RAMP/Modules"
		},
		{
			"name" : "utils",
			"location" : "javascript/src/RAMP/Utils"
		}]
	};
{% endhighlight %}

[Back To Top](#top)
{: .text-right}

##Dojo Config Parameters

The dojoConfig object contains many different parameters, the ones relevant for RAMP are outlined below, a description of the rest can be found [here](http://dojotoolkit.org/reference-guide/1.9/dojo/_base/config.html).

_parseOnLoad_: if true, Dojo will parse your HTML page for any Dojo markups and replace them with widgets. If false, you must manually tell Dojo to parse the page at a later time (Recommended: false, since we’re not using any Dojo markups in RAMP, and parsing creates some overhead during loading).

_locale_: the current locale, since the dojoConfig object is built in javascript, there can be logic to figure out the locale before creating this object. For example:

_async_: if true, Dojo will load all the modules asynchronously (Recommended: true)

_packages_: an array of objects, each object contains a “name” and “location” field, which is used to give alias to module locations. The location should be relative to your HTML map page. In the above example, “ramp” is an alias for “javascript/src/RAMP/Modules/”, thus if there is a module located at: “javascript/src/RAMP/Modules/map.js”, then using the alias, the module can simply be referenced with “ramp/map”.

[Back To Top](#top)
{: .text-right}

##Loading the bootstrapper

The bootstrapper module is responsible for loading the JSON configuration file used by RAMP and for loading all the modules in the proper order.

{% highlight html %}
	<script type="text/javascript" src="./javascript/src/RAMP/bootstrapper.js"></script>
{% endhighlight %}

[Back To Top](#top)
{: .text-right}

## Application Startup Overview

The following gives an overview of what code is executed when the application starts up.

### Retrieve the Configuration Object

The bootstrapper will retrieve a configuration object so that it knows how to initialize itself.  See the [configuration workflow](configuration-flow-en.html) page for details on this process.

### Low Level Initializations

Once the configuration object is ready, a number of things get initialized in the __configReady__ function of the bootstrapper.

* The proxy is set
* The advanced toolbar is removed if the config dictates it
* Any [plugin modules](wms-support-en.html#plugin) are loaded
* Additional defaulting of the configuration map extents is applied (it is too complex for the standard defaulting done above)
* Reprojection of map extents if required.  It is possible the map extents in the config object are in a different projection than the initial basemap

### Apply Bookmark Parameters

The URL is checked for any custom initialization instructions.  Function __updateConfig__ in module __bookmarkLink.js__ will inspect the URL used to load the page, and apply any presets to the config file or the application state.

### GUI Generation

UI elements that are not dependant on the map are generated next.  These include:

* Generation of website panels and panel controllers
* Event handlers for UI actions are set
* Change any state as dictated by the URL parameters

See function __load__ in module __gui.js__, and function __createUI__ in __bookmarkLink.js__ for more details. 

### Map Creation

The map object is created, along with any initial map layers we want to show.  The map is initialized using the initial extent, and we load the first basemap immediately.  The following layers objects are created, an asterisk indicates it is loaded asynchronously.

* interactive feature layers (*)
* static feature layers (*)
* WMS layers (*)
* bounding box layers
* highlighting layers

Bounding boxes are generated along with the layers to hold them, and if required the box geometry is reprojected to match the basemap.  

See function __init__ in module __map.js__

### Map Dependent GUI Generation

Now that the map exists, the remainder of UI tasks are executed.  This includes:

* Construction and initialization of the Navigation widget
* Event handlers for maptips and feature highlighting are wired up
* The basemap selector is initialized
* Construction and initialization of the Layer Selector
* Initialization of the Advanced Toolbar, if required
* Construction and initialization of the Datagrid
* Event handlers to update the Bookmark tool are wired up

See function __initializeMap__ in the bootstrapper

[Back To Top](#top)
{: .text-right}


