define(["jquery","datatables","common/util"],function(a){function b(b,c){require(["text!charts/indicators/indicators_add.html"],function(d){d=a(d);var e=d.hide().find("table").DataTable({paging:!1,scrollY:200,info:!1});d.appendTo("body"),a(".indicator_add_dialog").dialog({autoOpen:!1,resizable:!1,modal:!0,my:"center",at:"center",of:window,buttons:[],open:function(){e.rows().nodes().to$().each(function(){try{var b=a(this).data("indicatorData"),c=a(".indicator_add_dialog").data("refererChartID"),d=a(c).highcharts(),e=d.series[0],f=(e.options.type,a(c).data("timePeriod"));b&&b.isTickChartNotAllowed&&isTick(f)?a(this).hide():a(this).show()}catch(g){a(this).show()}})}}),e.clear(),require(["text!charts/indicators/indicators.json"],function(d){a.each(JSON.parse(d),function(b,c){a(e.row.add([c.long_display_name]).draw().node()).data("indicatorData",c).on("click",function(){a(".indicator_add_dialog").dialog("close");var b=a(this).data("indicatorData").id;require(["charts/indicators/"+b+"/"+b],function(b){b.open(a(".indicator_add_dialog").data("refererChartID"))})})}),"function"==typeof c&&c(b)},"text")})}return{openDialog:function(c){return 0==a(".indicator_add_dialog").length?void b(c,this.openDialog):void a(".indicator_add_dialog").data("refererChartID",c).dialog("open")}}});