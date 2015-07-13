---
layout: index-secmenu-5.4.1-en
title: RAMP Symbology Support
categories: [documentation]
---

<a name="top" />

# RAMP Symbology Support {#wb-cont}

<div class="toc"></div>

RAMP supports feature symbology for the three most common symbology renderers: Simple Renderer, Unique Value Renderer, and Class Breaks Renderer.  All symbology is defined in the [symbology node](json-config-en.html#featurelayers_symbology) of the feature layer config object.  Specifics for the node as described below.

It is also of note that the symbology node in the config also drives the legend generation, so we include label values in the structure as well.

## Simple Renderer

A Simple Renderer means that every feature in layer has the same symbol.  The configuration for a Simple Renderer only defines the images source, and a value to define it as simple.

{% highlight js %}
{
    "symbology": {
		"type": "simple",
		"imageUrl": "http://www.mysite.com/mypic.png",
		"label": "Buildings"
	}    
}
{% endhighlight %}

[Back To Top](#top)
{: .text-right}


## Unique Value Renderer

A Unique Value Renderer allows distinct values of a feature's attributes to define that feature's symbology.  ESRI allows up to three attributes to be used in combination, but only one is required.  The configuration for a Unique Value Renderer defines the attribute fields to render against, a mapping of field values to image urls, and a default image for features that don't match any mappings.

{% highlight js %}
{
    "symbology": {
		"type": "uniqueValue",
		"defaultImageUrl": "http://www.mysite.com/defpic.png",
		"field1": "BUILDING_TYPE",
		"field2": "SIZE_TYPE",
		"field3": null,
		"valueMaps": [
			{ "value": "HOUSE, SMALL",
			  "imageUrl": "http://www.mysite.com/green.png",
			  "label": "Small Houses"
			},
			{ "value": "HOUSE, BIG",
			  "imageUrl": "http://www.mysite.com/red.png",
			  "label": "Big Houses"
			},
			{ "value": "OFFICE, SMALL",
			  "imageUrl": "http://www.mysite.com/blue.png",
			  "label": "Small Offices"
			}
		]
	}    
}
{% endhighlight %}

[Back To Top](#top)
{: .text-right}



## Class Breaks Renderer


A Class Breaks Renderer allows a feature's attribute to define that feature's symbology based on a numerical range.  The configuration for a Class Breaks Renderer defines the attribute to render against, a mapping of value ranges to image urls, and a default image for features that don't match any mappings.  Note that order is important in the mapping array, as the max value of the previous item determines the min value of the next.

{% highlight js %}
{
    "symbology": {
		"type": "classBreaks",
		"defaultImageUrl": "http://www.mysite.com/defpic.png",
		"field": "BUILDING_SIZE",
		"minValue": 0,
		"rangeMaps": [
			{ "maxValue": 1500,
			  "imageUrl": "http://www.mysite.com/green.png",
			  "label": "Small Building"
			},
			{ "maxValue": 4000,
			  "imageUrl": "http://www.mysite.com/red.png",
			  "label": "Medium Building"
			},
			{ "maxValue": 10000,
			  "imageUrl": "http://www.mysite.com/blue.png",
			  "label": "Large Building"
			}
		]
	}    
}
{% endhighlight %}

[Back To Top](#top)
{: .text-right}


## Image URLs and Content Switches

ArcGIS Server will generate REST endpoints that return images for symbology (you can see this in the Legend JSON endpoint).  An example would look something like http://maps-cartes.ec.gc.ca/ArcGIS/rest/services/ECNY/MapServer/0/images/27BF26F8.  These can be convenient ways to reference good images for the symbology configuration, with one exception.  If your server setup involves multiple ArcGIS Servers behind a content switch, the generated image key (e.g. 27BF26F8) can differ across the server instances, leading to broken images.  In this scenario, we recommend using data URLs to define the image, or manually host the images in a location that will have stable URLs.


[Back To Top](#top)
{: .text-right}