/*! ramp-pcar 11-02-2015 18:40:06 : v. 5.0.0 
 * 
 * RAMP GIS viewer - Elk; Sample of an implementation of RAMP 
 **/
define(["dojo/_base/lang","ramp/globalStorage","ramp/ramp","utils/tmplUtil"],function(a,b,c,d){"use strict";return{dataBuilder:function(a,b){var c={data:null,config:null,str:null,lyr:null,fn:null},e=Object.create(c);return e.data=a,e.config=RAMP.config,null!=b&&(e.lyr=b),e.fn=d,e},genericDataBuilder:function(a){var b={data:null,config:null,str:null,fn:null},c=Object.create(b);return c.data=a,c.config=RAMP.config,c.fn=d,c},stringifyTemplate:function(a){return a.replace(/`(?:\\.|[^`])*`|'(?:\\.|[^'])*'|"(?:\\.|[^"])*"|\/\*[^]*?\*\/|\/\/.*\n?/g,function(a){return"/"===a.charAt(0)?"":a}).replace(/[\n\r\t]/g,"").replace(/>\s*?</g,"><").replace(/%}\s*?</g,"%}<").replace(/>\s*?{%/g,">{%").replace(/"\s*?</g,'"<').replace(/>\s*?"/g,'>"')}}});