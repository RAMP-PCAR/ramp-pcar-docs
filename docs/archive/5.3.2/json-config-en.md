---
layout: index-secmenu-5.3.2-en
title: JSON Config Definition
categories: [documentation]
---

<a name="top" />

# JSON Config Definition {#wb-cont}

{% markdown JB/work_in_progress %}

This page will walk you through the layout of the application configuration object and all of its properties.

For details on migrating a config file from Canada Goose to Dragonfly, or Dragonfly to Elk, see the [Migration Guide](config-migration-en.html).

<div class="toc"></div>

##Object Outline

* geometryServiceUrl
* proxyUrl
* exportMapUrl
* exportProxyUrl
* geonameUrl
* geolocationUrl
* extents
    * defaultExtent
    * fullExtent
    * maximumExtent
* navWidget
    * sliderMinVal
    * sliderMaxVal
    * debug
    * animate
    * cssPath
    * skin
* advancedToolbar
    * enabled
    * tools (collection)
        * name
        * selector
        * enabled
* zoomLevels
    * min
    * max
* initialBasemapIndex
* basemaps (collection)
    * id
    * layers (collection)
		* url
		* visibleLayers
    * thumbnail
    * scaleCssClass
    * type
    * name
    * altText
    * description
	* tileSchema
	* spatialReference
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
			* type
			* label
			* imageUrl
			* defaultImageUrl
			* field1
			* field2
			* field3
			* valueMaps (collection)
				* label
				* value
				* imageUrl
			* field
			* minValue
			* rangeMaps (collection)
				* label
				* maxValue
				* imageUrl
		* nameField
		* layerExtent
		* maxAllowableOffset
		* settings
			* panelEnabled
			* opacity
				* enabled
				* default
			* visible
			* boundingBoxVisible
		* isStatic
		* aliasMap
	* wmsLayers (collection)
		* id
		* displayName
		* url
		* format
		* layerName
		* settings
			* panelEnabled
			* opacity
				* enabled
				* default
			* visible
		* legendType
		* featureInfo
			* mimeType
			* parser
* rowsPerPage
* extendedDatagridExtentFilterEnabled
* templates
    * basemap
	* layerGlobalToggles
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
| geometryServiceUrl	| string	| URL to an ArcGIS geometry service REST endpoint.  Used for advanced drawing tools.
| <a name="proxyUrl" />proxyUrl	| string	| Path to a proxy service (relative path).  Used for sending large requests to services.  No URL indicates no proxy is available.
| exportMapUrl	| string	| URL to a map export service. Should point directly to an endpoint that can be consumed by ESRI PrintTask.
| exportProxyUrl	| string	| Path to a proxy service for map export requests. Required for IE9 to support map export.
| geonameUrl	| string	| URL to geonames service root. Supplies detailed info on geonames. Service should conform to geogratis geoname request and return value schemas.
| geolocationUrl	| string	| URL to geolocations service root. Supplies basic information but supports more location types. Service should conform to geogratis geolocation request and return value schemas.
| <a name="extents" />extents	| 	| Note:  All extents should contain xmin, ymin, xmax, ymax values, and a [spatial reference](https://developers.arcgis.com/javascript/jsapi/spatialreference-amd.html#spatialreference1) for the co-ordinates.
| extents.defaultExtent	| envelope	| Map extent to display when the app initializes
| extents.fullExtent	| envelope	| Optional.  Map extent to display when the full extent button is pushed.  Default value is defaultExtent
| extents.maximumExtent	| envelope	| Optional.  Map extent that defines the valid viewing area.  The app should not allow a user to pan outside of this extent.  Default value is defaultExtent
| <a name="navwidget" />navWidget	| 	|
| navWidget.sliderMinVal	| numeric	| Optional.  Navigation widget slider minimum scale level value.  Default value is 3
| navWidget.sliderMaxVal	| numeric	| Optional.  Navigation widget slider maximum scale level value.  Default value is 15
| navWidget.debug	| numeric	| Optional.  Debug flag, will generate console log when set to a non-zero value.  Default value is 0
| navWidget.animate	| string	| Optional.  Slider animation setting. Can be "fast", "slow", or a number in milliseconds.  Default value is "fast"
| navWidget.cssPath	| string	| Optional.  Path to folder containing the CSS skins.  Default value is "ramp-theme/navigation"
| navWidget.skin	| string	| Optional.  Name of the skin style to apply.  Style must be in the above folder.  Default value is "white"
| <a name="advancedToolbar" />advancedToolbar	| 	|
| advancedToolbar.enabled	| boolean	| Determines if the advanced toolbar is available in the app
| advancedToolbar.tools	| collection of tool objects	| Holds a child object for each available tool
| advancedToolbar.tools[].name	| string	| Name of the tool.  Should match the name property of the tool's javascript module
| advancedToolbar.tools[].selector	| string	| Name of the selector tag to use in the html layout.  Should be unique amongst tools
| advancedToolbar.tools[].enabled	| boolean	| Determines if the tool should be made available in the toolbar
| zoomLevels	| 	|
| <a name="levelofdetails_minlevel" />zoomLevels.min	| numeric	| Optional.  Minimum zoom level.  Default value is 1
| <a name="levelofdetails_maxlevel" />zoomLevels.max	| numeric	| Optional.  Maximum zoom level.  Default value is 17
| <a name="initialSelectedBasemap" />initialBasemapIndex	| numeric	| Optional.  Index of the basemap to show at load time.  Index refers to the position in the basemaps collection.  Default value is 0.
| <a name="basemaps" /> basemaps	| collection of basemap items	| Order of collection will determine order they are added to the basemap selector list.  Can be empty.
| basemaps[].id	| string	| To identify basemap.  Unique across all map items.  No spaces!
| <a name="basemaps_layers" /> basemaps[].layers	| collection of layers	| The services that make up this basemap.  Facillitates having multiple tile sets act as one basemap.
| <a name="basemaps_url" /> basemaps[].layers[].url	| string	| REST url of the basemap.
| <a name="basemaps_url" /> basemaps[].layers[].visibleLayers	| array of integers	| Optional.  Allows you to specify specific layer ids from a map service.  If not provided, all layers are visible.
| <a name="basemaps_thumbnail" />basemaps[].thumbnail	| string	| Path to image file to display in the basemap selector.
| basemaps[].scaleCssClass	| string	| Optional.  Map scale style.  Use 'map-scale-dark' for light basemaps, 'map-scale-light' for dark basemaps.  Default value is "map-scale-dark".
| <a name="basemaps_type" />basemaps[].type	| string	| Optional.  Base map type.  This is descriptive only, and will be shown in the basemap selector.  Default value is "Topographic".
| <a name="basemaps_name" />basemaps[].name	| string	| Basemap name to be displayed in the selector.
| basemaps[].altText	| string	| Alt text for the basemap thumbnail image.
| <a name="basemaps_description" />basemaps[].description	| string	| Description of the basemap.  Will be visible when basemap selector is expanded.
| <a name="basemaps_tileschema" />basemaps[].tileSchema	| string	| A string that signifies what tile schema this basemap is in.  All basemaps in the same schema should have the same value in this field.
| <a name="basemaps_sr" />basemaps[].spatialReference	| object	| The [spatial reference](https://developers.arcgis.com/javascript/jsapi/spatialreference-amd.html#spatialreference1) of the basemap.
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
| <a name="featurelayers_layerattributes" />layers.feature[].layerAttributes	| string	| A string which correspond to attributes to be downloaded alongside the feature layer.  You can specify "*" to fetch all attributes in the layer.  Otherwise separate fields with commas, no spaces.  If not using default ensure you include the object id, as well as the fields required for symbology and title display.  Default value is "*"
| <a name="featurelayers_templates" /> layers.feature[].templates	| 	|
| <a name="featurelayers_templates_hover" /> layers.feature[].templates.hover	| string	| Optional.  Template name defining the contents of a hover tip.  Default value is 'feature_hover_maptip_template'
| <a name="featurelayers_templates_anchor" />layers.feature[].templates.anchor	| string	| Optional.  Template name defining the contents of an anchored map tip.  Default value is 'anchored_map_tip'
| <a name="featurelayers_templates_summary" />layers.feature[].templates.summary	| string	| Optional.  Template name defining the contents of a row for features of this layer in the summary grid.  Default value is 'default_grid_summary_row'
| <a name="featurelayers_templates_detail" /> layers.feature[].templates.detail	| string	| Optional.  Template name defining the contents of the details pane for a feature of this layer.  Default value is 'default_feature_details'
| <a name="featurelayers_symbology" />layers.feature[].symbology	| 	|
| layers.feature[].symbology.type	| string	| The type of renderer being used on the layer.  Current supported values are 'simple', 'uniqueValue', and 'classBreaks'
| layers.feature[].symbology.imageUrl	| string	| Optional.  For use in 'simple' renderers.  Url path to the symbology image.
| layers.feature[].symbology.label	| string	| Optional.  For use in 'simple' renderers.  Label describing the layer's symbol.
| layers.feature[].symbology.defaultImageUrl	| string	| Optional.  For use in 'uniqueValue' and 'classBreaks' renderers.  Url path to the symbology image for features that do not have a mapping in the renderer.
| layers.feature[].symbology.field1	| string	| Optional.  For use in 'unqiueValue' renderers.  Name of the first attribute used in defining the symbology.
| layers.feature[].symbology.field2	| string	| Optional.  For use in 'unqiueValue' renderers.  Name of the second attribute used in defining the symbology.
| layers.feature[].symbology.field3	| string	| Optional.  For use in 'unqiueValue' renderers.  Name of the third attribute used in defining the symbology.
| layers.feature[].symbology.valueMaps[]	| collection of unique value objects	| Optional.  For use in 'unqiueValue' renderers.
| layers.feature[].symbology.valueMaps[].label	| string	| Optional.  Label describing the symbol of this mapping.
| layers.feature[].symbology.valueMaps[].value	| string	| Value of the attributes defining this mapping.  For mappings spanning multiple fields, values are delimited by a comma and a space.  E.g. 'Val1, Val2, Val3'
| layers.feature[].symbology.valueMaps[].imageUrl	| string	| Url path to the symbology image for this mapping
| layers.feature[].symbology.field	| string	| Optional.  For use in 'classBreaks' renderers.  Name of the attribute used in defining the symbology.
| layers.feature[].symbology.minValue	| numeric	| Optional.  For use in 'classBreaks' renderers.  Lower bound of the value in the first range of the symbology.
| layers.feature[].symbology.rangeMaps[]	| collection of ranged value objects	| Optional.  For use in 'classBreaks' renderers.  Order of elements matters, as lower bounds for ranges are derived from the upper bound of the previous range.
| layers.feature[].symbology.rangeMaps[].label	| string	| Optional.  Label describing the symbol of this mapping.
| layers.feature[].symbology.rangeMaps[].maxValue	| numeric	| Upper bound of he value for this range of the symbology.
| layers.feature[].symbology.rangeMaps[].imageUrl	| string	| Url path to the symbology image for this mapping
| layers.feature[].nameField	| string	| Field to be used to identify a feature to a user.  Utilized in summary grid, detail content, map tip, and anchored maptip.  Ideal choice would be the name of a feature.
| layers.feature[].layerExtent	| extent	| Defines the boundary of the layers data (using a rectangle).  Should contain xmin, ymin, xmax, ymax values, and a valid [spatial reference](https://developers.arcgis.com/javascript/jsapi/spatialreference-amd.html#spatialreference1) for the co-ordinates.  Used to generate the bounding box in RAMP.
| layers.feature[].maxAllowableOffset	| numeric	| Simplification factor.  Two points closer than the factor will be converted to one.  A value of 0 turns off the simplification.
| <a name="featurelayers_settings" />layers.feature[].settings	| object	| Optional. Object to store layer settings.  If missing, default values will be used.
| layers.feature[].settings.panelEnabled	| boolean	| Optional. Indicates whether the settings panel should be accessible to the user.  Default value is True
| layers.feature[].settings.opacity	| object	| Optional.  Object to store opacity information.
| layers.feature[].settings.opacity.enabled	| boolean	| Optional.  Indicates whether opacity of the layer can be changed by the user. If settings are disabled, the opacity preset value will still be applied to the opacity level.  Default value is True
| layers.feature[].settings.opacity.default	| numeric	| Optional.  Specifies the preset opacity level to be applied to the layer on load.  Value must be between 0 and 1 inclusively.  Default value is 1.
| layers.feature[].settings.visible | boolean  | Optional.  The initial visibility of the layer.  Default value is True.
| layers.feature[].settings.boundingBoxVisible | boolean  | Optional.  The initial visibility of the layer's bounding box.  Default value is True.
| layers.feature[].isStatic	| boolean	| Optional.  Specifies the current layer is a static layer.  Default value is False.
| layers.feature[].aliasMap	| object	| Optional.  Defines a mapping of field names to field aliases (strings).
| <a name="wmsLayers" /> layers.wmsLayers	| collection	| WMS layers to be added to the map.  Order dictates initial order on the map.
| layers.wmsLayers[].id	| string	| To identify a layer.  Unique across all WMS layers
| layers.wmsLayers[].url	| string	| The url of the WMS service.  Does not specify name of individual layer to show
| layers.wmsLayers[].format	| string	| Format of the return image (e.g. png)
| layers.wmsLayers[].settings	| object	| Optional. Object to store layer settings.  If missing, default values will be used.
| layers.wmsLayers[].settings.panelEnabled	| boolean	| Optional. Indicates whether the settings panel should be accessible to the user.  Default value is True
| layers.wmsLayers[].settings.opacity	| object	| Optional.  Object to store opacity information.
| layers.wmsLayers[].settings.opacity.enabled	| boolean	| Optional.  Indicates whether opacity of the layer can be changed by the user. If settings are disabled, the opacity preset value will still be applied to the opacity level.  Default value is True
| layers.wmsLayers[].settings.opacity.default	| numeric	| Optional.  Specifies the preset opacity level to be applied to the layer on load.  Value must be between 0 and 1 inclusively.  Default value is 1.
| layers.wmsLayers[].settings.visible | boolean  | Optional.  The initial visibility of the layer.  Default value is True.
| layers.wmsLayers[].layerName	| string	| Name of the layer in the WMS we want to display.  Must match exactly from the WMS definition
| layers.wmsLayers[].legendType	| string	| Optional.  If absent, indicates no legend support.  If present it should be a mime type.
| layers.wmsLayers[].featureInfo | object  | Optional.  If defined implies that getFeatureInfo functionality should be enabled for this layer.
| layers.wmsLayers[].featureInfo.mimeType | string  | The mime type to be requested from the server (used in the FORMAT argument of the request)
| layers.wmsLayers[].featureInfo.parser | string  | The name of the plugin used to parse the response.  Plugins reside in the js\plugins directory.
| rowsPerPage	| numeric	| Optional.  Number of rows per page to be displayed in datagrid in summary view.  Default value is 50
| <a name="datagrid_extendedextentfilterenabled" /> extendedDatagridExtentFilterEnabled   | boolean       | Flag to toggle the extent filter on or off for the extended grid
| templates	| 	|
| <a name="sitetemplate_basemaptemplate" /> templates.basemap 	| string	| Optional.  The JSON template name for each entry in the basemap selector.  Template should reside in file basemap_selector_template.json.  Default value is "default_basemap".  The default will display the name of map and a thumbnail image.
| <a name="sitetemplate_basemaptemplate" /> templates.layerGlobalToggles 	| string	| Optional.  The JSON template global layer visibility and bounding box visibility controls.  Template should reside in file filter_manager_template.json.  Default value is "default_global_toggles".  The default will display the standard eye and shaded box icons.
| divNames	| 	| RAMP div container names in code and in HTML
| divNames.map	| string	| Optional.  Map container name. Default value is "mainMap"
| divNames.navigation	| string	| Optional.  Navigation container name. Default value is "map-navigation"
| divNames.filter	| string	| Optional.  Filter container name. Default value is "searchMapSectionBody"
| divNames.datagrid	| string	| Optional.  Datagrid container name. Default value is "searchMapSectionBody"
| ui | | Stores initial state of the user interface
| ui.fullscreen | boolean | true if the interface should start in fullscreen mode. False otherwise.
| ui.sidePanelOpened | boolean | true if the interface should start with the side panel opened. False otherwise.
| plugins | collection of strings | A set of plugins to be loaded with RAMP.  The value of the strings should match a javascript file in the js\plugins folder.

[Back To Top](#top)
{: .text-right}
