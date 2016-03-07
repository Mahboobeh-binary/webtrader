define(["jquery","jquery-ui","color-picker","ddslick"],function(a){function b(){a(this).dialog("close"),a(this).find("*").removeClass("ui-state-error")}function c(c,d){require(["css!charts/indicators/stoch/stoch.css"]);var e=function(a,b,c,d){this.level=a,this.stroke=b,this.strokeWidth=c,this.dashStyle=d},f=[new e(30,"red",1,"Dash"),new e(70,"red",1,"Dash")];require(["text!charts/indicators/stoch/stoch.html"],function(e){e=a(e),e.appendTo("body"),e.find("input[type='button']").button(),e.find("#stoch_k_stroke,#stoch_d_stroke").each(function(){a(this).colorpicker({part:{map:{size:128},bar:{size:128}},select:function(b,c){a(this).css({background:"#"+c.formatted}).val(""),a(this).data("color","#"+c.formatted)},ok:function(b,c){a(this).css({background:"#"+c.formatted}).val(""),a(this).data("color","#"+c.formatted)}})}),a("#stoch_k_stroke").css("background","#1c1010"),a("#stoch_d_stroke").css("background","#cd0a0a");var g="Solid";a("#stoch_dashStyle").ddslick({imagePosition:"left",width:158,background:"white",onSelected:function(b){a("#stoch_dashStyle .dd-selected-image").css("max-width","125px"),g=b.selectedData.value}}),a("#stoch_dashStyle .dd-option-image").css("max-width","125px");var h=e.find("#stoch_levels").DataTable({paging:!1,scrollY:100,autoWidth:!0,searching:!1,info:!1,columnDefs:[{className:"dt-center",targets:[0,1,2,3]}],aoColumnDefs:[{bSortable:!1,aTargets:[1,3]}]});a.each(f,function(b,c){a(h.row.add([c.level,'<div style="background-color: '+c.stroke+';width:100%;height:20px;"></div>',c.strokeWidth,'<div style="width:50px;overflow:hidden;"><img src="images/dashstyle/'+c.dashStyle+'.svg" /></div>']).draw().node()).data("level",c).on("click",function(){a(this).toggleClass("selected")})}),e.find("#stoch_level_delete").click(function(){h.rows(".selected").indexes().length<=0?require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Select level(s) to delete!"})}):h.rows(".selected").remove().draw()}),e.find("#stoch_level_add").click(function(){require(["indicator_levels"],function(b){b.open(c,function(b){a.each(b,function(b,c){a(h.row.add([c.level,'<div style="background-color: '+c.stroke+';width:100%;height:20px;"></div>',c.strokeWidth,'<div style="width:50px;overflow:hidden;"><img src="images/dashstyle/'+c.dashStyle+'.svg" /></div>']).draw().node()).data("level",c).on("click",function(){a(this).toggleClass("selected")})})})})}),e.dialog({autoOpen:!1,resizable:!1,width:450,modal:!0,my:"center",at:"center",of:window,dialogClass:"stoch-ui-dialog",buttons:[{text:"OK",click:function(){var c=!0;if(a(".stoch_input_width_for_period").each(function(){var b=a(this);return _.isInteger(_.toNumber(b.val()))&&_.inRange(b.val(),parseInt(b.attr("min")),parseInt(b.attr("max"))+1)?void 0:(require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+b.attr("min")+" to "+b.attr("max")+" is allowed for "+b.closest("tr").find("td:first").text()+"!"})}),void(c=!1))}),c){var d=[];a.each(h.rows().nodes(),function(){var b=a(this).data("level");b&&d.push({color:b.stroke,dashStyle:b.dashStyle,width:b.strokeWidth,value:b.level,label:{text:b.level}})});var f={fastKPeriod:parseInt(a("#stoch_k_period").val()),fastDPeriod:parseInt(a("#stoch_d_period").val()),fastDMaType:a("#stoch_d_ma_type").val(),stroke:a("#stoch_k_stroke").css("background-color"),dStroke:a("#stoch_d_stroke").css("background-color"),strokeWidth:parseInt(a("#stoch_stroke_width").val()),dashStyle:g,appliedTo:parseInt(a("#stoch_applied_to").val()),levels:d};a(a(".stoch").data("refererChartID")).highcharts().series[0].addIndicator("stoch",f),b.call(e)}}},{text:"Cancel",click:function(){b.call(this)}}]}),e.find("select").selectmenu({width:160}),"function"==typeof d&&d(c)})}return{open:function(b){return 0==a(".stoch").length?void c(b,this.open):void a(".stoch").data("refererChartID",b).dialog("open")}}});