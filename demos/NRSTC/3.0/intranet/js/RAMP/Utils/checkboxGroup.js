/*! ramp-theme-intranet 13-11-2014 10:16:34 : v. 3.0.1 
 * 
 * RAMP GIS viewer - Canada Goose; Sample of an implementation of RAMP with Intranet Theme 
 **/
define(["dojo/Evented","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","utils/checkbox"],function(a,b,c,d,e){"use strict";return b([a],{constructor:function(a,b){var d,f,g=this;c.mixin(this,{nodes:[],nodeIdAttr:"id",checkboxes:[],cssClass:{active:"active",focus:"focused",check:"checked"},label:{check:"checked",uncheck:"unchecked"},onChange:function(){},master:{node:null,checkbox:null,nodeIdAttr:null,cssClass:{active:"active",focus:"focused",check:"checked"},label:{check:"checked",uncheck:"unchecked"},onChange:function(){}},event:{MEMBER_TOGGLE:"checkbox/member-toggle",MASTER_TOGGLE:"checkbox/master-toggle"}},b,{nodes:a}),f={nodeIdAttr:this.nodeIdAttr,cssClass:this.cssClass,label:this.label,onChange:this.onChange},this.nodes.each(function(a,b){b=$(b),d=new e(b,f),g.checkboxes.push(d),d.on(d.event.TOGGLE,function(a){g.emit(g.event.MEMBER_TOGGLE,a),a.agency===a.checkbox.agency.USER&&g._checkMaster()})}),this.master.node?(this.master.checkbox=new e(this.master.node,c.mixin(f,this.master)),this.master.checkbox.on(d.event.TOGGLE,function(a){g.emit(g.event.MASTER_TOGGLE,a),a.agency===a.checkbox.agency.USER&&g.setState(a.checkbox.state)})):this.master=null},_checkMaster:function(){var a=d.every(this.checkboxes,function(a){return a.state});this.master&&this.master.checkbox.setState(a)},setState:function(a,b){var c,d=this.master.checkbox?this.master.checkbox.id:void 0;if(b&&d!==b){for(var e=0;e<this.checkboxes.length&&(c=this.checkboxes[e],c.id!==b);e++);c.setState(a),this._checkMaster()}else this.master.checkbox.setState(a),this.checkboxes.forEach(function(b){b.setState(a)});return this},setEachState:function(a){return this.checkboxes.forEach(function(b){b.setState(a(b))}),this._checkMaster(),this}})});