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

* lang
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
    * tools (collection)        
        * name
        * selector
        * enabled
* levelOfDetails
    * minLevel
    * maxLevel
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
* layers
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
		* layerAttributes
		* templates
			* hover
			* anchor
			* summary
			* detail
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
| <a name="lang_field" /> lang	| string	| Language of this config object; en or fr
| geometryService	| string	| URL to an ArcGIS geometry service REST endpoint.  Used for advanced drawing tools.
| proxyUrl	| string	| Path to a proxy service (relative path).  Used for sending large requests to services.
| <a name="spatialreference" />spatialReference	| object	| A valid ESRI spatial reference object.  See https://developers.arcgis.com/javascript/jsapi/spatialreference-amd.html#spatialreference1
| <a name="extents" />extents	| 	| 
| extents.defaultExtent	| envelope	| Map extent to display when the app initializes
| extents.fullExtent	| envelope	| Map extent to display when the full extent button is pushed
| extents.maximumExtent	| envelope	| Map extent that defines the valid viewing area.  the app should not allow a user to pan outside of this extent
| <a name="navwidget" />navWidget	| 	|
| navWidget.sliderMinVal	| numeric	| Navigation widget slider minimum scale level value
| navWidget.sliderMaxVal	| numeric	| Navigation widget slider maximum scale level value
| navWidget.debug	| numeric	| Debug flag, will generate console log when set to a non-zero value
| navWidget.animate	| string	| Slider animation setting. Can be "fast", "slow", or a number in milliseconds
| navWidget.locale	| string	| Navigation widget locale.  en or fr
| navWidget.cssPath	| string	| Path to folder containing the CSS skins
| navWidget.skin	| string	| Name of the skin style to apply.  Style must be in the above folder
| <a name="advancedToolbar" />advancedToolbar	| 	|
| advancedToolbar.enabled	| boolean	| Determines if the advanced toolbar is available in the app
| advancedToolbar.tools	| collection of tool objects	| Holds a child object for each available tool
| advancedToolbar.tools[].name	| string	| Name of the tool.  Should match the name property of the tool's javascript module
| advancedToolbar.tools[].selector	| string	| Name of the selector tag to use in the html layout.  Should be unique amongst tools
| advancedToolbar.tools[].enabled	| boolean	| Determines if the tool should be made available in the toolbar
| levelOfDetails	| 	|
| <a name="levelofdetails_minlevel" />levelOfDetails.minLevel	| numeric	| Minimum level of detail
| <a name="levelofdetails_maxlevel" />levelOfDetails.maxLevel	| numeric	| Maximum level of detail
| <a name="basemaps" /> basemaps	| collection of basemap items	| Order of collection will determine order they are added to the basemap selector list.  Can be empty.
| basemaps[].id	| string	| To identify basemap.  Unique across all map items.  No spaces!
| <a name="basemaps_url" /> basemaps[].url	| string	| REST url of the basemap
| <a name="basemaps_thumbnail" />basemaps[].thumbnail	| string	| Path to image file to display in the basemap selector (optional)
| <a name="basemaps_showoninit" />basemaps[].showOnInit	| boolean	| Indicates if basemap should be the active basemap when the site loads.  Only one TRUE per collection
| basemaps[].scaleCssClass	| string	| Map scale style.  Use 'map-scale-dark' for light basemaps, 'map-scale-light' for dark basemaps.
| <a name="basemaps_type" />basemaps[].type	| string	| Base map type.  This is descriptive only, and will be shown in the basemap selector.
| <a name="basemaps_name" />basemaps[].name	| string	| Basemap name to be displayed in the selector.
| basemaps[].altText	| string	| Alt text for the basemap thumbnail image
| <a name="basemaps_description" />basemaps[].description	| string	| Description of the basemap.  Will be visible when basemap selector is expanded.
| layers	| 	| Where layer collections reside
| layers.feature	| collection of feature layer objects	| Order of collection will determine order they are added to the map.  Can be empty.
| <a name="featurelayers_id" />layers.feature[].id	| string	| To identify a layer.  Unique across all map items.  no spaces!
| <a name="featurelayers_displayname" />layers.feature[].displayName	| string	| Name of the feature layer.  Will be displayed in the layer selector
| <a name="featurelayers_url" /> layers.feature[].url	| string	| REST URL of the layer.  Should be an ESRI feature service.
| <a name="featurelayers_datagrid" />layers.feature[].datagrid	| 	|
| layers.feature[].datagrid.rowsPerPage	| numeric	| Optional.  Number of rows to display in the grid (i.e. one page of results).  Default value is 50.
| layers.feature[].datagrid.gridColumns[].id	| string	| To identify a column.  Unique across all columns.  No spaces!
| layers.feature[].datagrid.gridColumns[].fieldName	| string	| Feature attribute field that defines this column.  Used by the default grid templates to populate values.
| layers.feature[].datagrid.gridColumns[].width	| string	| Width of the field in pixels.  E.g. '500px'
| layers.feature[].datagrid.gridColumns[].isSortable	| boolean	| Determines if we can sort on this column
| layers.feature[].datagrid.gridColumns[].sortType	| string	| The type of sort to apply.  Can use 'numeric', 'string', 'date', or 'html'
| layers.feature[].datagrid.gridColumns[].alignment	| numeric	| If 1, the column will be centered.  If 0, the column will be left-aligned.
| layers.feature[].datagrid.gridColumns[].title	| string	| Title of the grid column.  This will show in the column header
| <a name="featurelayers_datagrid_gridcolumns_columntemplate" />layers.feature[].datagrid.gridColumns[].columnTemplate	| 	| Template name to be used to generate the content of the given column.  A plain value template is 'unformatted_grid_value'
| <a name="featurelayers_layerattributes" />layers.feature[].layerAttributes	| string	| An array of strings which correspond to fields to include in the FeatureLayer.  If not specified, the feature layer will return the OBJECTID field and if applicable the start time field, end time field and type id field. You can specify ["*"] to fetch the values for all fields in the layer, this is useful when editing features. Associated with outfield options in ESRI FeatureLayer.
| <a name="featurelayers_templates" /> layers.feature[].templates	| 	| 
| <a name="featurelayers_templates_hover" /> layers.feature[].templates.hover	| string	| Optional.  Template name defining the contents of a hover tip.  Default value is 'feature_hover_maptip_template'
| <a name="featurelayers_templates_anchor" />layers.feature[].templates.anchor	| string	| Optional.  Template name defining the contents of an anchored map tip.  Default value is 'anchored_map_tip'
| <a name="featurelayers_templates_summary" />layers.feature[].templates.summary	| string	| Optional.  Template name defining the contents of a row for features of this layer in the summary grid.  Default value is 'default_grid_summary_row'
| <a name="featurelayers_templates_detail" /> layers.feature[].templates.detail	| string	| Optional.  Template name defining the contents of the details pane for a feature of this layer.  Default value is 'default_feature_details'
| <a name="featurelayers_symbology" />layers.feature[].symbology	| 	|
| layers.feature[].symbology.renderer	| 	|
| layers.feature[].symbology.renderer.type	| string	| The type of renderer being used on the layer.  Current supported values are "simple" and "unique"
| layers.feature[].symbology.renderer.key1	| string	| First attribute used in unique value renderer
| layers.feature[].symbology.renderer.key2	| string	| Second attribute used in unique value renderer
| layers.feature[].symbology.renderer.key3	| string	| Third attribute used in unique value renderer
| layers.feature[].symbology.icons[]	| 	|
| layers.feature[].symbology.icons[].default.imageUrl	| string	| Url to symbology image
| layers.feature[].symbology.icons[].default.legendText	| string	| Legend text for the given symbology
| layers.feature[].uuid	| string	| Feature layer UUID
| layers.feature[].nameField	| string	| Field to be used to describe a feature.  Utilized in summary grid, detail content, map tip, and anchored maptip
| <a name="featurelayers_settings" />layers.feature[].settings	| object	| Object to store layer settings and their presets.
| layers.feature[].settings.enabled	| boolean	| Indicates whether the settings panel should be accessible to the user.
| layers.feature[].settings.opacity	| object	| Object to store opacity information.
| layers.feature[].settings.opacity.enabled	| boolean	| Indicates whether opacity of the layer can be changed by the user. If settings are disabled, the opacity preset value will still be applied to the opacity level.
| layers.feature[].settings.opacity.default	| numeric	| Specifies the preset opacity level to be applied to the layer on load.
| layers.feature[].isStatic	| boolean	| Specifies the current layer as static layer.
| layers.feature[].layerType	| string	| Specifies the map service layer type (feature, tile, or dynamic.) 
| layers.feature[].layerVisible | boolean  | The initial visibility of the layer
| layers.feature[].boundingBoxVisible | boolean | The initial visibility of the bounding box for this layer (optional for static layers)
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