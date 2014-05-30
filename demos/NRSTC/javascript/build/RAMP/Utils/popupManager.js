/*! ramp-gis-viewer 23-05-2014 */
define(["dojo/Deferred","dojo/_base/lang","utils/util"],function(a,b,c){"use strict";function d(a){var b=Object.create(f,{_attr:{value:a}});return b._spawnPopups().forEach(function(a){a.useAria&&(a.handle.attr("aria-haspopup",!0),a.setTargetAttr()),a.target.find(".button-close").on("click",function(){a.close()})}),b}var e={handle:null,handleSelector:null,target:null,targetSelector:null,openHandler:null,closeHandler:null,timeout:0,activeClass:null,setClassBefore:!1,useAria:!0},f={_attr:null,_getActualHandle:function(a){var b;return a?b=$(a):this._attr.handle&&(b=this._attr.handleSelector?this._attr.handle.find(this._attr.handleSelector):this._attr.handle),b},_spawnPopups:function(a){var c,d=[],e=this._getActualHandle(a);return e.each(b.hitch(this,function(a,f){f=$(f),c=this._attr.target?this._attr.targetSelector?this._attr.target.find(this._attr.targetSelector):this._attr.target:this._attr.targetSelector?f.find(this._attr.targetSelector):f,d.push(b.mixin(Object.create(g),{openHandler:this._attr.openHandler,closeHandler:this._attr.closeHandler||this._attr.openHandler,activeClass:this._attr.activeClass,setClassBefore:this._attr.setClassBefore,useAria:this._attr.useAria,handle:e,target:c}))})),d},isOpen:function(a){var b=!0;return this._spawnPopups(a).forEach(function(a){a.isOpen()||(b=!1)}),b},open:function(a){this._spawnPopups(a).forEach(function(a){a.open()})},close:function(a){this._spawnPopups(a).forEach(function(a){a.close()})},toggle:function(a){this._spawnPopups(a).forEach(function(a){a.toggle()})},setTargetAttr:function(a){this._spawnPopups().forEach(function(b){b.setTargetAttr(a)})}},g={_isAnimating:!1,openHandler:null,closeHandler:null,activeClass:null,setClassBefore:null,useAria:null,handle:null,target:null,isOpen:function(){return this.handle.hasClass(this.activeClass)},open:function(){this._performAction(this.openHandler,function(){this.handle.addClass(this.activeClass)},function(){this.setTargetAttr(!0)})},close:function(){this._performAction(this.closeHandler,function(){this.handle.removeClass(this.activeClass)},function(){this.setTargetAttr(!1)})},toggle:function(){this.isOpen()?this.close():this.open()},_performAction:function(c,d,e){if($.isFunction(c)&&!this._isAnimating){var f=new a;f.then(b.hitch(this,function(){this._isAnimating=!1,this.setCssBefore||d.call(this),e.call(this)})),this._isAnimating=!0,this.setClassBefore&&d.call(this),c.call(this,f)}},setTargetAttr:function(a){a!==!0&&a!==!1&&(a=this.isOpen()),this.useAria&&this.target.attr({"aria-expanded":a,"aria-hidden":!a})}};return{registerPopup:function(a,f,g,h){var i,j;return f=f.split(",").map(function(a){return a.trim()}),j=b.mixin(Object.create(e),h,{handle:a,openHandler:g}),i=d(j),f.forEach(function(b){switch(b){case"hoverIntent":var d,e=function(a){window.clearTimeout(d),i.open(a.currentTarget)},g=function(a){var b=a?a.currentTarget:null;i.close(b)};c.executeOnLoad($(document),"hoverIntent",function(){i._attr.handle.hoverIntent({over:e,out:g,selector:i._attr.handleSelector,timeout:i._attr.timeout}).on("click focusin",i._attr.handleSelector,e).on("focusout",i._attr.handleSelector,function(){d=window.setTimeout(g,i._attr.timeout)})});break;case"hover":i._attr.handle.on("mouseenter",i._attr.handleSelector,function(a){i.open(a.currentTarget)}).on("mouseleave",i._attr.handleSelector,function(a){i.close(a.currentTarget)});break;case"focus":i._attr.handle.on("focusin",i._attr.handleSelector,function(a){i.open(a.currentTarget)}).on("focusout",i._attr.handleSelector,function(a){i.close(a.currentTarget)});break;default:a.on(b,i._attr.handleSelector,function(){i.toggle(f.currentTarget)})}}),i}}});