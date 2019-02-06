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

// window.onscroll = function() {
//   // Shrink/Expand navbar height
//   if ($(document).scrollTop() > $("#content_container").offset()["top"] - 80) {
//       $(".navbar").css({"padding-top": "20px", "padding-bottom": "20px"});
//       $(".navbar_container").css({"box-shadow": "0 0 10px rgba(0, 0, 0, 0.2)", "background-color": "white"});

//       // Making sidenav fixed
//       $(".sidenav").css({
//           "position": "fixed",
//           "top": "80px"
//       });
//   } else {
//       $(".navbar").css({"padding-top": "30px", "padding-bottom": "30px"});
//       $(".navbar_container").css({"box-shadow": "0 0 10px rgba(0, 0, 0, 0)", "background-color": "rgba(250, 250, 250, 0)"});

//       // Making sidenav fixed
//       $(".sidenav").css({
//           "position": "inherit",
//           "top": "auto"
//       });
//   }

//   // Update the width of the progress bar
//   var thanksTop = $(".thanks").offset().top - (window.innerHeight * 0.8) - $("#content_container").offset().top;
//   var progressBarTop = $("#progress_bar").offset().top - $("#content_container").offset().top;
//   var percentage = (progressBarTop / thanksTop) * 100;
//   $("#progress_bar").css("width", percentage + "vw");
// }