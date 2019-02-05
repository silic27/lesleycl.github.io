// $(document).ready(function(){
// 	var pageProgressFunction = setInterval(function(){
// 		var documentHeight = $(document).height();
// 		var scrollFromTop = $(document).scrollTop() + $(window).height();
// 		var pageProgress = Math.round(scrollFromTop / documentHeight * 100);
// 		var pageProgressPercent = pageProgress + '%';
// 		// console.log(pageProgress);
// 		if($(document).scrollTop() != 0) {
// 			$('.page-progress-item').animate({
// 				width: pageProgressPercent
// 			}, 200);
// 		} else {
// 			$('.page-progress-item').css('width', 0);
// 		}
// 	}, 250);
// });
window.onscroll = function() {pageProgressFunction()};

function pageProgressFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}