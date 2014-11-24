/*! ramp-theme-usability 13-11-2014 10:46:00 : v. 3.0.1 
 * 
 * RAMP GIS viewer - Canada Goose; Sample of an implementation of RAMP with Usability Theme 
 **/
define(["dojo/_base/array","dojo/_base/lang","dojo/dom-attr","dojo/query","dojo/topic","dojo/text!./templates/basemap_selector_template.json","ramp/globalStorage","ramp/map","ramp/eventManager","esri/dijit/BasemapGallery","utils/popupManager","utils/tmplHelper","utils/array"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){"use strict";function n(){p.on("selection-change",function(){var a=p.getSelected();x.updateToggleLabel(),e.publish(i.BasemapSelector.BASEMAP_CHANGED,{id:a.id,title:a.title,cssStyle:a.scaleCssClass})})}function o(){e.subscribe(i.BasemapSelector.TOGGLE,function(a){p.select(a.id)})}var p,q,r,s,t,u=[],v="basemapGallery",w="button-pressed",x={init:function(){return r=$("#basemapControls"),s=$("#baseMapToggle"),t=$("#basemapGallery").attr("role","listbox"),a.forEach(q.basemaps,function(a){c.set(d(String.format("#galleryNode_{0} img",a.id))[0],"alt",a.altText)}),tmpl.templates=JSON.parse(l.stringifyTemplate(f)),a.forEach($(".esriBasemapGalleryNode"),function(a,b){$(a).html(tmpl(q.siteTemplate.basemapTemplate,l.dataBuilder(q.basemaps[b])))}),k.registerPopup(r,"hoverIntent",function(a){t.slideDown("fast",function(){a.resolve()})},{activeClass:w,target:t,closeHandler:function(a){t.slideUp("fast",function(){a.resolve()})},timeout:500}),e.publish(i.BasemapSelector.UI_COMPLETE,{title:u[0].title}),this},updateToggleLabel:function(){s.find("span:first").text(p.getSelected().title)}};return{init:function(){q=g.config,a.forEach(q.basemaps,function(a){var b,c;b=new esri.dijit.BasemapLayer({url:a.url}),c=new esri.dijit.Basemap({id:a.id,layers:[b],title:String.format("{0} ({1})",a.name,a.type),thumbnailUrl:a.thumbnail}),c.scaleCssClass=a.scaleCssClass,u.push(c)}),p=new j({showArcGISBasemaps:!1,basemaps:u,map:h.getMap()},v),p.startup();var b=m.find(g.config.basemaps,function(a){return a.showOnInit}).id;p.select(b),$(".esriBasemapGalleryNode").on("mousedown keyup",function(a){if(1===a.which||13===a.which||32===a.which){var b=p.getSelected().id,c=a.currentTarget.id,d=c.slice(c.indexOf("_")+1);if(b===d)return!1;p.select(d)}}),n(),o(),x.init().updateToggleLabel()}}});