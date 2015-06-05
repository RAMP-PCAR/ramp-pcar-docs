---
layout: index-secmenu-en
title: "Basemap Support"
categories: [documentation]
---
{% include JB/setup %}

<a name="top" />

# Basemap Support {#wb-cont}

{% markdown JB/work_in_progress %}

<div class="toc"></div>

##Supported Formats

RAMP currently supports tile basemaps served from an [ESRI ArcGIS REST service](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#//02r3000000w2000000).

The first basemap loaded will dictate the projection and zoom levels of the RAMP viewer.  Basemaps in different tile projections, zoom levels, and tile sizes are supported, but the site will need to do a breif reload when changing to a different tile schema.  This is because the ESRI map object locks its schema when the map is initialized; the reload allows the map to re-initialize in the new tile schema. 

Future versions of RAMP may support other formats, such as tiles from Google Maps or OpenLayers.

See the [basemaps](json-config-en.html#basemaps) section of the configuration page to learn more about how to add basemaps to RAMP.

[Back To Top](#top)
{: .text-right}

##Basemap Sources

ESRI Public Tiles
: ESRI provides a number of [worldwide tile sets](http://services.arcgisonline.com/ArcGIS/rest/services) in [Web Mercator Auxilliary Sphere](http://spatialreference.org/ref/sr-org/esri102100/) projection.  Sets include topographic, satellite imagery, street map, shaded relief, physcial, ocean, and terrain.

Note that these tiles use a special projection, in which documentation is very sparse in the ESRI Javascript API.  Tiles must use the following spatial reference definition to avoid issues (in particular, printing issues with WMS layers).

{% highlight js %}
{
    wkid: 102100,
    latestWkid: 3857	
}
{% endhighlight %}

Natural Resources Canada Public Tiles
: NrCan provides [Canadian tile sets](http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps) in both [Web Mercator Auxilliary Sphere](http://spatialreference.org/ref/sr-org/esri102100/) and [Canada Atlas Lambert](http://spatialreference.org/ref/sr-org/7254/) projections.  Tiles are provided in both English and French versions.  Sets include topographic, road network, text labels, water bodies, and provinces.

[Back To Top](#top)
{: .text-right}
