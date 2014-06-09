---
layout: index-en
title: Template Overview
categories: [documentation]
---
{% include JB/setup %}

<a name="top" />

#Template Overview {#wb-cont}

Below is all the modules that are customizable through templating. This summarizes all the information the developers need in order to customize each module through templating. For details on how templating works, refer to this [guide](template-guide-en.html). For an example of modifying a module through templating, refer to this [guide](template-example-en.html).

###Quick Links

[Header Description](#header_description)

[Basemap Selector](#basemap_selector)

[Datagrid Summary Mode](#datagrid_summary_mode)

[Datagrid Expanded Mode](#datagrid_expanded_mode)

[Feature Hover Tip](#feature_hover_tip)

[Feature Details Panel](#feature_details_panel)

[Feature Anchor Tip](#feature_anchor_tip)

[Filter Global Row](#filter_global_row)

[Filter Row](#filter_row)




###Header Description {#header_description}

Description - a description of what the template modifies\\
Template Name - the path in the JSON configuration file containing the name of the template. Each new line denotes the next child in the path.\\
Template File - the template file containing the template, all files reside in the "RAMP/modules/templates" folder\\
Data object - a description of the data object (o.data) that gets passed into the template

###Basemap Selector {#basemap_selector}

Each row in the basemap selector dropdown.

**Default Behaviour**

The default basemap row contains the name of the basemap, its type in parentheses, the description and an icon. 

<section class="wb-lbx lbx-gal">	
	<a href="../assets/images/basemap_selector_default.png">
		<img src="../assets/images/basemap_selector_default.png" style="width:517px; height:155px; max-width:80%" />
	</a>
</section>

The default template uses the URL in [basemaps[].thumbnail](json-config-en.html#basemaps_thumbnail) for the image icon, the [basemaps[].name](json-config-en.html#basemaps_name) for the basemap name,  [basemaps[].type](json-config-en.html#basemaps_type) for the basemap type, and [basemaps[].description](json-config-en.html#basemaps_description) for the description. The user can feel free to add more fields to the [basemaps[]](json-config-en.html#basemaps) entry if their template requires it.

**Sample Screenshot**

<section class="wb-lbx lbx-gal">	
	<a href="../assets/images/basemap_selector_screenshot.png">
		<img src="../assets/images/basemap_selector_screenshot.png" style="width:213px; height:208px; max-width:80%" />
	</a>
</section>

**Template Name**

[siteTemplate.basemapTemplate]("json-config-en.html#sitetemplate_basemaptemplate")

**Template File**

basemap_selector_template.json

**Data Object**

[config.basemaps[]](json-config-en.html#basemaps)

[Back To Top](#top)





###Datagrid Summary Mode {#datagrid_summary_mode}

Each row in the datagrid when the datagrid is in the summary mode.

**Default Behaviour**

In the default datagrid summary mode, each row contains an image representing the feature on the map, the name of the feature, the layer the feature belongs to, as well as a "details" and "zoom to" button. 

<section class="wb-lbx lbx-gal">	
	<a href="../assets/images/datagrid_summary_default.png">
		<img src="../assets/images/datagrid_summary_default.png" style="width:407px; height:92px; max-width:80%" />
	</a>
</section>

The image URL is retrieved using the [getGraphicIcon](http://ramp-racp.github.io/api/yuidoc/classes/TmplUtil.html#method_getGraphicIcon) function in [templateUtils](http://ramp-racp.github.io/api/yuidoc/classes/TmplUtil.html), which is available to the template via [o.fn](template-guide-en.html#o_fn). The feature name is retrieved using the [getFeatureName](http://ramp-racp.github.io/api/yuidoc/classes/TmplUtil.html#method_getFeatureName) function. The layer name is populated using the [featureLayers[].displayName](json-config-en.html#featurelayers_displayname), which can be accessed via [o.lyr](template-guide-en.html#o_lyr). 

**Sample Screenshot**

<section class="wb-lbx lbx-gal">	
<a href="../assets/images/datagrid_summary_screenshot.png">
<img src="../assets/images/datagrid_summary_screenshot.png" width="249" height="92" />
</a>
</section>

**Template Name**

[featureLayers[].datagrid.summaryRowTemplate](json-config-en.html#featurelayers_datagrid_summaryrowtemplate)

**Template File**

datagrid_template.json

**Data Object**

The ESRI <a href="https://developers.arcgis.com/javascript/jsapi/graphic-amd.html"> Graphic object</a> associated with that point

[Back To Top](#top)





###Datagrid Expanded Mode {#datagrid_expanded_mode}

Each row in the datagrid when the datagrid is the expanded mode

**Default Behaviour**

The default extended datagrid only allows the user to view one layer's dataset at a time. The user can change layers using the dataset dropdown menu. The extended grid represent each feature on the map by a row in the datagrid. Each column uses a different template, and therefore can display virtually anything the developer wishes the user to see, for example: a simple data field, an image, or a link. The template that is used is specified by the [columnTemplate](json-config-en.html#featurelayers_datagrid_gridcolumns_columntemplate) field in the config. The data object passed into each column template will be the same, except for the "columnIdx" field which will indicate the column index (zero-based).

**Sample Screenshot**

<section class="wb-lbx lbx-gal">
<a href="../assets/images/extended_grid_screenshot.png">	
<img src="../assets/images/extended_grid_screenshot.png" width="387" height="228" />
</a>
</section>

**Template Name**

<a href="json-config-en.html#featurelayers_datagrid_gridcolumns_columntemplate">config.featureLayers[].datagrid.gridColumns[].columnTemplate</a>

**Template File**

extended_datagrid_template.json

**Data Object**

The ESRI <a href="https://developers.arcgis.com/javascript/jsapi/graphic-amd.html"> Graphic object</a> associated with that point, along with an added field "columnIdx" that indicates the column index (zero-based).

[Back To Top](#top)







###Feature Anchor Tip {#feature_anchor_tip}

The popup that appears when a feature on the map is clicked.

**Default Behaviour**

The anchor tip contains the icon representing the feature, the name of the feature, and a close button. The icon is retrieved using [getGraphicIcon](http://ramp-racp.github.io/api/yuidoc/classes/TmplUtil.html#method_getGraphicIcon) function in [templateUtils](http://ramp-racp.github.io/api/yuidoc/classes/TmplUtil.html), which is available to the template via [o.fn](template-guide-en.html#o_fn). The feature name is retrieved using the [getFeatureName](http://ramp-racp.github.io/api/yuidoc/classes/TmplUtil.html#method_getFeatureName) function. 

**Sample Screenshot**

<section class="wb-lbx lbx-gal">
<a href="../assets/images/feature_anchor_tip_screenshot.png">	
<img src="../assets/images/feature_anchor_tip_screenshot.png" width="208" height="118" />
</a>
</section>

**Template Name**

<a href="json-config-en.html#featurelayers_maptipsettings_anchortemplate"> featureLayers[].mapTipSettings.anchorTemplate</a>

**Template File**

feature_anchortip_template.json

**Data Object**

The ESRI <a href="https://developers.arcgis.com/javascript/jsapi/graphic-amd.html"> Graphic object</a> associated with that point

[Back To Top](#top)






###Feature Hover Tip {#feature_hover_tip}

The popup that appears when the mouse hovers over a feature on the map.

**Default Behaviour**

The hover tip contains the icon representing the feature and the name of the feature. The icon is retrieved using [getGraphicIcon](http://ramp-racp.github.io/api/yuidoc/classes/TmplUtil.html#method_getGraphicIcon) function in [templateUtils](http://ramp-racp.github.io/api/yuidoc/classes/TmplUtil.html), which is available to the template via [o.fn](template-guide-en.html#o_fn). The feature name is retrieved using the [getFeatureName](http://ramp-racp.github.io/api/yuidoc/classes/TmplUtil.html#method_getFeatureName) function. 

**Sample Screenshot**

<section class="wb-lbx lbx-gal">
<a href="../assets/images/feature_hover_tip_screenshot.png">	
<img src="../assets/images/feature_hover_tip_screenshot.png" width="154" height="106" />
</a>
</section>

**Template Name**

<a href="json-config-en.html#featurelayers_maptipsettings_hovertemplate">featureLayers[].mapTipSettings.hoverTemplate</a>

**Template File**

feature_hovertip_template.json

**Data Object**

The ESRI <a href="https://developers.arcgis.com/javascript/jsapi/graphic-amd.html"> Graphic object</a> associated with that point

[Back To Top](#top)






###Feature Details Panel {#feature_details_panel}

The content of the detail panel that slides out whenever a user clicks on a feature on the map or selects a feature from the datagrid.

**Default Behaviour**

The default detail panel contains each field of the feature on a separate row with an alternating "zebra-pattern". The default template iterates through each field in the feature and generates a list item for each field. The "zebra-pattern" is achieved by adding the class "wet-boew-zebra alterwg" to the list. The Wet Template would look for lists labelled with such class and style it accordingly.

**Sample Screenshot**

<section class="wb-lbx lbx-gal">	
<a href="../assets/images/feature_detail_panel_screenshot.png">
<img src="../assets/images/feature_detail_panel_screenshot.png" width="201" height="291" />
</a>
</section>

**Template Name**

<a href="json-config-en.html#featurelayers_detailtemplate">featureLayers[].detailTemplate</a>

**Template File**

feature_details_template.json

**Data Object**

The ESRI <a href="https://developers.arcgis.com/javascript/jsapi/graphic-amd.html"> Graphic object</a> associated with that point

[Back To Top](#top)







###Filter Global Row {#filter_global_row}

The top row that contain the global layer and bounding box toggles

**Default Behaviour**

The default filter global row shows "All Data" and a global "eye" and "box" toggle for turning on/off all the layers or all the bounding boxes. The text displayed can be changed by changing [config.globalFilter.txtAllData](json-config-en.html#globalfilter_txtalldata), the data used to configure the checkboxes is contained in [config.globalFilter.toggleLabel[]](json-config-en.html#globalfilter_togglelabel).

**Sample Screenshot**

<section class="wb-lbx lbx-gal">	
<a href="../assets/images/filter_global_screenshot.png">
<img src="../assets/images/filter_global_screenshot.png" width="368" height="36" />
</a>
</section>

**Template Name**

<a href="json-config-en.html#sitetemplate_filterglobalrowtemplate"> siteTemplate.filterGlobalRowTemplate</a>

**Template File**

filter_manager_template.json

**Data Object**

<a href="json-config-en.html#globalfilter">config.globalFilter</a>

[Back To Top](#top)







###Filter Row {#filter_row}

Each row in the filter manager

**Default Behaviour**

The default filter row contain a handle that enables the user to rearrange the order of the layers on the map, an icon representing the layer, the name of the layer, a metadata button that allows the user open a subpanel to view the metadata in that layer, and an "eye" and "box" toggle box that enables the user to toggle the layer visibility and layer [bounding box](architecture-overview-en.html#bounding_box) visibility respectively. 



**Sample Screenshot**

<section class="wb-lbx lbx-gal">
<a href="../assets/images/filter_row_screenshot.png">	
<img src="../assets/images/filter_row_screenshot.png" width="344" height="133" />
</a>
</section>



**Template Name**

<a href="json-config-en.html#sitetemplate_filterrowtemplate">siteTemplate.filterRowTemplate</a>

**Template File**

filter_manager_template.json

**Data Object**

Custom

[Back To Top](#top)