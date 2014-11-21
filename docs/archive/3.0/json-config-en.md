---
layout: index-secmenu-en
title: JSON Config Definition
categories: [documentation]
---

<a name="top" />

# JSON Config Definition {#wb-cont}



This page will walk you through the layout of the application configuration object and all of its properties.

<div class="toc"></div>

##Object Outline

* stringResources
* gridstrings
    * oPaginate
    * oAria
* lang
* helpContent
* geometryService
* proxyUrl
* spatialReference
* extents
    * defaultExtent
    * fullExtent
    * maximumExtent
* navWidget
    * sliderMinVal
    * sliderMaxVal
    * debug
    * animate
    * locale
    * cssPath
    * skin
* advancedToolbar
    * enabled
    * tools
        * toolname (1 per tool)
            * name
            * selector
            * enabled
* levelOfDetails
    * minLevel
    * maxLevel
    * levels (collection)
        * level
        * resolution
        * scale
* basemaps (collection)
    * id
    * url
    * thumbnail
    * showOnInit
    * scaleCssClass
    * type
    * name
    * altText
    * description
* featureLayers (collection)
    * id
    * displayName
    * url
    * datagrid
        * rowsPerPage
        * gridColumns (collection)
            * id
            * fieldName
            * width
            * isSortable
            * sortType
            * alignment
            * title
            * columnTemplate
        * summaryRowTemplate
    * layerAttributes
    * filter
    * mapTipSettings
        * hoverTemplate
        * anchorTemplate
    * symbology
        * renderer
            * type
            * key1
            * key2
            * Key3
        * icons
            * default
                * imageUrl
                * legendText
    * uuid
    * detailTemplate
    * nameField
    * settings
        * enabled
        * opacity
            * enabled
            * default
    * isStatic (static layer only)
    * layerType (static layer only)
* wmsLayers (collection)
    * id
    * displayName
    * url
    * uuid
    * extent
    * format
    * settings
        * enabled
        * opacity
    * layerInfo
        * name
        * title
        * allExtents (collection)
        * spatialReferences (collection)
        * subLayers (collection)
    * legend
        * enable
        * legendURL
    * symbology
        * renderer
            * type
            * key1
            * key2
            * Key3
        * icons
            * default
                * imageUrl
                * legendText
	* featureInfo (optional)
		* mimeType
		* parser
* datagrid
    * globalGridRowsPerPage
    * defaultState
    * summaryEnabled
    * extendedEnabled
    * extendedColumns (collection)
        * column1
* siteTemplate
    * basemapTemplate
    * filterGlobalRowTemplate
    * filterRowTemplate
* globalFilter
    * txtAllData
    * toggleLabels (collection)
        * id
        * dataAttribute
        * value
        * checked
        * title
        * classAddition
* divNames
    * map
    * navigation
    * filter
    * datagrid
* plugins (collection of strings)

[Back To Top](#top)
{: .text-right}

##Object Property Dictionary

| JSON Object Field	| Data Type	| Description
|----+----|----+----|----+----
| <a name="stringresources" />stringResources	| key value dictionary	| holds all application strings and language specific values for a SINGLE LANGUAGE.  Switching languages will trigger the load of a new config object with separate dictionary
| <a name="gridstrings" />gridstrings	| Key value dictionary	| holds all datagrid strings and language specific value for a SINGLE LANGUAGE. Switching languages will trigger the load of a new config object with separate dictionary
| <a name="lang_field" /> lang	| string	| language of current object; en or fr
| helpContent	| string	| blob content the of help section for current language
| geometryService	| string	| URL to geometry service
| proxyUrl	| string	| Path to proxy service (relative path)
| <a name="spatialreference" />spatialReference	| numeric	| the WKID of the spatial reference for the map.  WILL BREAK IF YOU STORE IT AS A STRING!
| <a name="extents" />extents.defaultExtent	| envelope	| extent the app should initialize to
| extents.fullExtent	| envelope	| extent the app should go to when full extent button is pushed
| extents.maximumExtent	| envelope	| extent the app not allow user to pan past
| <a name="navwidget" />navWidget	| 	|
| navWidget.sliderMinVal	| numeric	| Navigation widget slider minimum value
| navWidget.sliderMaxVal	| numeric	| Navigation widget slider maximum value
| navWidget.debug	| numeric	| Debug flag, generate console log when set
| navWidget.animate	| string	|
| navWidget.locale	| string	| Navigation widget locale
| navWidget.cssPath	| string	| Path to CSS
| navWidget.skin	| string	| Skin style
| <a name="advancedToolbar" />advancedToolbar	| 	|
| advancedToolbar.enabled	| boolean	| determines if the advanced toolbar is available in the app
| advancedToolbar.tools	| object	| holds a child object for each available tool
| advancedToolbar.tools.toolname	| object	| object defining an individual tool.  object name will be specific to the tool (i.e. it is not called "toolname")
| advancedToolbar.tools.toolname.name	| string	| name of the tool.  should match the name property of the tool's javascript module
| advancedToolbar.tools.toolname.selector	| string	| name of the selector tag to use in the html layout.  should be unique amongst tools
| advancedToolbar.tools.toolname.enabled	| boolean	| determines if the tool should be made available in the toolbar
| levelOfDetails	| 	|
| <a name="levelofdetails_minlevel" />levelOfDetails.minLevel	| numeric	| Minimum level of detail
| <a name="levelofdetails_maxlevel" />levelOfDetails.maxLevel	| numeric	| Maximum level of detail
| levelOfDetails.levels[]	| 	|
| levelOfDetails.levels[].level	| numeric	| ID for each level
| levelOfDetails.levels[].resolution	| numeric	| Resolution in map units of each pixel in a tile for each level
| levelOfDetails.levels[].scale	| numeric	| Scale for each level
| <a name="basemaps" /> basemaps	| collection of map items	| order of collection will determine order they are added to the map.  can be empty.  if more than one entry, basemap selector widget could/(should?) initialize.
| basemaps[].id	| string	| to identify layer.  unique across all map items.  no spaces!  use this to derive language based strings from stringResources (e.g. text to go in basemap selector would have a key like "basemapName<id>")
| <a name="basemaps_url" /> basemaps[].url	| string	| REST url of the basemap
| <a name="basemaps_thumbnail" />basemaps[].thumbnail	| string	| path to image file for use in basemap selector (optional)
| <a name="basemaps_showoninit" />basemaps[].showOnInit	| boolean	| indicates if map should be active on load.  Only one TRUE per collection
| basemaps[].scaleCssClass	| string	| Map scale style
| <a name="basemaps_type" />basemaps[].type	| string	| Base map type
| <a name="basemaps_name" />basemaps[].name	| string	| Basemap name
| basemaps[].altText	| string	| Alt text for the basemap thumbnail image
| <a name="basemaps_description" />basemaps[].description	| string	| Description of the basemap
| featureLayers	| collection of map items	| order of collection will determine order they are added to the map.  can be empty. if more than one entry, layer selector widget could/(should?) initialize.
| <a name="featurelayers_id" />featureLayers[].id	| string	| to identify layer.  unique across all map items.  no spaces!
| <a name="featurelayers_displayname" />featureLayers[].displayName	| 	| Display name of the feature layer
| <a name="featurelayers_url" /> featureLayers[].url	| string	| REST URL of the layer
| <a name="featurelayers_datagrid" />featureLayers[].datagrid	| 	|
| featureLayers[].datagrid.rowsPerPage	| numeric	| number of rows to show in the grid (i.e. one page of results)
| featureLayers[].datagrid.gridColumns [].id	| string	| to identify column.  unique across all columns for all layers in the app.  no spaces!
| featureLayers[].datagrid.gridColumns [].fieldName	| string	| attribute field that populates this column.  really just used as a reference now.
| featureLayers[].datagrid.gridColumns [].width	| numeric	| width of the field (pixels?  em's?)
| featureLayers[].datagrid.gridColumns [].isSortable	| boolean	| tells if we can sort on this column
| featureLayers[].datagrid.gridColumns [].sortType	| string	| not sure what goes here.  text/number/date sort?
| featureLayers[].datagrid.gridColumns [].alignment	| string	| alignment type.  use values from current services
| featureLayers[].datagrid.gridColumns [].title	| Int	| Title of the grid column.  This will show in the grid header
| <a name="featurelayers_datagrid_gridcolumns_columntemplate" />featureLayers[].datagrid.gridColumns [].columnTemplate	| 	| Template name to be used to generate the content of the given column
| <a name="featurelayers_datagrid_summaryrowtemplate" />featureLayers[].datagrid.summaryRowTemplate	| 	| Summary row template name to be used to generate content
| <a name="featurelayers_layerattributes" />featureLayers[].layerAttributes	| string	| An array of strings which correspond to fields to include in the FeatureLayer. If not specified, the feature layer will return the OBJECTID field and if applicable the start time field, end time field and type id field. You can specify ["*"] to fetch the values for all fields in the layer, this is useful when editing features. Associated with outfield options in ESRI FeatureLayer.
| featureLayers[].filter	| 	|
| <a name="featurelayers_maptipsettings" /> featureLayers[].mapTipSettings	| 	|
| <a name="featurelayers_maptipsettings_hovertemplate" /> featureLayers[].mapTipSettings.hoverTemplating	| string	| has template of what to show in hover tip.  if blank, hover tips are not initialized.  template processor should be able to generate text, as well as derive image names from feature attributes
| <a name="featurelayers_maptipsettings_anchortemplate" />featureLayers[].mapTipSettings.anchorTemplate	| string	| Template name used to generate anchored map tip
| <a name="featurelayers_symbology" />featureLayers[].symbology	| 	|
| featureLayers[].symbology.renderer	| 	|
| featureLayers[].symbology.renderer.type	| string	| The type of renderer being used on the layer.  Current supported values are "simple" and "unique"
| featureLayers[].symbology.renderer.key1	| string	| First attribute used in unique value renderer
| featureLayers[].symbology.renderer.key2	| string	| Second attribute used in unique value renderer
| featureLayers[].symbology.renderer.key3	| string	| Third attribute used in unique value renderer
| featureLayers[].symbology.icons[]	| 	|
| featureLayers[].symbology.icons[].default.imageUrl	| string	| Url to symbology image
| featureLayers[].symbology.icons[].default.legendText	| string	| Legend text for the given symbology
| featureLayers[].uuid	| string	| Feature layer UUID
| <a name="featurelayers_detailtemplate" /> featureLayers[].detailTemplate	| string	| Template used to generate detail content of a selected feature
| featureLayers[].nameField	| string	| Field to be used to describe a feature.  Utilized in summary grid, detail content, map tip, and anchored maptip
| <a name="featurelayers_settings" />featureLayers[].settings	| object	| Object to store layer settings and their presets.
| featureLayers[].settings.enabled	| boolean	| Indicates whether the settings panel should be accessible to the user.
| featureLayers[].settings.opacity	| object	| Object to store opacity information.
| featureLayers[].settings.opacity.enabled	| boolean	| Indicates whether opacity of the layer can be changed by the user. If settings are disabled, the opacity preset value will still be applied to the opacity level.
| featureLayers[].settings.opacity.default	| numeric	| Specifies the preset opacity level to be applied to the layer on load.
| featureLayers[].isStatic	| boolean	| Specifies the current layer as static layer.
| featureLayers[].layerType	| string	| Specifies the map service layer type (feature, tile, or dynamic.) 
| featureLayers[].layerVisible | boolean  | The initial visibility of the layer
| featureLayers[].boundingBoxVisible | boolean | The initial visibility of the bounding box for this layer (optional for static layers)
| <a name="wmsLayers" /> wmsLayers	| collection	| WMS layers to be added to the map.  Order dictates initial order on the map.
| wmsLayers[].id	| string	| to identify a layer.  unique across all WMS layers
| wmsLayers[].url	| string	| the url of the WMS service.  does not specify name of individual layer to show
| wmsLayers[].uuid	| string	| UUID of the layer
| wmsLayers[].format	| string	| format of the return image (e.g. png)
| wmsLayers[].settings	| 	|
| wmsLayers[].settings.enabled	| boolean	| determines if a layer can be interacted with in the layer selector
| wmsLayers[].settings.opacity	| numeric	| opacity of layer (decimal). 1 being fully opaque, 0 being fully transparent
| wmsLayers[].extent	| [ESRI Extent](https://developers.arcgis.com/javascript/jsapi/extent-amd.html)	| A valid extent object, including spatial reference.  Extent should define a valid extent for the WMS
| wmsLayers[].layerInfo	|	|
| wmsLayers[].layerInfo.name	| string	| name of the layer in the WMS we want to display.  must match exactly from the WMS definition
| wmsLayers[].layerInfo.title	| string	| title of the layer in the WMS we want to display.  must match exactly from the WMS definition
| wmsLayers[].layerInfo.allExtents	| collection	| empty for now.  possible to utilize this in later versions
| wmsLayers[].layerInfo.spatialReferences	| collection	| empty for now.  possible to utilize this in later versions
| wmsLayers[].layerInfo.subLayers	| collection	| empty for now.  possible to utilize this in later versions
| wmsLayers[].legend	|	|
| wmsLayers[].legend.enable	| boolean	| true to enable WMS legends, false to disable it
| wmsLayers[].legend.legendURL	| string	| url to legend image for the layer.  optional
| wmsLayers[].symbology	| object	| identical structure to the featureLayers[].symbology node
| wmsLayers[].layerVisible | boolean  | The initial visibility of the WMS layer
| wmsLayers[].featureInfo | object  | an optional object section, if defined implies that getFeatureInfo should be enabled for this layer
| wmsLayers[].featureInfo.mimeType | string  | the mime type to be requested from the server (used in the FORMAT argument of the request)
| wmsLayers[].featureInfo.parser | string  | the name of the plugin used to parse the response
| <a name="datagrid" />datagrid	| 	|
| datagrid.globalGridRowsPerPage	| numeric	| Number of rows per page to be displayed in datagrid in summary view
| datagrid.defaultState	| string	| Default state of the datagrid: summary or extended
| datagrid.summaryEnabled	| boolean	| Flag indicate summary grid is enabled
| datagrid.extendedEnabled	| boolean	| Flag indicate extended grid is enabled
| datagrid.extendedColumns[]	| collections	| Column definition for extended datagrid
| <a name="datagrid_extendedextentfilterenabled" /> datagrid.extendedExtentFilterEnabled   | boolean       | Flag to toggle the extent filter on or off for the extended grid
| siteTemplate	| 	|
| <a name="sitetemplate_basemaptemplate" /> siteTemplate.basemapTemplate 	| string	| The JSON template for each entry in the basemap selector (defaults to name of map and a thumbnail)
| <a name="sitetemplate_filterglobalrowtemplate" />siteTemplate.filterGlobalRowTemplate	| string	| Template for
| <a name="sitetemplate_filterrowtemplate" />siteTemplate.filterRowTemplate	| string	| Filter template used to generate filter content for map layers.
| <a name="globalfilter" /> globalFilter	| 	|
| <a name="globalfilter_txtalldata" />globalFilter.txtAllData	| string	| Global filter text for All Data
| <a name="globalfilter_togglelabel" />globalFilter.toggleLabel	| collection | Attributes and settings for individual toggle in the global section of filter manager
| globalFilter.toggleLabel[].id	| string	| Id of the toggle label
| globalFilter.toggleLabel[].dataAttribute	| string	| Data attribute
| globalFilter.toggleLabel[].value	| string	|
| globalFilter.toggleLabel[].checked	| string	| Value of the checked attribute
| globalFilter.toggleLabel[].title	| string	| Value for the title attribute
| globalFilter.toggleLabel[].classAddition	| string	| Additional CSS to be added to toggle label style
| divNames	| 	| RAMP div container names in code and in HTML
| divNames.map	| string	| Map container name; default is mainMap
| divNames.navigation	| string	| Navigation container name; default is map-navigation
| divNames.filter	| string	| Filter container name; default is searchMapSectionBody
| divNames.datagrid	| string	| Datagrid container name; default is searchMapSectionBody
| ui | | Stores initial state of the user interface
| ui.fullscreen | boolean | true if the interface should start in fullscreen mode. False otherwise.
| ui.sidePanelOpened | boolean | true if the interface should start with the side panel opened. False otherwise.
| plugins | collection of strings | a set of plugins to be loaded with RAMP

[Back To Top](#top)
{: .text-right}