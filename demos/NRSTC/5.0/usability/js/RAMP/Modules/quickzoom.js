/*! ramp-theme-usability 11-02-2015 19:13:04 : v. 5.0.0 
 * 
 * RAMP GIS viewer - Elk; Sample of an implementation of RAMP with Usability Theme 
 **/
define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/dom","dojo/dom-construct","dijit/form/Form","dijit/form/TextBox","dijit/form/Select","dijit/form/Button","esri/geometry/Extent","esri/tasks/QueryTask","esri/tasks/query","ramp/globalStorage","ramp/map","utils/util"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){"use strict";return a(null,{constructor:function(){function a(a){d.form.domNode.appendChild(a)}function b(b){var d=e.create("label",{"class":c,innerHTML:b});return a(d),d}this.config=RAMP.config,this.form=new f({style:"overflow:hidden; clear:none;"});var c="quickZoom";this.provinceSelect=new h({id:"quickZoomProvince","class":c,options:[]}),this.citySelect=new h({id:"quickZoomCity","class":c,options:[]}),this.postalCodeTextbox=new g({id:"quickZoomPostalCode","class":c,style:"width : 30%"}),this.button=new i({label:"Find",id:"quickZoomButton","class":c});var d=this;b("Choose province:"),a(this.provinceSelect.domNode),b("City:"),a(this.citySelect.domNode),b("or enter postal code (e.g. A1A):"),a(this.postalCodeTextbox.domNode),a(this.button.domNode),this.errorText=b("")},_setError:function(a){$(this.errorText).text(a)},init:function(a){function f(a,b){b.returnGeometry=!0;var c=new k(a);c.execute(b,function(a){if(a.features.isEmpty())return void q._setError("invalid query");var b=a.features[0].geometry.getExtent();n.getMaxExtent().contains(b)?(n.getMap().setExtent(b),q._setError("")):q._setError("beyond max extent")},function(a){})}function g(a,c,d,e){c.removeOption(c.getOptions());var f=new k(a);f.execute(d,function(a){c.addOption(b.map(a.features,e))},function(a){})}function h(a){var b=p.quickzoom.city,c=new l;c.where=o.getWhereClause(b.province,a),c.outFields=[b.name,b.id],g(b.url,m,c,function(a){return{label:a.attributes[b.name],value:a.attributes[b.id],selected:!1}})}function i(a){var b=/[abcdefghijklmnopqrstuvwxyz]\d[abcdefghijklmnopqrstuvwxyz]/i;if(a=c.trim(a)){var d=a.match(b);return d&&1===d.length}return!1}var j=this.provinceSelect,m=this.citySelect,p=this.config,q=this;j.loadDropDown(function(){var a=p.quickzoom.province,b=new l;b.where="OBJECTID>0",b.outFields=[a.shortName,a.name],g(a.url,j,b,function(b){var c=b.attributes[a.shortName];return{label:b.attributes[a.name],value:c,selected:c===a.selectedProv}})}),m.loadDropDown(function(){h(p.quickzoom.province.selectedProv)}),j.on("change",function(){var a=p.quickzoom.province,b=j.get("value"),c=new l;c.where=o.getWhereClause(a.shortName,b),f(a.url,c),h(b)}),m.on("change",function(){var a=p.quickzoom.city,b=m.get("value"),c=new l;c.where=o.getWhereClause(a.id,b),f(a.url,c)}),this.button.on("click",c.hitch(this,function(){var a=this.postalCodeTextbox.get("value");if(i(a)){var b=p.quickzoom.postalCode,c=new l;c.where=o.getWhereClause(b.id,a),f(b.url,c)}else q._setError("invalid postal code")}));var r=d.byId(a);e.place(this.form.domNode,r,"replace")}})});