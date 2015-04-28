---
layout: index-secmenu-en
title: "WMS Support"
categories: [documentation]
---
{% include JB/setup %}

<a name="top" />

# WMS Support {#wb-cont}

{% markdown JB/work_in_progress %}

<div class="toc"></div>

## Supported Features in RAMP

WMS layers can be added to RAMP provided they support either 1.1.0, 1.1.1 or 1.3 of the WMS standard.  It will display as an image on the map and will appear in the layer selector.  Layer visibility and opacity can be adjusted.  WMS layers can be re-ordered amongst themselves, but must always remain underneath any feature layers on the map.  The WMS must support a projection that is compatible with the basemap being used.

Legend support is available if configured in RAMP and provided that the WMS source implements the GetLegendGraphic request.  In the RAMP configuration an entry should be made in `legendMimeType`, if this entry is not present then no legend will be displayed.

Clicking the WMS layer on the map is also supported.  Data returned from the getFeatureInfo function of the WMS is displayed in the subpanel.  To support feature info requests developers will have to provide their own parsers.

### Proxy Considerations

If the WMS does not allow [CORS](http://www.w3.org/TR/cors/#access-control-allow-origin-response-header) requests then a proxy is required.  The proxy should be located on the same server as RAMP so it does not violate the same origin policy.  ESRI distributes [proxy scripts](https://github.com/Esri/resource-proxy) for .Net, Java and PHP which can be used for this purpose (these are distributed under an Apache 2.0 license).  If a proxy is configured it should be set in the config file or by the config service (see [proxyUrl](json-config-en.html#proxyUrl)).

### GetFeatureInfo Support

WMS GetFeatureInfo requests are supported in RAMP and the following two sections describe the configuration and plugins required to enable support for this feature.

#### Config File

Within each wms[] entry add a featureInfo section, this section is optional and its presence enables the click support for getFeatureInfo queries.
A featureInfo section should contain two keys: mimeType, a string containing the format that should be requested from the server; and parser, a string
linking to the parser plugin which will convert the response from the server into something appropriate for display.

Sample config:
{% highlight JavaScript %}
	"featureInfo": {
		"parser": "tempParse",
		"mimeType": "text/plain"
	},
{% endhighlight %}

#### Plugin

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

## WMS Sources

Meteorological Service of Environment Canada
: The MSC provides a [WMS service](http://geo.weather.gc.ca/geomet/?lang=E&SERVICE=WMS&REQUEST=getCapabilities) with a number of meteorological layers.  It will support projections that align with the NRCan and ESRI basemaps.

[Back To Top](#top)
{: .text-right}
