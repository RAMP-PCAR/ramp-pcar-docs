---
layout: index-secmenu-en
title: "Static Layer Support"
categories: [documentation]
---
{% include JB/setup %}

# Static Layer Support {#wb-cont}

## Supported static layer in RAMP

RAMP can display a layer as static (non interactive) layer.  It will display as an non-interactive layer on the map, and will appear in the layer selector.  Layer visibility and opacity can be adjusted.  Static layers can be re-ordered amongst themselves.  The static layer must support a projection that is compatible with the basemap being used.  

A legend can be displayed along with the static layer.  It will be displayed in the metadata panel.  If this feature is enabled, an image path can be specified.  This path can be the GetLegend request of the static layer.

Clicking the static layer will not return any information, no maptip or anchored maptip will be displayed.  MORE INFORMATION TO COME.


## Config a static layer

Static layer config is added in the featureLayers section just like regular feature layer with additional config values.
The following is an example of static layer config setting:

{% highlight JavaScript %}
	
{
	"id":"oilSandsRegions",
	"displayName":"Oil Sands Regions",
	"url":"http://somedomain.com/ArcGIS/rest/services/OilSandsRegions/MapServer/0",		
	"symbology":{
		"icons":{
			"default":{
				"imageUrl":"assets/images/icons/oil-128-128.png",
				"legendText":"Oil Sands Regions"
			}
		}
	},
	"isStatic":true,
	"layerType":"feature"
}
	
{% endhighlight %}


Please note the above mentioned config settings are the required attributes for a static layer, any extra information is not used.

* symbology This information is used to generate legend information with the imageUrl and legendText.
* isStatic The isStatic attribute is used by RAMP to identify the layer as static; which in turn unsubscribe to the event handlers for maptip display and datagrid generation.
* layerType The layerType is used to generate appropriate static layer. They can be feature, tile or dynamic.

Please refer to [JSON Config Definition](/docs/json-config-en.html) for more information on RAMP config settings.


