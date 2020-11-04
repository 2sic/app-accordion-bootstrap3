$(function() {
  var navHeight = $('header').height();
	// attach click to all accordions when loading
	$('.co-accordion-title').click(function(e){
		e.preventDefault();

    // add hash to url
		location.hash = $(this).data('hash');

    $(this).toggleClass('active').next('.co-accordion-content').slideToggle('normal');
	});

	// get hash from url and open specific item
	if(window.location.hash){
    var hash = window.location.hash.replace('#', '');
    var targetHashElem = $(`#hash-${hash}`);
		
		if(targetHashElem.length > 0){
      targetHashElem.click();
      $('html, body').animate({
        scrollTop: targetHashElem.offset().top - navHeight 
      }, 500, function() {
				targetHashElem.addClass('active').next('.co-accordion-content').slideDown('normal')
			}); 
		}
	}
});
