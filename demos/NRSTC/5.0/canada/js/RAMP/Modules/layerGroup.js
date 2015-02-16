/*! ramp-theme-canada 13-02-2015 19:21:21 : v. 5.0.1 
 * 
 * RAMP GIS viewer - Elk; Sample of an implementation of RAMP with Canada.ca Theme 
 **/
define(["dojo/Evented","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/text!./templates/layer_selector_template.json","utils/tmplHelper","utils/array","utils/dictionary","ramp/layerItem"],function(a,b,c,d,e,f,g,h,i){"use strict";return b([a],{constructor:function(a,b){var d=this;c.mixin(this,{node:null,_listNode:null,templates:JSON.parse(f.stringifyTemplate(e)),groupType:"layer_group",layerType:null,layerState:i.state.DEFAULT,layers:[],layerItems:[]},b,{layers:a}),this.node=$(this._template(this.groupType)),this._listNode=this.node.find("ul"),this.layers.forEach(function(a){d.addLayerItem(a)})},addLayerItem:function(a,b){var d,e={stateMatrix:this._constructStateMatrix(a)};return c.mixin(e,{state:this.layerState,type:this.layerType},b),d=new i(a,e),this.layerItems.push(d),this._listNode.prepend(d.node),1===this.layerItems.length&&this.node.show(),d},removeLayerItem:function(a){var b=this.getLayerItem(a);return b.node.remove(),g.remove(this.layerItems,b,function(a){return a.id===b.id}),0===this.layerItems.length&&this.node.hide(),this},_constructStateMatrix:function(a){var b=c.clone(i.stateMatrix);return a.settings.panelEnabled||this._removeStateMatrixPart(b,"controls",i.controls.SETTINGS),(!a.layerExtent||a.isStatic)&&(this._removeStateMatrixPart(b,"toggles",i.toggles.BOX),this._addStateMatrixPart(b,"toggles",i.toggles.PLACEHOLDER)),b},_addStateMatrixPart:function(a,b,c){h.forEachEntry(a,function(a,d){d[b].push(c)})},_removeStateMatrixPart:function(a,b,c){h.forEachEntry(a,function(a,d){g.remove(d[b],c)})},setState:function(a,b,c){var d=this.getLayerItem(a);d&&d.setState(b,c)},getLayerItem:function(a){var b;return b=g.find(this.layerItems,function(b){return b.id===a})},_template:function(a,b){return tmpl.cache={},tmpl.templates=this.templates,b=b||{},tmpl(a,b)}})});