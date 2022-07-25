( function( d, w, $ ) {
	'use strict';
	$( function() {
	


		function checkBreakPoint() {
			w = $(window).width();
			if (w <= 752) {
				$('.home__bnr_slider.slick-initialized').slick('unslick');
			} else {
				$('.home__bnr_slider').not('.slick-initialized').slick({
					centerMode:true,
					centerPadding: "20%",
					arrows:false,
					slidesToShow:2,
					autoplay:true,
					responsive: [{
						breakpoint: 1200,
						settings: {
							slidesToShow:1,
						}
					}]
				});
			}
		}
		// ウインドウがリサイズする度にチェック
		$(window).resize(function(){
			checkBreakPoint();
		});
		// 初回チェック
		checkBreakPoint();

		$('.home__mv_slider').slick({
			arrows:false,
			slidesToShow:1,
			autoplay:true,
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow:1,
				}
			}]
		});

	


	});
} )( document, window, jQuery );