var MeuJs = {
	Carousel: {
		init: function(){
			$('.carousel').carousel();
		}
	}	
};

$(document).ready(function(){
	MeuJs.Carousel.init();
});