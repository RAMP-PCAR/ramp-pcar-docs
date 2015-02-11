/*! ramp-pcar 11-02-2015 18:40:06 : v. 5.0.0 
 * 
 * RAMP GIS viewer - Elk; Sample of an implementation of RAMP 
 **/
define(["dojo/_base/array","utils/util"],function(a,b){"use strict";function c(a,c){var d=$.extend(!0,{},a);return b.mergeRecursive(d,c)}function d(a){a.defs("EPSG:3978","+proj=lcc +lat_1=49 +lat_2=77 +lat_0=49 +lon_0=-95 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"),a.defs("EPSG:3979","+proj=lcc +lat_1=49 +lat_2=77 +lat_0=49 +lon_0=-95 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"),a.defs("EPSG:102100",a.defs("EPSG:3857")),a.defs("EPSG:54004","+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs")}function e(b){var d;return d=c(l,b),d.layers.wms=a.map(d.layers.wms,function(a){return c(i,a)}),d.basemaps=a.map(d.basemaps,function(a){return c(k,a)}),d.layers.feature=a.map(d.layers.feature,f),d}function f(b){var d=c(h,b);return d.datagrid.gridColumns=a.map(d.datagrid.gridColumns,function(a){return c(j,a)}),d}function g(a){var b=c(i,a);return b}var h={layerAttributes:"*",minScale:0,maxScale:0,settings:{panelEnabled:!0,opacity:{enabled:!0,"default":1},visible:!0,boundingBoxVisible:!1},datagrid:{rowsPerPage:50},templates:{detail:"default_feature_details",hover:"feature_hover_maptip_template",anchor:"anchored_map_tip",summary:"default_grid_summary_row"}},i={settings:{panelEnabled:!0,opacity:{enabled:!0,"default":1},visible:!0,boundingBoxVisible:!0}},j={orderable:!0,type:"string",alignment:1},k={scaleCssClass:"map-scale-dark",type:"Topographic"},l={initialBasemapIndex:0,extendedDatagridExtentFilterEnabled:!1,rowsPerPage:50,navWidget:{sliderMinVal:3,sliderMaxVal:15,debug:!1,animate:"fast",cssPath:"ramp-theme/navigation",skin:"white"},zoomLevels:{min:1,max:17},templates:{basemap:"default_basemap",globalSelectorToggles:"default_selector_toggles"},layers:{feature:[],wms:[]},divNames:{map:"mainMap",navigation:"map-navigation",filter:"searchMapSectionBody",datagrid:"gridpane"},advancedToolbar:{enabled:!1,tools:[]},mapInitFailUrl:"./error-en.html"},m={circlePoint:{geometryType:"esriGeometryPoint",renderer:{type:"simple",symbol:{type:"esriSMS",style:"esriSMSCircle",color:[67,100,255,200],size:7}}},solidLine:{geometryType:"esriGeometryPolyline",renderer:{type:"simple",symbol:{type:"esriSLS",style:"esriSLSSolid",color:[90,90,90,200],width:2}}},outlinedPoly:{geometryType:"esriGeometryPolygon",renderer:{type:"simple",symbol:{type:"esriSFS",style:"esriSFSSolid",color:[76,76,125,200],outline:{type:"esriSLS",style:"esriSLSSolid",color:[110,110,110,255],width:1}}}}};return{init:function(a){var b=e(a);RAMP.config=b,this.layerSelectorGroups=[this.layerType.wms,this.layerType.feature]},defineProjections:d,DefaultRenderers:m,applyFeatureDefaults:f,applyWMSDefaults:g,layerType:{Basemap:"basemap",wms:"wms_layer",BoundingBox:"bounding_box",feature:"feature_layer",Static:"static_layer",Highlight:"highlight_layer",Hoverlight:"hoverlight_layer",Zoomlight:"zoomlight_layer"},layerSelectorGroups:[]}});