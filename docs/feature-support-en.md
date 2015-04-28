---
layout: index-secmenu-en
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

[Back To Top](#top)
{: .text-right}
