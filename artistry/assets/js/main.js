$(function () {
	var width = $(window).width(),
		height = $(window).height();
	new WOW().init();
	if (width < 1024) {
		$(".hamburger").on("click", function () {
			$(this).toggleClass("active");
			$("nav").animate({ width: "toggle" }, 500);
		});
		$("nav ul li a").on("click", function () {
			$('.hamburger').toggleClass("active");
			$("nav").animate({ width: "toggle" }, 500);
		});
	}
	$('a.smooth-scroll[href*="#"]:not([href="#"])').on("click", function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - (height / 10))
				}, 1000);
				return false;
			}
		}
	});
	$('.force-more').click(function(){
		$(this).toggleClass('opened')
		$(this).parent().siblings('p').slideToggle(300);
		$(this).parent().parent('.col-md-4').siblings('.col-md-4').children('.col-title').children('.force-more').removeClass('opened');
		$(this).parent().parent('.col-md-4').siblings('.col-md-4').children('p').slideUp();
	})
	$('.product-more').click(function(){
		$(this).toggleClass('opened')
		$(this).parent().siblings('p').slideToggle(300);
		$(this).parent().parent('.product-center').siblings('.product-bottom').slideToggle(300);
		$(this).parent().parent().parent().parent().siblings().children('.product-body').children('.product-center').children().children('.product-more').removeClass('opened')
		$(this).parent().parent().parent().parent().siblings().children('.product-body').children('.product-center').children('p').slideUp();
		$(this).parent().parent().parent().parent().siblings().children('.product-body').children('.product-bottom').slideUp();
	})
	$(window).resize(function () {});
	$(window).scroll(function () {
		var scroll = $(this).scrollTop(),
			openingHeight = $(".opening").outerHeight();
		if (scroll >= openingHeight / 2) {
			$("a.gotop").fadeIn();
		} else {
			$("a.gotop").fadeOut(100);
		}
	});
});
