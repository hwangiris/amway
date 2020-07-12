$(function() {
    $('.popup-btn').click(function() {
        $('.popup').fadeOut();
    })
    $('.item-more').click(function() {
        $(this).toggleClass('opened');
        $(this).parent().toggleClass('opened');
    })
    $('#top').click(function() {
        $('html,body').animate({ scrollTop: 0 });
        return false;
    });
    $(window).load(function() {
        $('body').css({
            'padding-top': Math.ceil($('header').outerHeight()),
            'padding-bottom': $('footer').outerHeight()
        });
    });
    $(window).scroll(function() {
        var scroll = $(this).scrollTop(),
            height = $(this).height(),
            searchTop = $('.container-search').offset().top;
        if (scroll >= searchTop) {
            $('header').addClass('scroll');
        } else {
            $('header').removeClass('scroll');
        }
        if (scroll >= height) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    });
});