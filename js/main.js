$(document).ready(function(){

	if (window.matchMedia('(max-width: 900px)').matches)
	{
	     $(".copyright").remove().insertAfter($(".footer_logo"));
	};
	if (window.matchMedia('(max-width: 768px)').matches)
	{
	     $(".left_sidebar").remove().insertAfter($(".content"));
	};
});


