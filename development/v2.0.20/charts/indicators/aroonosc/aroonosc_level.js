define(["jquery","jquery-ui","color-picker","ddslick"],function(a){function b(){a(this).dialog("close"),a(this).find("*").removeClass("ui-state-error")}function c(c,e){var f=function(a,b,c,d){this.level=a,this.stroke=b,this.strokeWidth=c,this.dashStyle=d};require(["text!charts/indicators/aroonosc/aroonosc_level.html"],function(g){var h="#cd0a0a";g=a(g),g.appendTo("body"),g.find("input[type='button']").button(),g.find("#aroonosc_level_stroke").colorpicker({part:{map:{size:128},bar:{size:128}},select:function(b,c){a("#aroonosc_level_stroke").css({background:"#"+c.formatted}).val(""),h="#"+c.formatted},ok:function(b,c){a("#aroonosc_level_stroke").css({background:"#"+c.formatted}).val(""),h="#"+c.formatted}});var i="Solid";a("#aroonosc_level_dashStyle").ddslick({imagePosition:"left",width:118,background:"white",onSelected:function(b){a("#aroonosc_level_dashStyle .dd-selected-image").css("max-width","85px"),i=b.selectedData.value}}),a("#aroonosc_level_dashStyle .dd-option-image").css("max-width","85px"),g.dialog({autoOpen:!1,resizable:!1,width:280,modal:!0,my:"center",at:"center",of:window,dialogClass:"aroonosc-ui-dialog",buttons:[{text:"OK",click:function(){d&&d([new f(parseFloat(g.find(".aroonosc_level_input_width_for_level").val()),h,parseInt(g.find("#aroonosc_level_strokeWidth").val()),i)]),b.call(g)}},{text:"Cancel",click:function(){b.call(this)}}]}),g.find("select").selectmenu(),a.isFunction(e)&&e(c,d)})}var d=void 0;return{open:function(b,e){return d=e,0==a(".aroonosc_level").length?void c(b,this.open):void a(".aroonosc_level").dialog("open")}}});