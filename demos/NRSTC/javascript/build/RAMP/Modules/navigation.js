/*! ramp-gis-viewer 23-05-2014 */
define(["dojo/_base/declare","dojo/topic","ramp/globalStorage","ramp/eventManager"],function(a,b,c,d){"use strict";function e(){g.on("navigation:panClick",function(a,c){b.publish(d.Navigation.PAN,{direction:c})}).on("navigation:zoomClick",function(a,c){var e="zoomIn"===c?1:-1;b.publish(d.Navigation.ZOOM_STEP,{level:e})}).on("navigation:zoomSliderChange",function(a,c){b.publish(d.Navigation.ZOOM,{level:c})}).on("navigation:fullExtentClick",function(){b.publish(d.Navigation.FULL_EXTENT)})}function f(){function a(){g.navigation("toggleTransition")}b.subscribe(d.Map.EXTENT_CHANGE,function(a){g.navigation("setSliderVal",a.lod.level)}),b.subscribe(d.Map.ZOOM_START,a),b.subscribe(d.Map.ZOOM_END,a),b.subscribe(d.Map.PAN_START,a),b.subscribe(d.Map.PAN_END,a)}var g;return{init:function(a){c.config.navWidget.sliderVal=a;var b=c.config.navWidget.cssPath;c.config.navWidget.cssPath=dojoConfig.cssFolderPath+dojoConfig.buildState+b,c.config.navWidget.skin+=dojoConfig.extensionPrefix,g=$("#"+c.config.divNames.navigation).navigation(c.config.navWidget),g.navigation("setSliderVal",a),e(),f()}}});