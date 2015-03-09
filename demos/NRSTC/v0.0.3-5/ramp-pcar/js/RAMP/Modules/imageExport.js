/*! ramp-pcar 09-03-2015 16:15:00 : v. 5.1.0-3 
 * 
 * RAMP GIS viewer - Elk; Sample of an implementation of RAMP 
 **/
define(["dojo/topic","dojo/_base/array","dojo/Deferred","esri/tasks/PrintTemplate","esri/tasks/PrintParameters","esri/tasks/PrintTask","ramp/eventManager","ramp/map"],function(a,b,c,d,e,f,g,h){"use strict";function i(){var a,b,g,i,j,k=new c;try{a=h.getMap(),b=new f(RAMP.config.exportMapUrl),b.on("complete",function(a){k.resolve(a)}),b.on("error",function(a){k.reject(a)}),j=$("#mainMap_root")[0],i=new d,i.exportOptions={width:j.clientWidth,height:j.clientHeight,dpi:96},i.format="JPG",i.layout="MAP_ONLY",i.showAttribution=!1,g=new e,g.map=a,g.template=i,b.execute(g)}catch(l){k.reject(l)}return{promise:k.promise,exportOptions:i.exportOptions}}var j=function(){function a(){var a=new TimelineLite,b=i(),l=b.exportOptions,m=Math.min(j.width()-350,l.width),n=Math.ceil(l.height/l.width*m);h&&h.cancel(),h=b.promise,a.call(function(){g.attr({disabled:!0,href:""})}).set(f,{display:"none"}).set(e,{display:"inline-block"}).set(d,{display:"none"}).call(function(){d.attr("src","")}).set(c,{clearProps:"all"}),h.then(function(b){a.call(function(){g.attr({disabled:!1,href:b.result.url})}).set(e,{display:"none"}).set(d,{display:"block"}).call(function(){d.attr("src",b.result.url)}).to(c,k,{height:n+2,width:m+2,ease:"easeOutCirc"})},function(b){a.set(e,{display:"none"}).set(f,{display:"inline-block",width:c.width()})})}var b,c,d,e,f,g,h,j,k=.4;return{init:function(){j=$(window),b=$("#map-export-toggle"),c=$(".map-export-stretcher"),d=$(".map-export-image > img"),e=c.find(".sk-spinner"),f=c.find(".map-export-notice"),g=$(".map-export-controls .download-buttons > .btn"),b.attr("disabled",!1).on("click",a)}}}();return{submitServiceImageRequest:i,init:j.init}});