$(function() {
	// attach click to all accordions when loading
	$('.co-accordion-title').click(function(e){
		e.preventDefault();
		var _this = $(this);

		$(this).toggleClass('active').next('.co-accordion-content').slideToggle('normal', function(){
			$(window).resize();
		});

		$('html, body').animate({
			scrollTop: _this.offset().top
		}, 500);
	});

	// set hash on click
	$('.co-accordion-title').click(function(e) {
		var hash = $(this).attr('id');
		location.hash = hash;
	});


	// get hash from url and open specific item
	if(window.location.hash){
		var hash = window.location.hash;
		if($(hash).length > 0){
				$(hash).click();

				$('html, body').animate({
					scrollTop: $(hash).offset().top - ($(".role-admin").length > 0 ? 60 : 0)
				}, 800);
		}
	}
});
