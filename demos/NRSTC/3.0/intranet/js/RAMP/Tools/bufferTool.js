/*! ramp-theme-intranet 13-11-2014 10:16:34 : v. 3.0.1 
 * 
 * RAMP GIS viewer - Canada Goose; Sample of an implementation of RAMP with Intranet Theme 
 **/
define(["dojo/dom","dojo/_base/array","dojo/_base/Color","dojo/_base/lang","esri/config","esri/graphic","esri/tasks/GeometryService","esri/tasks/BufferParameters","esri/toolbars/draw","esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol","esri/SpatialReference","ramp/map","ramp/globalStorage","tools/baseTool"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){"use strict";function p(a){var b=a.geometry,d=w.map,e=new g(n.config.geometryService),i=new k(k.STYLE_NONE,new j(j.STYLE_DASHDOT,new c([255,0,0,1]),new c([0,255,0,.25]))),m=new f(b,i);x.working(!0),d.graphics.add(m);var o=new h,p=x.outputFloat.find(".distance-input").val().replace(/[^0-9\.]+/g,"");""===p?x.working(!1):(o.distances=[p],o.bufferSpatialReference=new l({wkid:n.config.spatialReference.wkid}),o.outSpatialReference=w.map.spatialReference,o.unit=9036,e.simplify([b],function(a){o.geometries=a,e.buffer(o,q)}))}function q(a){var d=new k(k.STYLE_SOLID,new j(j.STYLE_SOLID,new c([255,0,0,.65]),2),new c([255,0,0,.35]));b.forEach(a,function(a){var b=new f(a,d);w.map.graphics.add(b)}),w.map.showZoomSlider(),x.working(!1)}function r(){w.toolbar.activate(i.FREEHAND_POLYGON),u()}function s(){w.toolbar.deactivate(),t()}function t(){w.map.graphics.clear()}function u(){x.displayTemplateOutput({distanceLabel:i18n.t(x.ns+":distance")})}var v,w,x;return v={init:function(){var a=m.getMap(),b=new i(a);b.on("draw-end",p),w={map:a,toolbar:b},e.defaults.io.proxyUrl=n.config.proxyUrl,e.defaults.io.alwaysUseProxy=!1}},d.mixin({},o,{init:function(a,b){return x=this,this.initToggle(a,b,{activate:r,deactivate:s,defaultAction:t}),v.init(),this},name:"bufferTool"})});