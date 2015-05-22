---
layout: index-secmenu-5.3.1-en
title: Layer Loading
categories: [documentation]
---

<a name="top" />

# RAMP Layer Loading {#wb-cont}

<div class="toc"></div>

RAMP loads map layer asynchronously, so that a slow-loading layer or a failed layer does not freeze or crash the site.

## Initial Load

Once the site is ready, layers enter the loading process.  The process is the same for both layers in the initial configuration and layers added by the user.  

A layer first requires a configuration object.  This comes from the main config for initial layers, or is generated during the user layer add process.  From the configuration object, an ESRI map layer object is created.  The map module exposes functions makeFeatureLayer, makeWmsLayer, and makeStaticLayer to assist in the object creation.

The layer object is then fed into the layerLoader.loadLayer function.  This adds a row to the layer selector (in the loading state), assigns event handlers to the layer, and adds the layer to the map.

The loading process has two phases.  The __load__ phase happens when the layer object successfully shakes hands with its data source (usually the ArcGIS or WMS server).  The __update__ phase happens when the layer pulls down its data (features for feature layers, images for WMS layers).  If a layer is initially invisible, or is not at an active scale level, it's update phase will not happen until the data becomes visible.

The load phase will display a a progression bar, and the background will be greyed out.  Often this phase is so fast that you will not see this animation.  The update phase will display a spinning arrow on the layer's icon.

[Back To Top](#top)
{: .text-right}


## Failed Load

A layer can fail during the load or update phases.  When this happens, the layer selector displays the layer in an error state, and enables the reload and remove links.  While in the error state, the layer is not available on the map or in the data grids.

[Back To Top](#top)
{: .text-right}



## Re-Load

The process of reloading an failed layer is nearly identical to the initial load.  The only difference is that the add process specifies the index where the layer should be added.  New layers are always added to the top of the map stack, and thus don't have this requirement.  If the layer fails on the reload, it will return to the error state.

[Back To Top](#top)
{: .text-right}


## Remove

This will remove a failed layer from the layer selector.  It will be like it never existed.


[Back To Top](#top)
{: .text-right}