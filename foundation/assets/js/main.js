$(document).ready(function() {
    new WOW().init();
    var width = $(window).width(),
        height = $(window).height(),
        iScrollPos = 0;
    $('body, header').append('<div class="bodyTouchBlock"></div>');
    $('.hamburger').click(function() {
        $('nav ul.main').fadeToggle();
        $('.bodyTouchBlock, body').toggleClass('menu-opened');
    });
    $('.bodyTouchBlock').click(function() {
        $('nav ul.main').fadeToggle();
        $('.bodyTouchBlock, body').toggleClass('menu-opened');
    });
    $('a.page-scroll[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 105)
                }, 1000);
                return false;
            }
        }
    });
    $('#top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    function tabTotalWidth() {
        $('.tab-nav-donate .tab-nav').each(function() {
            var length = $(this).children().length,
                totalWidth = 0;
            for (var i = 0; i < length; i++) {
                var width = $(this).children().eq(i).outerWidth() + 1;
                console.log(width);
                totalWidth += width;
            }
            totalWidth = totalWidth + (10 * (length - 1));
            $(this).width(totalWidth);
        })
        $('.month-list').each(function() {
            var length = $(this).children().length,
                totalWidth = 0;
            console.log(length);
            for (var i = 0; i < length; i++) {
                var width = $(this).children().eq(i).outerWidth() + 1;
                console.log(width);
                totalWidth += width;
            }
            totalWidth = totalWidth + (15 * length);
            $(this).width(totalWidth);
        })
    }

    function rwdlink(width) {
        $('.rwd-link').each(function() {
            var desktopLink = $(this).data('desktop'),
                mobileLink = $(this).data('mobile');
            if (width >= 768) {
                $(this).attr('href', desktopLink);
            } else {
                $(this).attr('href', mobileLink);
            }
        })
    }
    rwdlink(width);
    if (width >= 1024) {
        $('.volunteer-title').each(function() {
            var length = $(this).text().length;
            if (length > 10) {
                $(this).siblings('.volunteer-text').addClass('text-spec')
            }
        })
    }
    $('.more-status').click(function() {
        var showText = '顯示更多 +',
            hideText = '收起內容 -',
            clicks = $('.more-status').data('clicks');
        if (clicks) {
            $('.hide-status').removeClass('show');
            $('.more-status').text(showText);
        } else {
            $('.hide-status').addClass('show');
            $('.more-status').text(hideText);
        }
        $('.more-status').data("clicks", !clicks);
    });
    $('.slider-fade').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 2500,
        infinite: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $('.slider-dot').slick({
        dots: true,
        infinite: false,
        arrows: false,
        speed: 500,
        fade: false,
        cssEase: 'linear'
    });
    $('.slider-arrow').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        fade: false,
        cssEase: 'linear',
        prevArrow: "<button type='button' class='slick-navi slick-prev'><i class='icon icon-chevron-left'></i></button>",
        nextArrow: "<button type='button' class='slick-navi slick-next'><i class='icon icon-chevron-right'></i></button>"
    });
    $(window).load(function() {
        var opHeight = $('.opening').outerHeight();
        $('.opening-bg').height(opHeight);
    })
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        // 往上滾動出現<nav>
        if ((scroll < iScrollPos) && (scroll > height)) {
            $("#top").fadeIn();
        } else {
            $("#top").fadeOut();
        }
        iScrollPos = scroll;
    })
    $(window).resize(function() {
        var width = $(window).width();
        rwdlink(width);
    })
});