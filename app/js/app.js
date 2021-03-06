var app = (function(document, $) {

	'use strict';
	var docElem = document.documentElement,

		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
			_userAgentInit();
		};

	return {
		init: _init
	};

})(document, jQuery);

function resetMenu(){
	'use strict';
	$('#nav-uvod').removeClass('active');
	$('#nav-specialiste').removeClass('active');
	$('#nav-pribehy').removeClass('active');
	$('#nav-akce').removeClass('active');
	$('#nav-objednat').removeClass('active');
}

(function() {

	'use strict';
	app.init();

	var topbarHeight = 60;

	$('#moreButton').click(function() {
    	$('html, body').animate({
        	scrollTop: $('#mainNav').offset().top
    	}, 1500, 'easeInOutExpo');
	});

	$('#nav-uvod').click(function() {
    	$('html, body').animate({
        	scrollTop: $('#uvod').offset().top - topbarHeight
    	}, 1500, 'easeInOutExpo');
	});
	$('#nav-akce').click(function() {
    	$('html, body').animate({
        	scrollTop: $('#akce').offset().top - topbarHeight
    	}, 1500, 'easeInOutExpo');
	});
	$('#nav-specialiste').click(function() {
    	$('html, body').animate({
        	scrollTop: $('#specialiste').offset().top - topbarHeight
    	}, 1500, 'easeInOutExpo');
	});
	$('#nav-pribehy').click(function() {
    	$('html, body').animate({
        	scrollTop: $('#pribehy').offset().top - topbarHeight
    	}, 1500, 'easeInOutExpo');
	});
	$('#nav-objednat').click(function() {
    	$('html, body').animate({
        	scrollTop: $('#objednat').offset().top - topbarHeight
    	}, 1500, 'easeInOutExpo');
	});


	$('#scrollDown').waypoint(function() {
  		resetMenu();
	});

	$('#uvod').waypoint(function() {
		resetMenu();
  		$('#nav-uvod').addClass('active');
	});
	$('#specialiste').waypoint(function() {
		resetMenu();
  		$('#nav-specialiste').addClass('active');
	});
	$('#pribehy').waypoint(function() {
		resetMenu();
  		$('#nav-pribehy').addClass('active');
	});
	$('#akce').waypoint(function() {
		resetMenu();
  		$('#nav-akce').addClass('active');
	});
	$('#objednat').waypoint(function() {
		resetMenu();
  		$('#nav-objednat').addClass('active');
	});
})();