/*! ramp-pcar 09-03-2015 16:15:00 : v. 5.1.0-3 
 * 
 * RAMP GIS viewer - Elk; Sample of an implementation of RAMP 
 **/
define(["dojo/_base/array","dojo/Deferred","dojo/topic","dojo/text!./templates/filter_manager_template.json","dojo/text!./templates/filter_wms_meta_Template.json","esri/tasks/query","ramp/ramp","ramp/globalStorage","ramp/map","ramp/eventManager","ramp/theme","ramp/layerGroup","ramp/layerItem","utils/tmplHelper","utils/util","utils/dictionary","utils/popupManager","utils/checkbox","utils/checkboxGroup"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){"use strict";function t(a){var b=null;return p.forEachEntry(A,function(c,d){b||(b=d.getLayerItem(a))}),b}function u(a,b,c){var d,e=!1;a instanceof Array||(a=[a]),a.forEach(function(a){d=t(a),d&&d.setState(b,c)&&(w(a),e=!0)}),e&&B.update()}function v(){function a(a){return a=a.map(function(a){return a.ramp?a.ramp.config?a.ramp.config.id:a.id:void 0}).filter(function(a){return a})}var b=i.getVisibleLayers(),c=i.getInvisibleLayers();b=a(b),u(b,m.state.DEFAULT,!0),c=a(c),u(c,m.state.OFF_SCALE,!0)}function w(a){function b(a){return a=a.map(function(a){return a.ramp?a.ramp.config?a.ramp.config.id:a.id:void 0}).filter(function(a){return a})}var c=i.getVisibleLayers(),d=i.getInvisibleLayers();c=b(c),d=b(d),c.contains(a)&&u(a,m.state.DEFAULT,!0),d.contains(a)&&u(d,m.state.OFF_SCALE,!0)}function x(){c.subscribe(j.GUI.TAB_DESELECTED,function(a){"filterManager"===a.tabName&&c.publish(j.GUI.SUBPANEL_CLOSE,{origin:"filterManager"})}),c.subscribe(j.Map.ZOOM_END,function(){v()})}var y,z="layer-id",A={},B=function(){function b(){o.adjustWidthForSrollbar($("#layerList"),[w.globalToggleSection()])}function d(){function a(a){var b=$(a),d=b.parents("legend");if(d.hasClass("selected-row"))c.publish(j.GUI.SUBPANEL_CLOSE,{origin:"filterManager"});else{var f,h=b.data("layer-id"),i=g.getLayerConfigWithId(h);if(c.publish(j.GUI.SUBPANEL_OPEN,{panelName:i18n.t("filterManager.metadata"),title:d.find(".layer-name span").text(),content:null,target:d.find(".layer-details"),origin:"filterManager",guid:h,doOnOpen:function(){d.addClass("selected-row")},doOnHide:function(){b.removeClass("button-pressed"),d.removeClass("selected-row")}}),i.layerInfo)if(i.legend){var k;tmpl.cache={},tmpl.templates=JSON.parse(n.stringifyTemplate(e)),k=tmpl("wms_meta_main",{legendUrl:i.legend.imageUrl,getCapabilitiesUrl:i.url+"&request=GetCapabilities"}),c.publish(j.GUI.SUBPANEL_OPEN,{content:$(k),origin:"filterManager",update:!0,guid:h})}else c.publish(j.GUI.SUBPANEL_OPEN,{content:"<p>"+i18n.t("filterManager.metadataNotFound")+"</p>",origin:"filterManager",update:!0,guid:h});else{var l=function(){c.publish(j.GUI.SUBPANEL_OPEN,{content:"<p>"+i18n.t("filterManager.metadataNotFound")+"</p>",origin:"filterManager",update:!0,guid:h})};f=i.metadataUrl,f?o.transformXML(f,"assets/metadata/xstyle_default_"+RAMP.locale+".xsl",function(a,b){a?l():c.publish(j.GUI.SUBPANEL_OPEN,{content:$(b),origin:"filterManager",update:!0,guid:h})},null,[{key:"catalogue_url",value:i.catalogueUrl}]):l()}}}q.registerPopup(r,"hover, focus",function(a){a.resolve()},{handleSelector:"li.layerList1:not(.list-item-grabbed):not(.ui-sortable-helper)",targetSelector:":tabbable",activeClass:"bg-very-light",useAria:!1}),q.registerPopup(r,"click",function(a){this.target.slideToggle("fast",function(){b(),a.resolve()}),this.target.find(".nstSlider").nstSlider("refresh")},{handleSelector:".settings-button",containerSelector:"li.layerList1",targetSelector:".filter-row-settings",activeClass:"button-pressed"}),q.registerPopup(r,"click",function(a){this.target.slideToggle("fast",function(){b(),a.resolve()})},{handleSelector:".renderer-button",containerSelector:"li.layerList1",targetSelector:".renderer-list",activeClass:"button-pressed"}),q.registerPopup(r,"click",function(b){a(this.target),b.resolve()},{handleSelector:".metadata-button",activeClass:"button-pressed"}),q.registerPopup(r,"click",function(a){var b=$(this.target).data("layer-id");c.publish(j.LayerLoader.RELOAD_LAYER,{layerId:b}),a.resolve()},{handleSelector:".reload-button"}),q.registerPopup(r,"click",function(a){var b=$(this.target).data("layer-id");c.publish(j.LayerLoader.REMOVE_LAYER,{layerId:b}),a.resolve()},{handleSelector:".remove-button"}),q.registerPopup(r,"click",function(a){var b=this.target.data("layer-id");i.zoomToLayerScale(b),a.resolve()},{handleSelector:".button-none.zoom",activeClass:"button-pressed"}),b()}function f(){var a=w.globalToggleSection();u.scroll(function(){var b=u.scrollTop();0===b?a.removeClass("scroll"):a.addClass("scroll")})}var p,r,u,v,w,x,y;return v=function(){function a(){d=u.find(".nstSlider._slider").removeClass("_slider").nstSlider({left_grip_selector:".leftGrip",rounding:.01,highlight:{grip_class:"gripHighlighted",panel_selector:".highlightPanel"},value_changed_callback:function(a,b){var d,e=$(this),f=e.data(z),g=Math.round(100*b)+"%";e.parent().find(".leftLabel").text(g).end().end().nstSlider("highlight_range",0,b),c.publish(j.FilterManager.LAYER_TRANSPARENCY_CHANGED,{layerId:f,value:b}),d=0===b?!1:e.hasClass("disabled")?!0:d,o.isUndefined(d)||o.isUndefined(a)||"refresh"===a||c.publish(j.FilterManager.TOGGLE_LAYER_VISIBILITY,{state:d,layerId:f})}})}function b(){c.subscribe(j.FilterManager.LAYER_VISIBILITY_TOGGLED,function(a){var b,c=u.find(".nstSlider").filter("[data-layer-id='"+a.id+"']");c.length>0&&(c.toggleClass("disabled",!a.state),b=c.nstSlider("get_current_min_value"),0===b&&a.state&&c.nstSlider("set_position",1))})}var d;return{init:function(){a(),b()},update:function(){a()}}}(),w=function(){function a(){e=new s(r.find(".checkbox-custom .box + input"),{nodeIdAttr:z,label:{check:i18n.t("filterManager.hideBounds"),uncheck:i18n.t("filterManager.showBounds")},onChange:function(){k.tooltipster(this.labelNode.parent(),null,"update")},master:{node:d.find(".checkbox-custom .box + input"),nodeIdAttr:"id",label:{check:i18n.t("filterManager.hideAllBounds"),uncheck:i18n.t("filterManager.showAllBounds")}}}),e.on(s.event.MEMBER_TOGGLE,function(a){c.publish(j.FilterManager.BOX_VISIBILITY_TOGGLED,{id:a.checkbox.id,state:a.checkbox.state})}),e.on(s.event.MASTER_TOGGLE,function(a){}),f=new s(r.find(".checkbox-custom .eye + input"),{nodeIdAttr:z,label:{check:i18n.t("filterManager.hideFeatures"),uncheck:i18n.t("filterManager.showFeatures")},onChange:function(){k.tooltipster(this.labelNode.parent(),null,"update")},master:{node:d.find(".checkbox-custom .eye + input"),nodeIdAttr:"id",label:{check:i18n.t("filterManager.hideAllFeatures"),uncheck:i18n.t("filterManager.showAllFeatures")}}}),f.on(s.event.MEMBER_TOGGLE,function(a){c.publish(j.FilterManager.LAYER_VISIBILITY_TOGGLED,{id:a.checkbox.id,state:a.checkbox.state})}),f.on(s.event.MASTER_TOGGLE,function(a){})}function b(){c.subscribe(j.FilterManager.TOGGLE_BOX_VISIBILITY,function(a){e.setState(a.state,a.layerId)}),c.subscribe(j.FilterManager.TOGGLE_LAYER_VISIBILITY,function(a){f.setState(a.state,a.layerId)})}var d,e,f;return{init:function(){d=p.find("#filterGlobalToggles"),k.tooltipster(r),a(),b()},update:function(){k.tooltipster(r),e.addCheckbox(r.find(".checkbox-custom .box + input")),f.addCheckbox(r.find(".checkbox-custom .eye + input"))},globalToggleSection:function(){return d}}}(),x=function(){var b,d,e,f=function(b,d){var e=d.item[0].id,f=u.map(function(a,b){return $(b).find("> li").toArray().reverse()}).map(function(a,b){return b.id}),g=f.filter(function(a,b){return t(b).state!==m.state.ERROR}),h=a.indexOf(g,e);0>h||(c.publish(j.GUI.SUBPANEL_CLOSE,{origin:"rampPopup,datagrid"}),c.publish(j.FilterManager.SELECTION_CHANGED,{id:e,index:h}))},g=function(){u.removeClass("sort-active").removeClass("sort-disabled"),d.removeClass("active")},h=function(a,b){u.has(b.item).addClass("sort-active").end().filter(":not(.sort-active)").addClass("sort-disabled"),b.item.removeClass("bg-very-light"),d.addClass("active")};return{init:function(){},update:function(){d=u.parent().find(".layer-group-separator"),e=u.filter(function(a,b){return $(b).find("> li").length>1}),b&&b.sortable("destroy"),b=e.sortable({axis:"y",handle:".sort-handle",placeholder:"sortable-placeholder",update:f,stop:g,start:h}),o.keyboardSortable(e,{linkLists:!0,onUpdate:f,onStart:h,onStop:g})}}}(),y=function(){return{init:function(){k.tooltipster(r),q.registerPopup(r,"hoverIntent",function(){this.target.attr("title")&&(this.target.isOverflowed()?this.target.tooltipster({theme:".tooltipster-dark"}).tooltipster("show"):this.target.removeAttr("title"))},{handleSelector:".layer-name span, .layer-details span",useAria:!1,timeout:500})}}}(),{init:function(){var a,b,e=this;p=$("#"+RAMP.config.divNames.filter),a=tmpl("filter_manager_template2",{config:RAMP.config}),p.empty().append(a),r=p.find("#layerList"),u=r.find("> li > ul"),h.layerSelectorGroups.forEach(function(a){b=new l([],{layerType:a}),A[a]=b,e.addLayerGroup(b.node)}),w.init(),y.init(),d(),f(),v.init(),c.publish(j.FilterManager.UI_COMPLETE)},update:function(){u=r.find("> li > ul"),v.update(),w.update(),x.update()},addLayerGroup:function(a){r.prepend(a)}}}();return{init:function(){y=RAMP.config,tmpl.cache={},tmpl.templates=JSON.parse(n.stringifyTemplate(d)),B.init(),x(),v()},addLayer:function(a,b,c){var d,e=A[a];e||(e=new l([],{layerType:a,layerState:m.state.LOADING}),A[a]=e,B.addLayerGroup(e.node)),d=e.addLayerItem(b),o.isUndefined(c)||d.setState(c,null,!0),v(),B.update()},removeLayer:function(a,b){var c=A[a];c&&(c.removeLayerItem(b),B.update())},getLayerState:function(a){var b=t(a);return b?b.state:null},setLayerState:function(a,b,c){u(a,b,c)},_getFeatures:function(a){var b=new f;return b.returnGeometry=!1,b.maxAllowableOffset=1e3,b.where=a.objectIdField+">0",a.queryFeatures(b)},_getField:function(c,d){var e=new b;return this._getFeatures(c).then(function(b){e.resolve(a.map(b.features,function(a){return a.attributes[d]}))}),e.promise}}});