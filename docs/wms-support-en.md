---
layout: index-secmenu-en
title: "WMS Support"
categories: [documentation]
---
{% include JB/setup %}

# WMS Support {#wb-cont}

## Supported Features in RAMP

RAMP can display a layer from a WMS.  It will display as an image on the map, and will appear in the layer selector.  Layer visibility and opacity can be adjusted.  WMS layers can be re-ordered amongst themselves, but must always remain underneath any feature layers on the map.  The WMS must support a projection that is compatible with the basemap being used.  

A legend can be displayed along with the WMS.  It will be displayed in the metadata panel.  RAMP has three options for the legend.

* Do not display a legend
* Display a legend from an image URL defined in the configuration file
* Display the legend by querying the WMS service for its legend image

Clicking the WMS layer on the map is also supported.  Data returned from the getFeatureInfo function of the WMS is displayed in the popup.  MORE INFORMATION TO COME.


## WMS Sources

Meteorological Service of Environment Canada
: The MSC provides a [WMS service](http://geo.weather.gc.ca/geomet/?lang=E&SERVICE=WMS&REQUEST=getCapabilities) with a number of meteorological layers.  It will support projections that align with the NRCan and ESRI basemaps.
