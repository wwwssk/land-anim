$('.points__container').ready(function(){

	$('.points__container').addClass('active');
	$('.point').addClass('active');

});


window.onload = function() {
	var point = document.querySelector(".points__container");
	var line = $(".line");
	var mainAnim = $(".main-anim");
	var mainBody = $(".main-body");
	
	TweenLite.to(point, 0.5, {
		width: "1200px", delay: 1
	});
	
	TweenLite.to(line, 0.5, {
		top: '-20vh', delay: 4
	});
	
	TweenLite.to(mainAnim, 0.5, {
		opacity: '0', delay: 5
	});
	
	TweenLite.to(mainBody, 0.5, {
		opacity: '1', delay: 5.5
	});

}