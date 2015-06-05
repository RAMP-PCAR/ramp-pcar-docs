---
layout: index-secmenu-5.3.2-en
title: "Feature Layer Support"
categories: [documentation]
---
{% include JB/setup %}

<a name="top" />

# Feature Layer Support {#wb-cont}

{% markdown JB/work_in_progress %}

<div class="toc"></div>

## Supported Features in RAMP

RAMP will support Feature Layers supplied by a REST endpoint from a [Map Service](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Map_Service/02r3000000w2000000/) on an ESRI ArcGIS Server v10.0 or greater.  

Feature Layers hosted in a [Feature Service](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Feature_Service/02r3000000z2000000/) will also work, but will have no support for dynamically extracted legends (this mainly impacts layers added by the user at runtime, or layers registered via the Ramp Configuration Service).  Feature Service Layers defined in the config file can easily have a legend encoded there by hand.

Only layers with Simple, Class Breaks, or Unique Value renderes are supported.  See the [Symbology Support](symbology-en.html) page for more details.

### OnDemand vs Snapshot Layers

As of version Groundhog, RAMP will support feature layers in either OnDemand or Snapshot mode.  A layer in Snapshot mode will download every geometry in the layer at startup time, and then will not hit the service again.  A layer in OnDemand mode will determine what data is appropriate to download every time the extent changes, and apply geometry simplification if it is advantageous.

Snapshot is great for small feature sets, and scales well for Point geometries. It will reduce the load on the map service and give snappier performance.

OnDemand is more appropriate with larger Line or Polygon geometries, or enormous Point geometries.  The simplification factor will allow Canada-wide views of complex geometries, and will still give precise detail as a user zooms in. Extent changes are a bit more sluggish as the layers need to update.

[Back To Top](#top)
{: .text-right}
