/* Activación del slider */
$(document).ready(function() {
	 $('.slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  centerMode: true,
	  variableWidth: true,
	  autoplay: true,
	  autoplaySpeed: 500
	});
	        


});