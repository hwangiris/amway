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
        let headerHeight = Math.ceil($('header').outerHeight()),
            searchHeight = $('.container-search.mobile').outerHeight(),
            searchTop = $('.container-search.mobile').offset().top,
            distributorFirstTop = $('.item-detail.distributor').first().offset().top - searchTop - searchHeight + 34,
            memberFirstTop = $('.item-detail.member').first().offset().top - headerHeight + 34;
        $('body').css({
            'padding-top': headerHeight,
            'padding-bottom': $('footer').outerHeight()
        });
        $('.distributor-member .distributor .label').click(function() {
            $('html,body').animate({ scrollTop: distributorFirstTop });
            return false;
        });
        $('.distributor-member .member .label').click(function() {
            $('html,body').animate({ scrollTop: memberFirstTop });
            return false;
        });
        $(window).scroll(function() {
            let scroll = $(this).scrollTop(),
                height = $(this).height();
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
});