---
layout: index-secmenu-5.0-en
title: RAMP Configuration Migration Guide
categories: [documentation]
---

<a name="top" />

# RAMP Configuration Migration Guide {#wb-cont}

<div class="toc"></div>

## Canada Goose to Dragonfly

A number of schema changes were made to the config file in the Dragonfly release of RAMP.  Most of the changes were to facillitate a smaller config file, and to have data in more obvious locations.  

Also note that a number of fields are now optional.  If they are not present in the config file, a default value will be used.  The [config schema](json-config-en.html) will describe these fields.

### Changes to Feature Layers

#### Feature Layer Collection

The __featureLayers__ collection now resides under the __layers__ node, and is called __feature__.

![Config file differences - feature layer collection](../assets/images/cfg_featlayer.png)

#### Feature UUID

The __uuid__ field has been removed.  If a RAMP application uses a uuid, the uuid should be used as the layer's id field.

#### Visibility Settings

Fields __layerVisible__ and __boundingBoxVisible__ have been moved to the __settings__ node of the feature layer config object.  __layerVisible__ has been renamed to __visible__

![Config file differences - feature layer settings](../assets/images/cfg_featsettings.png)

#### Templates

All template values now reside under the __template__ node.  Consequently the __mapTipSettings__ node has been removed.  The properties that contain individual template names no longer have the word __Template__ in their name.

![Config file differences - feature layer templates](../assets/images/cfg_template.png)

#### Symbology

The symbology section has been restructured to support different types of renderers.  See [the symbology guide](symbology-en.html) for details on how to format it.


[Back To Top](#top)
{: .text-right}


### Changes to WMS Layers

#### WMS Layer Collection

The __wmsLayers__ collection now resides under the __layers__ node, and is called __wms__.

![Config file differences - wms layer collection](../assets/images/cfg_wmslayer.png)

#### Visibility Settings and UUID 

The changes to visibility settings and UUID that were applied to feature layers (see above) were also applied to WMS layers.

#### Removed WMS Nodes

Nodes __legend__, __extent__ and __layerInfo__ have been removed.


[Back To Top](#top)
{: .text-right}


### Removed Nodes

the __levelOfDetails.levels__ collection has been removed.


[Back To Top](#top)
{: .text-right}


## Dragonfly to Elk

More schema changes were made to the config file in the Elk release of RAMP.  This included support for new features, more defaulting, and removal of state-specifc nodes.  

As always, consult the [config schema](json-config-en.html) for more granular details.

### Changes to Top-Level Nodes

Nodes __lang__, __spatialReference__, __navWidget.locale__, __ui__ and __globalFilter__ have been removed.

Node __geometryService__ has been renamed to __geometryServiceUrl__

### Changes to Support Multiple Spatial References

There is no longer a notion of a map-level spatial reference.  Spatial reference is now determined by the active basemap.  To support all this switching, the following nodes now have __spatialReference__ values to indicate the [spatial reference](https://developers.arcgis.com/javascript/jsapi/spatialreference-amd.html#spatialreference1) of the geometry they refer to:

* objects in __basemaps__ collection
* any extents in the __extent__ object
* any __layerExtent__ definition in a layers.feature object

As well, the basemap objects have a new required node called __tileSchema__, which indicates which tiling schema this basemap belongs to.  See the [basemap support](basemap-support-en.html) page for more details.

### Changes to Basemap Selector

The basemap object property __showOnInit__ has been removed, and replaced by a root level property called __initialSelectedBasemap__.  This property contains the integer index of the basemap that should be active when the site loads.  

Basemap objects also now support showing multiple tile sets at once.  The __url__ property has been replaced with an array property called __layers__ that contains individual objects with their own __url__ properties

### Changes to levelOfDetails Node

The __levelOfDetails__ node has been renamed to __zoomLevels__.  

The __levels__ child node has been removed.  

Child nodes __maxLevel__ and __minLevel__ have been renamed to __max__ and __min__.

### Changes to siteTemplate Node

The __siteTemplate__ node has been renamed to __templates__.  

The __filterGlobalRowTemplate__ and __filterRowTemplate__ child nodes have been removed.  

Child node __basemapTemplate__ has been renamed to __basemap__.

### Changes to datagrid Node

The __datagrid__ node (at the root, not the node embedded in each feature layer object) has been removed.  Most of the values inside were not being used.  

Value __extendedDatagridExtentFilterEnabled__ has been moved to the configuration root.  

Value __globalGridRowsPerPage__ has also been moved to the root and has been renamed to __rowsPerPage__.

