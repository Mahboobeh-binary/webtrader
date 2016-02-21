define(["jquery","jquery-ui","color-picker","ddslick"],function(a){function b(){a(this).dialog("close"),a(this).find("*").removeClass("ui-state-error")}function c(c,d){require(["css!charts/indicators/chop/chop.css"]);var e=function(a,b,c,d){this.level=a,this.stroke=b,this.strokeWidth=c,this.dashStyle=d},f=[new e(30,"red",1,"Dash"),new e(70,"red",1,"Dash")];require(["text!charts/indicators/chop/chop.html"],function(e){var g="#cd0a0a",h="rgba(178, 191, 217, 0.20)";e=a(e),e.appendTo("body"),e.find("input[type='button']").button(),e.find("#chop_stroke").colorpicker({part:{map:{size:128},bar:{size:128}},select:function(b,c){a("#chop_stroke").css({background:"#"+c.formatted}).val(""),g="#"+c.formatted},ok:function(b,c){a("#chop_stroke").css({background:"#"+c.formatted}).val(""),g="#"+c.formatted}}),e.find("#chop_plot_color").colorpicker({alpha:!0,colorFormat:"RGBA",part:{map:{size:128},bar:{size:128}},select:function(b,c){a("#chop_plot_color").css({background:"#"+c.formatted}).val(""),h=c.formatted},ok:function(b,c){a("#chop_plot_color").css({background:"#"+c.formatted}).val(""),h=c.formatted}});var i="Solid";a("#chop_dashStyle").ddslick({imagePosition:"left",width:118,background:"white",onSelected:function(b){a("#chop_dashStyle .dd-selected-image").css("max-width","85px"),i=b.selectedData.value}}),a("#chop_dashStyle .dd-option-image").css("max-width","85px");var j=e.find("#chop_levels").DataTable({paging:!1,scrollY:100,autoWidth:!0,searching:!1,info:!1,columnDefs:[{className:"dt-center",targets:[0,1,2,3]}],aoColumnDefs:[{bSortable:!1,aTargets:[1,3]}]});a.each(f,function(b,c){a(j.row.add([c.level,'<div style="background-color: '+c.stroke+';width:100%;height:20px;"></div>',c.strokeWidth,'<div style="width:50px;overflow:hidden;"><img src="images/dashstyle/'+c.dashStyle+'.svg" /></div>']).draw().node()).data("level",c).on("click",function(){a(this).toggleClass("selected")})}),e.find("#chop_level_delete").click(function(){j.rows(".selected").indexes().length<=0?require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Select levels to delete!"})}):j.rows(".selected").remove().draw()}),e.find("#chop_level_add").click(function(){require(["charts/indicators/level/level"],function(b){b.open(c,function(b){a.each(b,function(b,c){a(j.row.add([c.level,'<div style="background-color: '+c.stroke+';width:100%;height:20px;"></div>',c.strokeWidth,'<div style="width:50px;overflow:hidden;"><img src="images/dashstyle/'+c.dashStyle+'.svg" /></div>']).draw().node()).data("level",c).on("click",function(){a(this).toggleClass("selected")})})})})}),e.dialog({autoOpen:!1,resizable:!1,width:350,modal:!0,my:"center",at:"center",of:window,dialogClass:"chop-ui-dialog",buttons:[{text:"OK",click:function(){var c=!0;if(a(".chop_input_width_for_period").each(function(){if(!_.inRange(a(this).val(),parseInt(a(this).attr("min")),parseInt(a(this).attr("max")))){var b=a(this);return require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+b.attr("min")+" to "+b.attr("max")+" is allowed for "+b.closest("tr").find("td:first").text()+"!"})}),void(c=!1)}}),c){var d,f,k=[],l=[];a.each(j.rows().nodes(),function(){var b=a(this).data("level");b&&(k.push({color:b.stroke,dashStyle:b.dashStyle,width:b.strokeWidth,value:b.level,label:{text:b.level}}),f=f?Math.max(b.level,f):b.level,d=d?Math.min(b.level,d):b.level)}),f&&d&&l.push({color:h,from:d,to:f});var m={period:parseInt(e.find("#chop_period").val()),atrPeriod:parseInt(e.find("#chop_atr_period").val()),stroke:g,strokeWidth:parseInt(e.find("#chop_strokeWidth").val()),dashStyle:i,appliedTo:parseInt(e.find("#chop_appliedTo").val()),levels:k,plotBands:l};a(a(".chop").data("refererChartID")).highcharts().series[0].addIndicator("chop",m),b.call(e)}}},{text:"Cancel",click:function(){b.call(this)}}]}),e.find("select").selectmenu({width:120}),"function"==typeof d&&d(c)})}return{open:function(b){return 0==a(".chop").length?void c(b,this.open):void a(".chop").data("refererChartID",b).dialog("open")}}});