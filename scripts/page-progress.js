$(document).ready(function(){
	var pageProgressFunction = setInterval(function(){
		var documentHeight = $(document).height();
		var scrollFromTop = $(document).scrollTop() + $(window).height();
		var pageProgress = Math.round(scrollFromTop / documentHeight * 100);
		var pageProgressPercent = pageProgress + '%';
		// console.log(pageProgress);
		if($(document).scrollTop() != 0) {
			$('.page-progress-item').animate({
				width: pageProgressPercent
			}, 200);
		} else {
			$('.page-progress-item').css('width', 0);
		}
	}, 250);
});