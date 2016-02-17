define(["jquery","jquery-ui","color-picker","ddslick"],function(a){function b(){a(this).dialog("close")}function c(c,d){require(["css!charts/indicators/t3/t3.css"]),require(["text!charts/indicators/t3/t3.html"],function(e){e=a(e),e.appendTo("body"),e.find("#t3_stroke").each(function(){a(this).colorpicker({part:{map:{size:128},bar:{size:128}},select:function(b,c){a(this).css({background:"#"+c.formatted}).val(""),a(this).data("color","#"+c.formatted)},ok:function(b,c){a(this).css({background:"#"+c.formatted}).val(""),a(this).data("color","#"+c.formatted)}})});var f="Solid";a("#t3_dash_style").ddslick({imagePosition:"left",width:158,background:"white",onSelected:function(b){a("#t3_dash_style .dd-selected-image").css("max-width","125px"),f=b.selectedData.value}}),a("#t3_dash_style .dd-option-image").css("max-width","125px"),e.dialog({autoOpen:!1,resizable:!1,width:350,modal:!0,my:"center",at:"center",of:window,dialogClass:"t3-ui-dialog",buttons:[{text:"OK",click:function(){var c=!0;if(a(".t3_input_width_for_period").each(function(){if(!_.inRange(a(this).val(),parseInt(a(this).attr("min")),parseInt(a(this).attr("max")))){var b=a(this);return require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+b.attr("min")+" to "+b.attr("max")+" is allowed for "+b.closest("tr").find("td:first").text()+"!"})}),void(c=!1)}}),c){var d={period:parseInt(a("#t3_period").val()),vFactor:parseFloat(a("#t3_volume_factor").val()),stroke:a("#t3_stroke").css("background-color"),strokeWidth:parseInt(a("#t3_stroke_width").val()),dashStyle:f,appliedTo:parseInt(a("#t3_applied_to").val())};a(a(".t3").data("refererChartID")).highcharts().series[0].addIndicator("t3",d),b.call(e)}}},{text:"Cancel",click:function(){b.call(this)}}]}),e.find("select").selectmenu({width:160}),a.isFunction(d)&&d(c)})}return{open:function(b){return 0===a(".t3").length?void c(b,this.open):void a(".t3").data("refererChartID",b).dialog("open")}}});