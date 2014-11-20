---
layout: index-secmenu-en
title: "WMS Support"
categories: [documentation]
---
{% include JB/setup %}

<a name="top" />

# WMS Support {#wb-cont}

<div class="toc"></div>

##Supported Features in RAMP

RAMP can display a layer from a WMS.  It will display as an image on the map, and will appear in the layer selector.  Layer visibility and opacity can be adjusted.  WMS layers can be re-ordered amongst themselves, but must always remain underneath any feature layers on the map.  The WMS must support a projection that is compatible with the basemap being used.  

A legend can be displayed along with the WMS.  It will be displayed in the metadata panel.  If this feature is enabled, an image path can be specified.  This path can be the GetLegend request of the WMS.

Clicking the WMS layer on the map is also supported.  Data returned from the getFeatureInfo function of the WMS is displayed in the subpanel.  To support feature info requests developers will have to provide their own parsers.

###GetFeatureInfo Support

WMS GetFeatureInfo requests are supported in RAMP and the following two sections describe the configuration and plugins required to enable support for this feature.

####Config File

Within each wmsLayers[] entry add a featureInfo section, this section is optional and its presence enables the click support for getFeatureInfo queries.
A featureInfo section should contain two keys: mimeType, a string containing the format that should be requested from the server; and parser, a string
linking to the parser plugin which will convert the response from the server into something appropriate for display.

Sample config:
{% highlight JavaScript %}
	"featureInfo": {
		"parser": "tempParse",
		"mimeType": "text/plain"
	},
{% endhighlight %}

####Plugin

In addition to the config update a plugin is required to parse the server response for the getFeatureInfo request.  This plugin is necessary due to the
open ended specification of the response.  Plugins are listed in a top level element in the configuration file, ex:
{% highlight JavaScript %}
    "plugins": [
        "tempParse.js"
    ],
{% endhighlight %}

Plugins are loaded from /js/plugins in the build folder.  The plugins are very free form and do not have any strict structure applied to them.  It is up
to the plugin author to ensure they are correctly structured.  In the case of a WMS parser they should be attached to the RAMP global object under
RAMP.plugins.featureInfoParser .  The plugin itself should define a function which takes the response data as input and return an HTML formatted string.

Example structure:
{% highlight JavaScript %}
RAMP.plugins.featureInfoParser.<plugin name> = function (data) {
    return <html formatted string>;
}
{% endhighlight %}

[Back To Top](#top)
{: .text-right}

##WMS Sources

Meteorological Service of Environment Canada
: The MSC provides a [WMS service](http://geo.weather.gc.ca/geomet/?lang=E&SERVICE=WMS&REQUEST=getCapabilities) with a number of meteorological layers.  It will support projections that align with the NRCan and ESRI basemaps.

[Back To Top](#top)
{: .text-right}
