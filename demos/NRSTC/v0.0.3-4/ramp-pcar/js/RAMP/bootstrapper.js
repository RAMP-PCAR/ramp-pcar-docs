/*! ramp-pcar 09-03-2015 15:38:07 : v. 5.1.0-3 
 * 
 * RAMP GIS viewer - Elk; Sample of an implementation of RAMP 
 **/
require(["dojo/parser","dojo/on","dojo/topic","dojo/request/script","dojo/request/xhr","dojo/_base/array","esri/config","ramp/map","ramp/basemapSelector","ramp/maptips","ramp/datagrid","ramp/navigation","ramp/filterManager","ramp/imageExport","ramp/bookmarkLink","utils/url","ramp/featureHighlighter","ramp/ramp","ramp/globalStorage","ramp/gui","ramp/eventManager","ramp/advancedToolbar","ramp/theme","ramp/layerLoader","ramp/dataLoaderGui","ramp/dataLoader","ramp/stepItem","utils/util","utils/prototype!","utils/functionMangler!","dojo/domReady!"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B){"use strict";function C(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src=dojoConfig.fullPluginPath+a,b.appendChild(c)}function D(){function a(){m.init(),RAMP.config.advancedToolbar.enabled&&v.init(),k.init(),w.tooltipster(),f.forEach(RAMP.startupLayers,function(a){x.loadLayer(a)})}c.subscribe(u.Map.INITIAL_BASEMAP_LOADED,function(){B.subscribeAll([u.BasemapSelector.UI_COMPLETE,u.FilterManager.UI_COMPLETE],function(){o.subscribeAndUpdate(),n.init(),y.init()});var b=h.getMap().__LOD.level?h.getMap().__LOD.level:0;l.init(b),q.init(),j.init(),i.init(),RAMP.flags.brokenWebBrowser?window.setTimeout(a,2e3):a()}),h.init(),l.construct(),w.tooltipster()}function E(a){var b,d=$("li.map-toolbar-item #advanced-toggle").parent(),e=document.getElementsByTagName("html")[0].className.indexOf("dj_ie9")>-1;s.init(a),s.defineProjections(window.proj4),g.defaults.io.proxyUrl=RAMP.config.proxyUrl,e?(g.defaults.io.corsDetection=!1,g.defaults.io.alwaysUseProxy=!0):g.defaults.io.corsDetection=!0,RAMP.flags.brokenWebBrowser=e,RAMP.config.advancedToolbar.enabled?d.removeClass("wb-invisible"):d.remove(),b=RAMP.config.plugins,b&&f.map(b,function(a){C(a)}),h.applyExtentDefaulting(),o.updateConfig(window.location.pathname.split("/").last()),c.subscribe(u.Map.EXTENTS_REPROJECTED,function(){c.subscribe(u.GUI.UPDATE_COMPLETE,function(){o.createUI(),x.init(),D()}),t.load(null,null,function(){}),r.loadStrings()}),h.projectConfigExtents()}B.checkConsole(),a.parse();var F,G,H=$("html").attr("lang");"en"!==H&&"fr"!==H&&(H="en"),RAMP.locale=H,i18n.init({lng:H+"-CA",load:"current",fallbackLng:!1}),F="fr"===H?"config.fr.json":"config.en.json",G=e(F,{handleAs:"json"}),G.then(function(a){if(RAMP.configServiceURL){var b=new p(require.toUrl(document.location)),c=b.queryObject.keys;if(c&&""!==c){var e=RAMP.configServiceURL+"docs/"+$("html").attr("lang")+"/"+c,g=d.get(e,{jsonp:"callback",timeout:2e3});g.then(function(b){f.forEach(b,function(b){B.mergeRecursive(a,b)}),E(a)},function(a){})}else E(a)}else E(a)},function(a){})});