/*! ramp-pcar 13-02-2015 19:04:10 : v. 5.0.1 
 * 
 * RAMP GIS viewer - Elk; Sample of an implementation of RAMP 
 **/
define(["dojo/_base/lang","utils/util"],function(a,b){"use strict";function c(a){o.clear().fromTo(".sub-panel-container.summary-data-details",j,{top:k.headerHeight+k.toolbarHeight,bottom:k.footerHeight},{top:k.headerHeightCollapsed+k.toolbarHeight,bottom:k.footerHeightCollapsed,ease:"easeOutCirc"},0).fromTo(".sub-panel-container.full-data-details",j,{top:k.headerHeight,bottom:k.footerHeight},{top:k.headerHeightCollapsed,bottom:k.footerHeightCollapsed,ease:"easeOutCirc"},0),m=b.isUndefined(a)?!m:a,m?(TweenLite.to(".full-data-mode .dataTables_scrollBody",j,{height:"+="+l,ease:"easeOutCirc",delay:.02}),n.play()):(TweenLite.to(".full-data-mode .dataTables_scrollBody",j-.02,{height:"-="+l,ease:"easeInCirc"}),d.removeClass("full-screen"),n.reverse())}var d=$("body"),e=$("main"),f=$("footer"),g=$("#wb-sm"),h=$("#wb-bar"),i=$("header"),j=.5,k={headerHeight:155,headerHeightCollapsed:64,footerHeight:30,footerHeightCollapsed:5,subtitleHeight:35,toolbarHeight:32},l=k.headerHeight-k.headerHeightCollapsed+k.footerHeight-k.footerHeightCollapsed,m=!1,n=new TimelineLite({paused:!0}),o=new TimelineLite;return n.to(i,j,{top:-1*h.outerHeight(),position:"relative",ease:"easeOutCirc"},0).set([h,g],{display:"none !important"}).to(e,j,{top:k.headerHeightCollapsed,bottom:k.footerHeightCollapsed,ease:"easeOutCirc"},0).to(f,j,{height:k.footerHeightCollapsed,ease:"easeOutCirc"},0).call(function(){d.addClass("full-screen")}).add(o,0),{fullScreenCallback:function(a,b){return n.eventCallback(a,b),this},isFullScreen:function(){return m},toggleFullScreenMode:function(a){return c(a),this},tooltipster:function(b,c,d,e){var f;switch(b=b||$("body"),c){case"map":break;default:f={theme:"tooltipster-shadow",delay:500}}switch(d){case"update":b.find(".tooltipstered").each(function(a,b){var c=$(b);c.attr("data-tooltip",c.attr("title")).tooltipster("content",c.attr("title")).removeAttr("title")});break;case"destroy":b.find(".tooltipstered").each(function(a,b){var c=$(b);c.tooltipster("destroy")});break;default:b.find(".tooltip, ._tooltip").each(function(b,c){var d=$(c),g=d.attr("title");g?d.attr("data-tooltip",d.attr("title")):d.attr("title",d.data("tooltip")),d.tooltipster(a.mixin({theme:d.data("tooltip-theme")||f.theme,delay:f.delay},e))}).removeAttr("title")}return this}}});