/*! ramp-theme-canada 21-11-2014 12:57:38 : v. 4.0.0 
 * 
 * RAMP GIS viewer - Dragonfly; Sample of an implementation of RAMP with Canada.ca Theme 
 **/
define(["dojo/Evented","dojo/_base/declare","dojo/_base/lang"],function(a,b,c){"use strict";return b([a],{constructor:function(a,b){var d=this;c.mixin(this,{node:null,labelNode:null,nodeIdAttr:"id",cssClass:{active:"active",focus:"focused",check:"checked"},label:{check:"checked",uncheck:"unchecked"},onChange:function(){},state:null,id:null,agency:{USER:"USER",CODE:"CODE"},event:{TOGGLE:"checkbox/toggle"}},b,{node:a}),this.node.on("change",function(){d._toggleLabel(),d._emit(d.agency.USER)}).on("focus",function(){d.node.findInputLabel().addClass(d.cssClass.focus)}).on("focusout",function(){d.node.findInputLabel().removeClass(d.cssClass.focus)}),this.id=this.node.data(this.nodeIdAttr)||this.node.attr(this.nodeIdAttr)||this.node.id,this.labelNode=this.node.findInputLabel(),this._toggleLabel()},_toggleLabel:function(){var a;this.state=this.node.is(":checked"),this.state?(a=String.format(this.label.check,this.labelNode.data("label-name")),this.labelNode.addClass(this.cssClass.check).prop("title",a).find("> span").text(a)):(a=String.format(this.label.uncheck,this.labelNode.data("label-name")),this.labelNode.removeClass(this.cssClass.check).prop("title",a).find("> span").text(a)),this.onChange.call(this)},_emit:function(a){this.emit(this.event.TOGGLE,{agency:a,checkbox:this})},setState:function(a){return this.state!==a&&(this.node.prop("checked",a),this._toggleLabel(),this._emit(this.agency.CODE)),this}})});