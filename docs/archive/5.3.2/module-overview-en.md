---
layout: index-secmenu-5.3.2-en
title: RAMP Module Overview
categories: [documentation]
---
{% include JB/setup %}

<a name="top" />

# RAMP Module Overview {#wb-cont}

{% markdown JB/work_in_progress %}

<div class="toc"></div>

## ramp/advancedToolbar {#advancedToolbar}

Provides a toolbar with tools that violate accessibility rules.  Will load and display tools from config definitions and [customized tool modules](advanced-toolbar-en.html).


| **API Page** | [AdvancedToolbar](../api/yuidoc/classes/AdvancedToolbar.html)
| **Relevant Configuration Nodes** | [advancedToolbar](json-config-en.html#advancedToolbar)
| **Template Summary** | [Advanced Tools](template-summary-en.html#advanced_tools)

[Back To Top](#top)
{: .text-right}

## ramp/attributeLoader {#attributeLoader}

Manages the downloading, transformation, and storage of attribute data for map features.  Allows for attribute data to be downloaded independently of the map layers, making it easier to support both snapshot and on-demand feature layers.

| **API Page** | [AttributeLoader](../api/yuidoc/classes/AttributeLoader.html)

[Back To Top](#top)
{: .text-right}


## ramp/basemapSelector {#basemapselector}

Manages the widget that allows the user to change the basemap. Utilizes the [esri.dijit.Basemap](https://developers.arcgis.com/javascript/jsapi/basemap-amd.html) dijit.  Populates the widget with basemaps from the config.  If user changes to a basemap in a different projection or tile scheme, the site will reload to allow the map to re-initialize to the new scheme.

**Relevant Sequence Diagrams**

<section class="wb-lbx lbx-gal">
    <a href="assets/images/select_basemap.svg">
        <img src="assets/images/select_basemap.svg" style="max-width:80%" />
    </a>
</section>

| **API Page** | [BaseMapSelector](../api/yuidoc/classes/BaseMapSelector.html)
| **Relevant Configuration Nodes** | [basemaps](json-config-en.html#basemaps)
| **Template Summary** | [Basemap Selector](template-summary-en.html#basemap_selector)

[Back To Top](#top)
{: .text-right}

## ramp/bookmarkLink {#bookmarklink}

Manages the widget that allows the maps current state to be displayed as a URL.  Listens for specific site events and updates the link as they occur.  Allows emailing of link, url shortning of link.

| **API Page** | [BookmarkLink](../api/yuidoc/classes/BookmarkLink.html)
| **Relevant Configuration Nodes** | [lang](json-config-en.html#lang_field)

[Back To Top](#top)
{: .text-right}

## ramp/datagrid {#datagrid}

The module handles the construction and population of the data grid.

#### Table Creation
The table structure is generated using the [datatables](external-libraries-en.html#datatables) library. The content and styling of the data grid can be configured using the JSON configuration file.
Population of grid rows consists of determining visible features, generating column data (this includes applying templates), and filling the grid with the result set.

#### Datagrid Modes
The datagrid has two states: summary and extended. In summary mode, only the most basic information about each feature (such the layer it belongs to, its name, and its icon on the map) is presented.
In the extended mode, detailed information about each feature is provided in each column. The map is visible when the user is in summary mode, however the map is hidden when the user switches
to the extended mode. The data grid is destroyed and reconstructed each time the user switches between the summary and extended mode.

#### Extent Filtering
Each time the extent of the map is changed (via a pan or zoom operation), the datagrid updates to show only the features that are visible in the current extent. The bottom of the datagrid contains
a record count to notify the user of the number of features currently visible on the map versus the total number of features in the entire map. The extent filter behaviour can be toggled in the extended
grid using the [extendedExtentFilterEnabled](json-config-en.html#datagrid_extendedextentfilterenabled) field. The summary grid will always have the extent filter enabled. Each time the extent of the map
changes, the data grid is cleared, a query is sent to fetch a list of features visible in the current extent, and the data grid is repopulated with the new features. 

#### Pagination
Pagination is a custom plugin into the datatables library

#### Sorting
Sorting is provided out-of-the-box by the datatables library.

#### Feature Selection
Whenever the user clicks on a feature on the map, the corresponding row in the summary grid is highlighted. This is done by caching the object IDs of all the features and mapping them to the index of the feature in the datagrid.
Once the user clicks on a feature, the index is retrieved and the datagrid navigates to the correct page using the datatables pagination functions and scrolls to the correct row using JQuery. If a feature was highlighted prior
to the extent change, it will remain highlighted after the extent change if it is visible in the current extent. 

#### Details and Zoom Buttons
The grid contains a "details" button that is used to show detailed information about a feature, which will appear in a slide out panel.  The datagrid also
contains a "zoom to" button that is used to zoom to the feature on the map. Once zoomed in, the "zoom to" button will change to a "zoom back" button which will bring the user back to the original extent prior to the zoom to
operation. The dataGridClickHandler module (see below) is responsible for the behaviour of the datagrid when the "details" or "zoom to" button is clicked. In future releases, we plan to have this extensible to allow easy overriding 
of the default behaviour.

**Relevant Sequence Diagrams**

<section class="wb-lbx lbx-gal">
    <a href="assets/images/filter_data_sequence.svg">
        <img src="assets/images/filter_data_sequence.svg" style="max-width:80%" />
    </a>
</section>

| **API Page** | [Datagrid](../api/yuidoc/classes/Datagrid.html) |
| **Relevant Configuration Nodes** | [datagrid](json-config-en.html#datagrid) <br /> [featureLayers[].datagrid](json-config-en.html#featurelayers_datagrid) <br /> [gridstrings](json-config-en.html#gridstrings) |
| **Template Summary** | [Datagrid Summary Mode](template-summary-en.html#datagrid_summary_mode) <br /> [Datagrid Expanded Mode](template-summary-en.html#datagrid_expanded_mode) |

[Back To Top](#top)
{: .text-right}

## ramp/datagridClickHandler {#datagridclickhandler}

The module contains the handler functions that react to buttons in the datagrid being clicked.  Primarily this covers implementation of the Details and Zoom To buttons.  In future releases we intend to have these functions easily extendable.

The zoom function consists of the map zooming to the feature in question, where it will be highlighted and an anchor tip will be displayed.

The view detail function involves generating a custom detail report (from a template) and displaying it in a slide-out panel.

**Relevant Sequence Diagrams**

<section class="wb-lbx lbx-gal">
    <a href="assets/images/zoom_to_feature.svg">
        <img src="assets/images/zoom_to_feature.svg" style="max-width:80%" />
    </a>
</section>

<section class="wb-lbx lbx-gal">
    <a href="assets/images/view_feature_details.svg">
        <img src="assets/images/view_feature_details.svg" style="max-width:80%" />
    </a>
</section>

| **API Page** | [DatagridClickHandler](../api/yuidoc/classes/DatagridClickHandler.html)

[Back To Top](#top)
{: .text-right}

## ramp/dataLoader {#dataLoader}

Methods for supporting user added layers. Includes importing logic for various file types (GeoJSON, Shapefile, CSV) and support for user supplied services, such as symbology generators.

| **API Page** | [DataLoader](../api/yuidoc/classes/DataLoader.html)

[Back To Top](#top)
{: .text-right}

## ramp/dataLoaderGui {#dataLoaderGui}

Controls the interface for the add layer choice-tree. Includes the allowable choice flows and input presentation & validation.

| **API Page** | [DataLoaderGui](../api/yuidoc/classes/DataLoaderGui.html)

[Back To Top](#top)
{: .text-right}

## ramp/eventManager {#eventmanager}

The module defines event names as constants to avoid typing errors.

| **API Page** | [EventManager](../api/yuidoc/classes/EventManager.html)

[Back To Top](#top)
{: .text-right}

## ramp/featureClickHandler {#featureclickhandler}

The module contains the handler functions that react to the mouse interacting with features on the map.

This primarily consists of clicking a feature, and hovering over a feature.  For the most part, this class publishes appropriate events; the event listeners in other classes implement the reaction to the interactions.

**Relevant Sequence Diagrams**

<section class="wb-lbx lbx-gal">
    <a href="assets/images/click_a_feature.svg">
        <img src="assets/images/click_a_feature.svg" style="max-width:80%" />
    </a>
</section>

<section class="wb-lbx lbx-gal">
    <a href="assets/images/hover_over_feature.svg">
        <img src="assets/images/hover_over_feature.svg" style="max-width:80%" />
    </a>
</section>

| **API Page** | [FeatureClickHandler](../api/yuidoc/classes/FeatureClickHandler.html)

[Back To Top](#top)
{: .text-right}

## ramp/featureHighlighter {#featurehighlighter}

The module implements the highlighting of features on the map during hover and selection actions.

There are three types of highlighting: Click highlighting, Zoom highlighting, and Hover highlighting.  All are acomplished by fading out the map and duplicating the feature in question in a highliting layer, shown at regular brightness above the faded items.

The module also generates the graphic layers used to manage the highlight imagery

**Relevant Sequence Diagrams**

<section class="wb-lbx lbx-gal">
    <a href="assets/images/click_a_feature.svg">
        <img src="assets/images/click_a_feature.svg" alt="Click a Feature" style="max-width:80%" />
    </a>
</section>

<section class="wb-lbx lbx-gal">
    <a href="assets/images/hover_over_feature.svg">
        <img src="assets/images/hover_over_feature.svg" alt="Hover Over a Feature" style="max-width:80%" />
    </a>
</section>

<section class="wb-lbx lbx-gal">
    <a href="assets/images/zoom_to_feature.svg">
        <img src="assets/images/zoom_to_feature.svg" alt="Zoom to a Feature" style="max-width:80%" />
    </a>
</section>

| **API Page** | [FeatureHighlighter](../api/yuidoc/classes/FeatureHighlighter.html)

[Back To Top](#top)
{: .text-right}

## ramp/filterManager {#filtermanager}

The module implements the generation of the filter control, and implements the filtering.

There is currently only layer-level filtering in RAMP. I.e. a layer can be on or off.  Future versions plan to include more granular filtering, such as by-attribute filters.

The following actions are performed by the module

* Generate the filter interface (including using templates)
* Handle the toggling of layers
* Handle the toggling of bounding boxes for layers
* Handle the changing of layer's opacity through the Settings panel
    * When opacity is set to 0.0, the layer is toggled invisible
    * When opacity is set to 0.1 - 0.99, the layer is toggled visible (if it was invisible before)
    * When a layer is toggled invisible, the opacity slider control is "greyed out"
    * When a layer is toggled visible, the opacity slider control is restored to normal appearance
    * When a layer is toggled visible, the opacity slider control is set to 1.0 (only if it was set to 0.0)
* Changing the draw order of layers on the map

**Relevant Sequence Diagrams**

<section class="wb-lbx lbx-gal">
    <a href="assets/images/toggle_bounding_box.svg">
        <img src="assets/images/toggle_bounding_box.svg" alt="Toggle A Bounding Box" style="max-width:80%" />
    </a>
</section>

<section class="wb-lbx lbx-gal">
    <a href="assets/images/filter_data_sequence.svg">
        <img src="assets/images/filter_data_sequence.svg" alt="Filter Data Sequence" style="max-width:80%" />
    </a>
</section>

<section class="wb-lbx lbx-gal">
    <a href="assets/images/reorder_a_layer.svg">
        <img src="assets/images/reorder_a_layer.svg" alt="Change Map Drawing Order" style="max-width:80%" />
    </a>
</section>

| **API Page** | [FilterManager](../api/yuidoc/classes/FilterManager.html)
| **Relevant Configuration Nodes** |  [featureLayers[].id](json-config-en.html#featurelayers_id) <br /> [featureLayers[].displayName](json-config-en.html#featurelayers_displayname) <br /> [featureLayers[].symbology](json-config-en.html#featurelayers_symbology)  <br /> [featureLayers[].settings](json-config-en.html#featurelayers_settings)
| **Template Summary** | [Filter Global Row](template-summary-en.html#filter_global_row) <br /> [Filter Row](template-summary-en.html#filter_row)

[Back To Top](#top)
{: .text-right}

## ramp/geoSearch {#geoSearch}

The module provides functions to use the [GeoNames](http://www.nrcan.gc.ca/earth-sciences/geography/place-names/tools-applications/9249) and [GeoLocations](http://geogratis.gc.ca/site/eng/geoloc) services available from [GeoGratis](http://geogratis.cgdi.gc.ca/). It takes a search string (including a fragment as the string is typed) along with optional search parameters and returns matches and suggestions, along with map co-ordinates for those suggestions. The module also pre-downloads domain-of-values lists for [Province](http://geogratis.gc.ca/services/geoname/en/codes/province/) and [Concise](http://geogratis.gc.ca/services/geoname/en/codes/concise/) codes.

The module supports 

* Name search
	* Filter by Province
	* Filter by Concise Code
	* Fitler by Map Extent
	* Suggestions for Spelling Mistakes
* Forward Sorting Area search
	* Filter by Radius
* Lat Long search
	* Filter by Radius

| **API Page** | [GeoSearch](../api/yuidoc/classes/GeoSearch.html)

[Back To Top](#top)
{: .text-right}

## ramp/globalStorage {#globalstorage}

The module defines global items to make things easier to share across modules.  We place location specific string here (e.g. a configuration server URL), so this servers as the spot to tweak when moving the application to a different environment.  Implementers can also add items to this module on the fly.

| **API Page** | [GlobalStorage](../api/yuidoc/classes/GlobalStorage.html)

[Back To Top](#top)
{: .text-right}

## ramp/graphicExtension {#graphicextension}

The module contains helper functions for [graphic](https://developers.arcgis.com/javascript/jsapi/graphic-amd.html) objects and Feature Data objects.  E.g. get objectId, get layer, get detail text

| **API Page** | [GraphicExtension](../api/yuidoc/classes/GraphicExtension.html)
| **Relevant Configuration Nodes** | [featureLayers[].templates.detail](json-config-en.html#featurelayers_templates_detail)

[Back To Top](#top)
{: .text-right}

## ramp/gui {#gui}

Contains the gui related logic for the app.

Has a subpanel prototype.  This defines properties, constructor / destructor, open/close animation methods, content update.

Implements the side panel, help popup, add layer popup and registers those panels.

Contains logic to go to full-screen mode.

| **API Page** | [GUI](../api/yuidoc/classes/GUI.html)
| **Relevant Configuration Nodes** |  [stringResources](json-config-en.html#stringresources)
| **Template Summary** | [Feature Details Panel](template-summary-en.html#feature_details_panel)

[Back To Top](#top)
{: .text-right}

## ramp/imageExport {#imageExport}

The module contains logic to generate an image file based on the current map view using an ESRI ArcGIS Server [Export Web Map Task](http://resources.arcgis.com/en/help/rest/apiref/index.html?exportwebmap_spec.html)

There image export currently does not support imagery that is not hosted on a public map server (e.g. file-based layers,  bounding box graphics).

| **API Page** | [ImageExport](../api/yuidoc/classes/ImageExport.html)
| **Relevant Configuration Nodes** | [featureLayers[].templates.detail](json-config-en.html#featurelayers_templates_detail)

[Back To Top](#top)
{: .text-right}

## ramp/layerGroup {#layerGroup}

A class for managing groups of layers in the layer selector.

| **API Page** | [LayerGroup](../api/yuidoc/classes/LayerGroup.html)

[Back To Top](#top)
{: .text-right}

## ramp/layerItem {#layerItem}

A class for managing a layer in the layer selector. Controls the look and available controls for a layer based on its current state.

| **API Page** | [LayerItem](../api/yuidoc/classes/LayerItem.html)

[Back To Top](#top)
{: .text-right}

## ramp/layerLoader {#layerLoader}

Handles the loading and state changes of layers. This includes the insertion of layers into the map, and reacting to update and error events. Also contains logic to remove and reload layers.

| **API Page** | [LayerLoader](../api/yuidoc/classes/LayerLoader.html)

[Back To Top](#top)
{: .text-right}

## ramp/map {#map}

The map module generates the map control and layer objects, and initiates the adding of layers to the map. It also generates and hosts the scale bar.

Other map related functions can be found in this module, including layer re-ordering, client-side extent projection, layer visiblility management, zooming and re-centering, boundary checks, as well as applying numerous event listeners and re-publishers.

**Relevant Sequence Diagrams**

<section class="wb-lbx lbx-gal">
    <a href="assets/images/filter_data_sequence.svg">
        <img src="assets/images/filter_data_sequence.svg" alt="Filter Data Sequence" style="max-width:80%" />
    </a>
</section>

| **API Page** | [Map](../api/yuidoc/classes/Map.html)
| **Relevant Configuration Nodes** | [basemaps[].showOnInit](json-config-en.html#basemaps_showoninit) <br /> [basemaps[].url](json-config-en.html#basemaps_url) <br /> [extents](json-config-en.html#extents) <br /> [featureLayers[].url](json-config-en.html#featurelayers_url) <br /> [featureLayers[].layerAttributes](json-config-en.html#featurelayers_layerattributes) <br /> [levelOfDetails.minLevel](json-config-en.html#levelofdetails_minlevel) <br /> [levelOfDetails.maxLevel](json-config-en.html#levelofdetails_maxlevel) <br /> [spatialReference](json-config-en.html#spatialreference)

[Back To Top](#top)
{: .text-right}

## ramp/mapClickHandler {#mapClickHandler}

The module reacts to clicks on the map, which represents clicks on a WMS layer. It triggers the calling and results presentation of WMS feature info requests.

| **API Page** | [MapClickHandler](../api/yuidoc/classes/MapClickHandler.html)

[Back To Top](#top)
{: .text-right}

## ramp/maptips {#maptips}

The module handles maptip interaction (both hover and anchor). Includes positioning logic for tips.

Fills the tips with contents from the template.

**Relevant Sequence Diagrams**

<section class="wb-lbx lbx-gal">
    <a href="assets/images/close_anchor.svg">
        <img src="assets/images/close_anchor.svg" alt="Close an Anchor Tip" style="max-width:80%" />
    </a>
</section>

<section class="wb-lbx lbx-gal">
    <a href="assets/images/hover_over_feature.svg">
        <img src="assets/images/hover_over_feature.svg" alt="Hover Over a Feature" style="max-width:80%" />
    </a>
</section>

| **API Page** | [Maptips](../api/yuidoc/classes/Maptips.html)
| **Relevant Configuration Nodes** | [featureLayers[].mapTipSettings](json-config-en.html#featurelayers_templates)
| **Template Summary** | [Feature Hover Tip](template-summary-en.html#feature_hover_tip) <br /> Feature Anchor Tip](template-summary-en.html#feature_anchor_tip)

[Back To Top](#top)
{: .text-right}

## ramp/navigation {#navigationmodule}

The module handles the navigation widget.  It constructs it and applies a CSS skin to it.

Also handles the two-way synchronization between the map extent and the widget state.

| **API Page** | [Navigation](../api/yuidoc/classes/Navigation.html)
| **Relevant Configuration Nodes**  | [navWidget](json-config-en.html#navwidget)

[Back To Top](#top)
{: .text-right}

## ramp/quickzoom {#quickzoom}

Quick zoom widget is populated with target items, will zoom the map when an item is selected

THIS ITEM IS UNDER CONSIDERATION FOR COMPLETE OVERHAUL OR REMOVAL

NOTE: Depends on one of our quickzoom services.  These will be on public production after 10.1 migration.

NOTE: our current config file does not have the appropriate node.  We should add this to the sample

| **API Page** | [QuickZoom](../api/yuidoc/classes/QuickZoom.html)
| **Relevant Configuration Nodes** | `quickzoom`

[Back To Top](#top)
{: .text-right}

## ramp/stepItem {#stepItem}

A class to support a choice-tree step in the data loader workflow.

| **API Page** | [StepItem](../api/yuidoc/classes/StepItem.html)

[Back To Top](#top)
{: .text-right}

## ramp/theme {#theme}

Contains logic targeted at specific WET Themes, such as the full-screen animation sequences.

| **API Page** | [Theme](../api/yuidoc/classes/Theme.html)

[Back To Top](#top)
{: .text-right}