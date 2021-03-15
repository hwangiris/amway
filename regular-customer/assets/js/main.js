$(function () {
	var width = $(window).width(),
		height = $(window).height();

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
