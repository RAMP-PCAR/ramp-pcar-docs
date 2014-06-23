/*! ramp-gis-viewer 23-06-2014 */
define(["dojo/_base/array","dojo/_base/lang","dojo/topic","dojo/Deferred","esri/geometry/Extent"],function(a,b,c,d,e){"use strict";return{checkConsole:function(){for(var a,b=function(){},c=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],d=c.length,e=window.console=window.console||{};d--;)a=c[d],e[a]||(e[a]=b)},escapeHtml:function(a){return a.replaceAll("<","&lt;").replaceAll(">","&gt;")},isNumber:function(a){return isFinite(String(a).trim()||0/0)},parseBool:function(a){return"true"===a.toLowerCase()},afterAll:function(b,c){if(0===b.length)return void c();var d=0;a.forEach(b,function(a){a.then(function(){d++,d===b.length&&c()})})},arrayToQuery:function(a){return a.join("+")},queryToArray:function(a){return a.split("+")},subscribe:function(a,d,e){this.isUndefined(e)?c.subscribe(a,d):c.subscribe(a,b.hitch(e,d))},subscribeOnce:function(a,b){var d=null,e=function(a){d.remove(),b(a)};return d=c.subscribe(a,e)},subscribeOnceAny:function(c,d){function e(b){a.forEach(f,function(a){a.remove()}),d(b)}var f=[];a.forEach(c,b.hitch(this,function(a){f.push(this.subscribeOnce(a,e))}))},subscribeAll:function(b,d){var e=[];a.forEach(b,function(b,f){e.push({fired:!1,args:null}),c.subscribe(b,function(){if(!e[f].fired&&(e[f].fired=!0,e[f].args=Array.prototype.slice.call(arguments),a.every(e,function(a){return a.fired}))){var b=[];a.forEach(e,function(a){b.append(a.args)}),d(b)}})})},createLazyVariable:function(a){var b=null;return{reset:function(){b=null},get:function(){return null==b&&(b=a()),b}}},once:function(a){var b=!1;return function(){b||(a(),b=!0)}},isUndefined:function(a){return"undefined"==typeof a},compareGraphics:function(a,b){var c,d,e,f="0",g="1";return a&&b&&$.isFunction(a.getLayer)&&$.isFunction(b.getLayer)&&(d=a.getLayer(),e=b.getLayer(),c=d.objectIdField,f=d.url+a.attributes[c],g=e.url+b.attributes[c]),f===g},styleCheckboxes:function(a,b,c,d){function e(a){var c;a.each(function(a,e){var f,g=$(e);c=g.findInputLabel(),g.is(":checked")?(f=String.format(d.checked,c.data("label-name")),c.addClass(b).prop("title",f).find("> span").text(f)):(f=String.format(d.unchecked,c.data("label-name")),c.removeClass(b).prop("title",f).find("> span").text(f))})}function f(b){a.each(function(){$(this).prop("checked",b($(this)))}),e(a)}var g={setAll:function(a){return f(function(){return a}),this},setState:function(a){return f(a),this},getNodes:function(){return a}};return a.on("change",function(){e($(this))}).on("focus",function(){$(this).findInputLabel().addClass(c)}).on("focusout",function(){$(this).findInputLabel().removeClass(c)}),e(a),Object.create(g)},scrollbarWidth:function(){var a,b,c=jQuery('<div style="width: 100%; height:200px;">test</div>'),d=jQuery('<div style="width:200px;height:150px; position: absolute; top: 0; left: 0; visibility: hidden; overflow:hidden;"></div>').append(c),e=c[0],f=d[0];return jQuery("body").append(f),a=e.offsetWidth,d.css("overflow","scroll"),b=f.clientWidth,d.remove(),a-b},adjustWidthForSrollbar:function(b,c){var d=b.innerHeight()<b[0].scrollHeight?this.scrollbarWidth():0;a.map(c,function(a){a.css({right:d})})},executeOnLoad:function(a,b,c){var e,f=new d;f.then(function(){window.clearInterval(e),c()}),e=window.setInterval(function(){$.isFunction(a[b])&&f.resolve(!0)},500)},executeOnDone:function(a,b,c){function e(){c.cancel()}function f(){h--,0===h&&c.resolve(!0)}var g,h=0,i=[];c=c||new d;for(var j in a)a.hasOwnProperty(j)&&i.push(a[j]);h=i.length,i.forEach(function(a){g=new d(e),g.then(f),b(a,g)}),0===h&&c.resolve(!0)},guid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0,c="x"===a?b:3&b|8;return c.toString(16)})},getWhereClause:function(a,b){return this.isNumber(b)?String.format("{0}={1}",a,b):String.format("Upper({0})=Upper('{1}')",a,b)},stripHtml:function(a){var b=document.createElement("DIV");return $(b).text(a),b.textContent||b.innerText||""},pointToExtent:function(a,b,c){var d=a.extent.getWidth()/a.width,f=c*d;return new e(b.x-f,b.y-f,b.x+f,b.y+f,a.spatialReference)},transformXML:function(a,b,c,e){function f(a){var b;b=window.ActiveXObject?new ActiveXObject("Msxml2.XMLHTTP"):new XMLHttpRequest,b.open("GET",a,!1);try{b.responseType="msxml-document"}catch(c){}return b.send(""),b.responseXML}var g,h,i,j,k=new d,l=new d,m=[k,l];if(this.afterAll(m,function(){j=new XSLTProcessor,j.importStylesheet(h),i=j.transformToFragment(g,document),e||(i=$("body").append(i).children().last().detach()),c(i)}),window.ActiveXObject||window.hasOwnProperty("ActiveXObject")){g=f(a),h=f(b);var n,o=new ActiveXObject("Msxml2.XSLTemplate"),p=new ActiveXObject("Msxml2.DOMDocument"),q=new ActiveXObject("Msxml2.FreeThreadedDOMDocument");p.loadXML(g.xml),q.loadXML(h.xml),o.stylesheet=q,n=o.createProcessor(),n.input=p,n.transform(),c(n.output)}else $.ajax({type:"GET",url:a,dataType:"xml",cache:!1,success:function(a){g=a,k.resolve()}}),$.ajax({type:"GET",url:b,dataType:"xml",cache:!1,success:function(a){h=a,l.resolve()}})}}});