$(document).ready(function(){
	var stt=0;
	$("#shape.backfaces").each(function(){
		if ($(this).is(':visible'))
			stt=$(this).attr("stt");
	});
	#("#next").click(function(){
		next=++stt;
		$("#shape.backfaces").hide();
		$("#shape.backfaces").eq(next).show();
	});
});