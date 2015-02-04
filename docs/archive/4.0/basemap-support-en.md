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

The first basemap loaded will dictate the projection and zoom levels of the RAMP viewer.  All subsequent basemaps must match the schema of the first basemap or else they will not show on the map.

Future versions of RAMP may support other formats, such as tiles from Google Maps or OpenLayers.

See the [basemaps](json-config-en.html#basemaps) section of the configuration page to learn more about how to add basemaps to RAMP.

[Back To Top](#top)
{: .text-right}

##Basemap Sources

ESRI Public Tiles
: ESRI provides a number of [worldwide tile sets](http://services.arcgisonline.com/ArcGIS/rest/services) in [Web Mercator Auxilliary Sphere](http://spatialreference.org/ref/sr-org/esri102100/) projection.  Sets include topographic, satellite imagery, street map, shaded relief, physcial, ocean, and terrain.

Natural Resources Canada Public Tiles
: NrCan provides [Canadian tile sets](http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps) in both [Web Mercator Auxilliary Sphere](http://spatialreference.org/ref/sr-org/esri102100/) and [Canada Atlas Lambert](http://spatialreference.org/ref/sr-org/7254/) projections.  Tiles are provided in both English and French versions.  Sets include topographic, road network, text labels, water bodies, and provinces.

[Back To Top](#top)
{: .text-right}
