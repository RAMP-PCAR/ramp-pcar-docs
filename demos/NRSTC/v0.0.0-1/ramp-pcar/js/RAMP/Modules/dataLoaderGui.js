/*! ramp-pcar 19-03-2015 16:23:33 : v. 5.1.0-3 
 * 
 * RAMP GIS viewer - Elk; Sample of an implementation of RAMP 
 **/
define(["dojo/_base/lang","dojo/Deferred","dojo/text!./templates/filter_manager_template.json","utils/popupManager","ramp/dataLoader","ramp/theme","ramp/map","ramp/layerLoader","ramp/globalStorage","ramp/stepItem","utils/util","utils/tmplHelper","utils/tmplUtil","utils/array","utils/dictionary","utils/bricks"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){"use strict";function q(){I={base:{type:"error",header:"Cannot load",message:"You have IE9?"}},G={id:"sourceTypeStep",content:[{id:"sourceType",type:p.ChoiceBrick,config:{header:i18n.t("addDataset.dataSource"),instructions:i18n.t("addDataset.help.dataSource"),choices:[{key:"serviceTypeStep",value:i18n.t("addDataset.dataSourceService")},{key:"fileTypeStep",value:i18n.t("addDataset.dataSourceFile")}]},on:[{eventName:p.ChoiceBrick.event.CHANGE,callback:H.simpleAdvance}]}],children:[{id:"serviceTypeStep",content:[{id:"serviceURL",type:p.SimpleInputBrick,config:{header:i18n.t("addDataset.serviceLayerURL"),instructions:i18n.t("addDataset.help.serviceURL"),placeholder:i18n.t("addDataset.serviceLayerURLPlaceholder"),freezeStates:[p.Brick.state.SUCCESS]},on:[{eventName:p.SimpleInputBrick.event.CHANGE,callback:H.serviceTypeStepGuess}]},{id:"serviceType",type:p.ChoiceBrick,config:{header:i18n.t("addDataset.serviceType"),instructions:i18n.t("addDataset.help.serviceType"),choices:[{key:"featureServiceAttrStep",value:i18n.t("addDataset.serviceTypeFeature")},{key:"wmsServiceAttrStep",value:i18n.t("addDataset.serviceTypeWMS")}],freezeStates:[p.Brick.state.SUCCESS]}},{id:"serviceTypeOkCancel",type:p.OkCancelButtonBrick,config:{okLabel:i18n.t("addDataset.connect"),okFreezeStates:[p.Brick.state.SUCCESS,p.Brick.state.ERROR],cancelLabel:i18n.t("addDataset.cancel"),reverseOrder:!0,required:[{id:p.OkCancelButtonBrick.okButtonId,type:"all",check:["serviceType","serviceURL"]},{id:p.OkCancelButtonBrick.cancelButtonId,type:"any",check:["serviceType","serviceURL"]}]},on:[{eventName:p.OkCancelButtonBrick.event.OK_CLICK,callback:function(b){var c,d=v(b,100),f=b.getData().bricksData,g=f.serviceType.selectedChoice,h=f.serviceURL.inputValue;switch(g){case"featureServiceAttrStep":c=e.getFeatureLayer(h),c.then(function(c){var g=e.getFeatureLayerLegend(h);g.then(function(e){var g;window.clearTimeout(d),c.legendLookup=e,g=c.fields.map(function(a){return{value:a,text:a}}),g&&0!==g.length?H.simpleAdvance(b,f.serviceType,{stepData:c,bricksData:{primaryAttribute:{options:g}}}):w(b,d,{serviceType:a.mixin(I.base,{message:"Blah-blah"})})},function(c){w(b,d,{serviceType:a.mixin(I.base,{message:"Blah-blah"+c.message})})})},function(c){w(b,d,{serviceURL:a.mixin(I.base,{message:"Blah-blah"+c.message})})});break;case"wmsServiceAttrStep":c=e.getWmsLayerList(h),c.then(function(c){var e;window.clearTimeout(d),e=c.layers.map(function(a){return{value:a.name,text:a.desc}}),e&&0!==e.length?H.simpleAdvance(b,f.serviceType,{stepData:{wmsData:c,wmsUrl:h},bricksData:{layerName:{options:e}}}):w(b,d,{serviceType:a.mixin(I.base,{message:"Blah-blah"})})},function(c){w(b,d,{serviceType:a.mixin(I.base,{message:"Blah-blah"+c.message})})})}}},{eventName:p.OkCancelButtonBrick.event.CANCEL_CLICK,callback:H.simpleCancel}]}],children:[{id:"featureServiceAttrStep",content:[{id:"primaryAttribute",type:p.DropDownBrick,config:{instructions:i18n.t("addDataset.help.featurePrimaryAttribute"),header:i18n.t("addDataset.primaryAttribute")}},{id:"addDataset",type:p.ButtonBrick,config:{label:i18n.t("addDataset.addDatasetButton"),containerClass:"button-brick-container-main",buttonClass:"btn-primary"},on:[{eventName:p.ButtonBrick.event.CLICK,callback:function(a){var b,c=a.getData(),d=c.bricksData,f=c.stepData,j={id:h.nextId(),displayName:f.layerName,nameField:d.primaryAttribute.dropDownValue,datagrid:e.createDatagridConfig(f.fields),symbology:e.createSymbologyConfig(f.renderer,f.legendLookup),url:f.layerUrl,aliasMap:f.aliasMap};j=i.applyFeatureDefaults(j),b=g.makeFeatureLayer(j,!0),RAMP.config.layers.feature.push(j),h.loadLayer(b),J.close()}}]}]},{id:"wmsServiceAttrStep",content:[{id:"layerName",type:p.DropDownBrick,config:{instructions:i18n.t("addDataset.help.wmsLayerName"),header:i18n.t("addDataset.layerName")}},{id:"addDataset",type:p.ButtonBrick,config:{label:i18n.t("addDataset.addDatasetButton"),containerClass:"button-brick-container-main",buttonClass:"btn-primary"},on:[{eventName:p.ButtonBrick.event.CLICK,callback:function(a){var b,c,d,e=a.getData(),f=e.bricksData,j=e.stepData,k=f.layerName.dropDownValue;c=n.find(j.wmsData.layers,function(a){return a.name===k}),b={id:h.nextId(),displayName:c.desc,format:"png",layerName:k,imageUrl:"assets/images/wms.png",url:j.wmsUrl,legendMimeType:"image/jpeg"},c.queryable&&(b.featureInfo={parser:"stringParse",mimeType:"text/plain"}),b=i.applyWMSDefaults(b),d=g.makeWmsLayer(b,!0),RAMP.config.layers.wms.push(b),h.loadLayer(d),J.close()}}]}]}]},{id:"fileTypeStep",content:[{id:"fileOrFileULR",type:p.FileInputBrick,config:{header:i18n.t("addDataset.fileOrURL"),instructions:i18n.t("addDataset.help.fileOrURL"),placeholder:i18n.t("addDataset.fileOrURLPlaceholder"),freezeStates:[p.Brick.state.SUCCESS]},on:[{eventName:p.FileInputBrick.event.CHANGE,callback:H.fileTypeStepGuess}]},{id:"fileType",type:p.ChoiceBrick,config:{instructions:i18n.t("addDataset.help.fileOrURLType"),header:i18n.t("addDataset.fileType"),choices:[{key:"geojsonFileAttrStep",value:i18n.t("addDataset.geojson")},{key:"csvFileAttrStep",value:i18n.t("addDataset.csv")},{key:"shapefileFileAttrStep",value:i18n.t("addDataset.shapefile")}],freezeStates:[p.Brick.state.SUCCESS]}},{id:"fileTypeOkCancel",type:p.OkCancelButtonBrick,config:{okLabel:i18n.t("addDataset.load"),okFreezeStates:[p.Brick.state.SUCCESS,p.Brick.state.ERROR],cancelLabel:i18n.t("addDataset.cancel"),reverseOrder:!0,required:[{id:p.OkCancelButtonBrick.okButtonId,type:"all",check:["fileType","fileOrFileULR"]},{id:p.OkCancelButtonBrick.cancelButtonId,type:"any",check:["fileType","fileOrFileULR"]}]},on:[{eventName:p.OkCancelButtonBrick.event.OK_CLICK,callback:function(b){var c,d=v(b,100),f=b.getData().bricksData,g=f.fileType.selectedChoice,h=f.fileOrFileULR.fileValue,i=f.fileOrFileULR.inputValue,j=f.fileOrFileULR.fileName;c=e.loadDataSet({url:h?null:i,file:h,type:"shapefileFileAttrStep"===g?"binary":"text"}),c.then(function(c){switch(g){case"geojsonFileAttrStep":var h=e.buildGeoJson(c);h.then(function(c){var e;window.clearTimeout(d),e=c.fields.map(function(a){return{value:a.name,text:a.name}}),e&&0!==e.length?H.simpleAdvance(b,f.fileType,{stepData:c,bricksData:{datasetName:{inputValue:j},primaryAttribute:{options:e}}}):w(b,d,{fileType:a.mixin(I.base,{message:"Not a geojson file"})})},function(c){w(b,d,{fileType:a.mixin(I.base,{message:"Cannot build, not a geojson"+c.message})})});break;case"csvFileAttrStep":var i,l,m,n,o=k.detectDelimiter(c);window.clearTimeout(d),i=e.csvPeek(c,o),n=i[0].map(function(a){return{value:a,text:a}}),n&&0!==n.length?!i||i.length<2?w(b,d,{fileType:a.mixin(I.base,{message:"No data in the file; maybe not CSV?"})}):(l=s(i),m=i[0].filter(function(a){return a!==l.lat&&a!==l["long"]})[0]||i[0][0],H.simpleAdvance(b,f.fileType,{stepData:{csvData:c,csvHeaders:i[0],csvDelimeter:o},bricksData:{datasetName:{inputValue:j},primaryAttribute:{options:n,selectedOption:m},latitude:{options:n,selectedOption:l.lat},longitude:{options:n,selectedOption:l["long"]}}})):w(b,d,{fileType:a.mixin(I.base,{message:"Not a geojson file"})});break;case"shapefileFileAttrStep":var p=e.buildShapefile(c);p.then(function(c){var e;window.clearTimeout(d),e=c.fields.map(function(a){return{value:a.name,text:a.name}}),e&&0!==e.length?H.simpleAdvance(b,f.fileType,{stepData:c,bricksData:{datasetName:{inputValue:j},primaryAttribute:{options:e}}}):w(b,d,{fileType:a.mixin(I.base,{message:"Not a shapefile file"})})},function(c){w(b,d,{fileType:a.mixin(I.base,{message:"Cannot build, not a shapefile"+c.message})})})}},function(c){w(b,d,{fileOrFileULR:a.mixin(I.base,{message:"Cannot load file"+c.message})})})}},{eventName:p.OkCancelButtonBrick.event.CANCEL_CLICK,expose:{as:"retreat"},callback:H.simpleCancel}]}],children:[{id:"geojsonFileAttrStep",content:[{id:"datasetName",type:p.SimpleInputBrick,config:{instructions:i18n.t("addDataset.help.geojsonDatasetName"),header:i18n.t("addDataset.datasetName")}},{id:"primaryAttribute",type:p.DropDownBrick,config:{instructions:i18n.t("addDataset.help.geojsonPrimaryAttribute"),header:i18n.t("addDataset.primaryAttribute")}},{id:"color",type:p.ColorPickerBrick,config:{instructions:i18n.t("addDataset.help.geojsonColour"),header:i18n.t("addDataset.colour")}},{id:"addDataset",type:p.ButtonBrick,config:{label:i18n.t("addDataset.addDatasetButton"),containerClass:"button-brick-container-main",buttonClass:"btn-primary"},on:[{eventName:p.ButtonBrick.event.CLICK,callback:function(a){var b=a.getData(),c=b.bricksData,d=b.stepData,f=u("a_d_icon_"+d.renderer._RAMP_rendererType,c.color.hex);e.enhanceFileFeatureLayer(d,{colour:[c.color.rgb_[0],c.color.rgb_[1],c.color.rgb_[2],255],nameField:c.primaryAttribute.dropDownValue,icon:f,datasetName:c.datasetName.inputValue}),h.loadLayer(d),J.close()}}]}]},{id:"csvFileAttrStep",content:[{id:"datasetName",type:p.SimpleInputBrick,config:{instructions:i18n.t("addDataset.help.csvDatasetName"),header:i18n.t("addDataset.datasetName")}},{id:"primaryAttribute",type:p.DropDownBrick,config:{instructions:i18n.t("addDataset.help.csvPrimaryAttribute"),header:i18n.t("addDataset.primaryAttribute")}},{id:"latLongAttribute",type:p.MultiBrick,config:{content:[{id:"latitude",type:p.DropDownBrick,config:{instructions:i18n.t("addDataset.help.csvLatitude"),header:i18n.t("addDataset.latitude")}},{id:"longitude",type:p.DropDownBrick,config:{instructions:i18n.t("addDataset.help.csvLongitude"),header:i18n.t("addDataset.longitude")}}]}},{id:"color",type:p.ColorPickerBrick,config:{instructions:i18n.t("addDataset.help.csvColour"),header:i18n.t("addDataset.colour")}},{id:"addDataset",type:p.ButtonBrick,config:{label:i18n.t("addDataset.addDatasetButton"),containerClass:"button-brick-container-main",buttonClass:"btn-primary"},on:[{eventName:p.ButtonBrick.event.CLICK,callback:function(b){var c,d,f=b.getData(),g=f.bricksData,i=f.stepData,j=i.csvData,k=i.csvHeaders,l=i.csvDelimeter,m=u("a_d_icon_circlePoint",g.color.hex);d=e.buildCsv(j,{latfield:g.latitude.dropDownValue,lonfield:g.longitude.dropDownValue,delimiter:l,fields:k}),d.then(function(a){c=a,e.enhanceFileFeatureLayer(c,{renderer:"circlePoint",colour:[g.color.rgb_[0],g.color.rgb_[1],g.color.rgb_[2],255],nameField:g.primaryAttribute.dropDownValue,icon:m,datasetName:g.datasetName.inputValue,fields:k}),h.loadLayer(c),J.close()},function(){w(b,null,{datasetName:a.mixin(I.base,{message:"Cannot create CSV feature lyer, probably not a valid csv"})})})}}]}]},{id:"shapefileFileAttrStep",content:[{id:"datasetName",type:p.SimpleInputBrick,config:{instructions:i18n.t("addDataset.help.shapefileDatasetName"),header:i18n.t("addDataset.datasetName")}},{id:"primaryAttribute",type:p.DropDownBrick,config:{instructions:i18n.t("addDataset.help.shapefilePrimaryAttribute"),header:i18n.t("addDataset.primaryAttribute")}},{id:"color",type:p.ColorPickerBrick,config:{instructions:i18n.t("addDataset.help.shapefileColour"),header:i18n.t("addDataset.colour")}},{id:"addDataset",type:p.ButtonBrick,config:{label:i18n.t("addDataset.addDatasetButton"),containerClass:"button-brick-container-main",buttonClass:"btn-primary"},on:[{eventName:p.ButtonBrick.event.CLICK,callback:function(a){var b=a.getData(),c=b.bricksData,d=b.stepData,f=u("a_d_icon_"+d.renderer._RAMP_rendererType,c.color.hex);e.enhanceFileFeatureLayer(d,{colour:[c.color.rgb_[0],c.color.rgb_[1],c.color.rgb_[2],255],nameField:c.primaryAttribute.dropDownValue,icon:f,datasetName:c.datasetName.inputValue}),h.loadLayer(d),J.close()}}]}]}]}]}}function r(){t.dfs(G,function(a){a.stepItem=null}),t.dfs(G,function(a,b){var c,d=b?b.level+1:1;a.level=d,c=new j(a),c.on(j.event.CURRENT_STEP_CHANGE,x),c.on(j.event.STATE_CHANGE,y),a.stepItem=c,L[a.id]=c,b&&b.stepItem.addChild(c)}),A.find(".add-dataset-content").empty().append(L.sourceTypeStep.node),L.sourceTypeStep.currentStep(1),f.tooltipster(C)}function s(a){var b,c,d,e,f=new RegExp(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/i),g=new RegExp(/^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/i);return b=a[0].filter(function(b,c){return a.every(function(a,b){return 0===b||f.test(a[c])})}),c=a[0].filter(function(b,c){return a.every(function(a,b){return 0===b||g.test(a[c])})}),b.length>1&&(b=b.filter(function(a){var b=a.toLowerCase();return-1!==b.indexOf("la")||-1!==b.indexOf("y")})),d=b[0]||null,c.length>1&&(n.remove(c,d),c=c.filter(function(a){var b=a.toLowerCase();return-1!==b.indexOf("lo")||-1!==b.indexOf("x")})),e=c[0]||null,{lat:d,"long":e}}function u(a,b){return"data:image/svg+xml;base64,"+k.b64EncodeUnicode(l.template.call(this,a,{colour:b},N))}function v(a,b){return window.setTimeout(function(){a._notifyStateChange(j.state.LOADING)},b)}function w(a,b,c){b&&window.clearTimeout(b),a._notifyStateChange(j.state.ERROR).displayBrickNotices(c)}function x(a){t.dfs(G,function(b){b.stepItem.currentStep(a.level,a.id)})}function y(a,b,c){b&&c&&(a={id:b.id,level:b.level,state:c}),t.dfs(G,function(b){b.stepItem.setState(a.level,a.id,a.state)})}function z(){L.sourceTypeStep.retreat()}var A,B,C,D,E,F,G,H,I,J,K={},L={},M=.5,N=JSON.parse(l.stringifyTemplate(c));return H={simpleAdvance:function(a,b,c){a.advance(b.selectedChoice,c)},simpleCancel:function(a,b){a.isCompleted()?a.retreat():a.clearStep()},serviceTypeStepGuess:function(a,b){var c=b.inputValue,d=a.contentBricks.serviceType,e="";d.isUserSelected()||(c.match(/ArcGIS\/rest\/services/gi)?e="featureServiceAttrStep":c.match(/wms/gi)&&(e="wmsServiceAttrStep"),d.setChoice(e))},fileTypeStepGuess:function(a,b){var c=b.inputValue,d=a.contentBricks.fileType,e="";d.isUserSelected()||d.isUserEntered||(c.endsWith(".csv")?e="csvFileAttrStep":c.endsWith(".json")?e="geojsonFileAttrStep":c.endsWith(".zip")&&(e="shapefileFileAttrStep"),d.setChoice(e))}},{init:function(){var a=new TimelineLite({paused:!0});A=$("#searchMapSectionBody"),B=A.find("#addDatasetToggle"),C=A.find("#add-dataset-section-container"),D=A.find("#layerList"),E=A.find(".layer-checkboxes:first"),F=A.find("#filterGlobalToggles"),q(),r(),a.set(C,{display:"block"}).set(D,{className:"+=scroll"},.01).set(F,{className:"+=scroll"},.01).to(F,M,{top:-60,ease:"easeOutCirc"}).to(D,M,{top:D.height()/3,ease:"easeOutCirc"},0).to(D,M/2,{autoAlpha:0,ease:"easeOutCirc"},M/2).set(E,{display:"none"}),J=d.registerPopup(B,"click",function(b){r(),a.eventCallback("onComplete",function(){C.find(":focusable:first").focus()}).play(),b.resolve()},{closeHandler:function(b){z(),a.eventCallback("onReverseComplete",function(){}).reverse(),b.resolve()},target:C,activeClass:"button-pressed",resetFocusOnClose:!0}),o.forEachEntry(i.DefaultRenderers,function(a){K[a]=i18n.t("presets.defaultRenderers."+a)})}}});