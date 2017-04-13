/**
 * Unicorn Admin Template
 * Diablo9983 -> diablo9983@gmail.com
**/
$(document).ready(function(){
	
	$('.data-table').dataTable({
		"bJQueryUI": true,
		"sPaginationType": "full_numbers",//分页
		"sDom": '<""fl>t<"F"p>',
		"bFilter": true, //搜索栏
		"bSort": true, //排序功能
		 //"sDom": '<"top"fl<"clear">>rt<"bottom"lp<"clear">>'
	});
	
	$('.data-table-2').dataTable({
		"bJQueryUI": true,
		"sPaginationType": "full_numbers",//分页
		"sDom": '<"">t<"F"p>',
		"bFilter": true, //搜索栏
		"bSort": true, //排序功能
		 //"sDom": '<"top"fl<"clear">>rt<"bottom"lp<"clear">>'
	});
	
	$("#example-3").dataTable({
		"bJQueryUI": true,
		"sPaginationType": "full_numbers",//分页
		"sDom": '<"">t<"F"p>',
		"bFilter": true, //搜索栏=
		"bSort": true, //排序功能
		 //"sDom": '<"top"fl<"clear">>rt<"bottom"lp<"clear">>'
	});

						
	$("span.icon input:checkbox, th input:checkbox").click(function() {
		var checkedStatus = this.checked;
		var checkbox = $(this).parents('.widget-box').find('tr td:first-child input:checkbox');		
		checkbox.each(function() {
			this.checked = checkedStatus;
			if (checkedStatus == this.checked) {
				$(this).closest('.checker > span').removeClass('checked');
			}
			if (this.checked) {
				$(this).closest('.checker > span').addClass('checked');
			}
		});
	});
	
});
