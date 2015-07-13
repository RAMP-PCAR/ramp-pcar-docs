---
layout: index-secmenu-5.4.1-en
title: RAMP Configuration Workflow
categories: [documentation]
---

<a name="top" />

# RAMP Configuration Workflow {#wb-cont}

This document explains the different ways configuration information is fed into and managed by RAMP.  For information on what goes in a configuration file, see the [configuration schema page](json-config-en.html)

<div class="toc"></div>

##Sources of Configuration

At a high level, RAMP can get the configuration object from a static JSON file, and can also inject JSON snippets from a service into the config object.

### Static Config File

The static config file is found in src folder, and named __config.json__.  This is an ideal spot to put configuration information that you expect not to change in your site, such as the available basemaps or the navigation widget CSS skin.  If your site will always be showing the same dataset, the entire site can be configured in the static config file.

The file is language independent.  Any values that are language dependent (such as a layer name, or field name that defines the name of a feature) should be referenced with an @@ key into the locale translation files.  See the [local page](locale-en.html) for details.

When the application is [built](build-tool-en.html), it will create language specific configuration files.  The RAMP app will determine the appropriate one to load.

[Back To Top](#top)
{: .text-right}

### Configuration Service

RAMP also supports getting configuration information from a web service.  A compatible web service will return a JSON response, the response being an array of configuration snippets relative to the root of the configuration object.  RAMP will take the snippits and inject them into the in-memory version of the static config file.  If any fields collide, the last item from the service will be the winning value.  For array collisions, items will be appended to the existing array.  Detailed specs for the service interface can be found [here](service-contract-en.html).  Of course, you can customize a copy of RAMP (by changing the codebase) to accept different types of services if needed.

As a very simple example, a service return value to change the navigation widget skin would be

{% highlight js %}
{
    "navWidget": {
		"skin": "blue"
	}    
}
{% endhighlight %}

## Default Values

To help avoid constructing large, repetative config files, RAMP will insert default values on certain configuration nodes if they are omitted.  For example, the visibility of a feature layer has a default value of true, as you will want to display your data most of the time.

Default values (and the functions that apply them) are defined in __globalStorage.js__

## Using the Configuration Object in RAMP

After all the configuration data has been loaded, combined, and defaulted, it is made available to the application via the global variable __RAMP.config__.  A global variable is utilzed to allow files outside of the DOJO AMD framework access to config information (for example, javascript embedded in a template file).

## JSON Editor

The static config file is just a text file containing a JSON object.  The file can be updated using any text editor or a [json editor](http://www.jsoneditoronline.org).

[Back To Top](#top)
{: .text-right}