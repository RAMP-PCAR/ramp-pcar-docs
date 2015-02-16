/*! ramp-theme-canada 13-02-2015 19:21:21 : v. 5.0.1 
 * 
 * RAMP GIS viewer - Elk; Sample of an implementation of RAMP with Canada.ca Theme 
 **/
define(["dojo/topic","ramp/ramp","ramp/eventManager","utils/tmplHelper","dojo/text!./templates/feature_hovertip_template.json","dojo/text!./templates/feature_anchortip_template.json"],function(a,b,c,d,e,f){"use strict";function g(){return $(window).width()-m}function h(){var a=0;return null!==s.handle&&null!==s.node&&(a=parseInt(s.node.css("left"),10)+s.node.width()/2-20),a}function i(b,d){d=d||s.graphic||null,b=b||s.handle||null,b&&d&&b.offset().left>g()?(a.publish(c.Map.CENTER_AT,{point:d._extent.getCenter()}),a.publish(c.Maptips.EXTENT_CHANGE,{scroll:!1})):a.publish(c.Maptips.EXTENT_CHANGE,{scroll:!0})}function j(a,c){var e=a.getLayer().sourceLayerId;e||(e=a.getLayer().id);var f,g,h=b.getLayerConfigWithId(e),i="";return tmpl.cache={},c===!0?(i=h.templates.anchor,tmpl.templates=o):(i=h.templates.hover,tmpl.templates=n),f=d.dataBuilder(a,h),g=tmpl(i,f)}function k(b,d,e){var f=j(d,e);null!=f&&(b.tooltipster({offsetX:$(b)[0].getBBox().width/2,content:$(f),interactive:!0,arrow:!0,updateAnimation:Modernizr.csstransitions,autoClose:e!==!0,onlyOne:!0,interactiveTolerance:r,speed:q,theme:e===!0?".tooltipster-noir":".tooltipster-shadow"}),e?(b.tooltipster("show").tooltipster("content",$(f).append('<button class="button-none button-close"><span class="wb-invisible">Close</span></button>')),$(b.tooltipster("elementTooltip")).find(".button-close").on("click",function(){a.publish(c.GUI.SUBPANEL_CLOSE,{origin:"all"})}),s.node=$(b.tooltipster("elementTooltip")),s.handle=b.tooltipster(),s.graphic=d):b.tooltipster("offsetX",$(b)[0].getBBox().width/2).mouseover())}function l(){a.subscribe(c.Maptips.SHOW,function(a){k($(a.target),a.graphic)}),a.subscribe(c.Maptips.SHOW_INTERACTIVE,function(a){i(a.target,a.graphic),k(a.target,a.graphic,!0)}),a.subscribe(c.Maptips.REPOSITION_INTERACTIVE,function(a){if(null!==s.handle&&null!==s.node){var b=a.offset||0;s.handle.tooltipster("offsetX",b).tooltipster("reposition"),window.setTimeout(function(){h()>g()?s.node.hide():s.node.show()},q+10)}}),a.subscribe(c.GUI.SUBPANEL_CHANGE,function(a){a.isComplete&&(a.visible?(m=a.offsetLeft,i()):m=0)})}var m,n=JSON.parse(d.stringifyTemplate(e)),o=JSON.parse(d.stringifyTemplate(f)),p={node:null,handle:null,graphic:null},q=150,r=0,s=Object.create(p);return{init:function(){l()}}});