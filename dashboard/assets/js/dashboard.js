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
    $('.icon-x').click(function(){
        $(this).parent().hide();
        $(".item-section").show();
        $(".search-input").val("");
    })
    $('.search-send').click(function(){
        let filter = $(this).siblings('.search-input').val(),
            count = 0;
        $(".item-section").each(function () {
            var current = $(this).attr('data-detail');
            if (current.search(new RegExp(filter, "i")) < 0) {
                $(this).hide();
            } else {
                $(this).show();
                count++;
            }
            if(count > 0){
                $('.search-block').addClass('show');
                $('#length').text(count);
            } else {
                $('.search-block').removeClass('show');
            }
        });
    });
    $('.search-input').keypress(function (e) {
        console.log('a');
        if (e.which == 13) {
            let filter = $(this).val(),
                count = 0;
            $(".item-section").each(function () {
                var current = $(this).attr('data-detail');
                if (current.search(new RegExp(filter, "i")) < 0) {
                    $(this).hide();
                } else {
                    $(this).show();
                    count++;
                }
                if(count > 0){
                    $('.search-block').addClass('show');
                    $('#length').text(count);
                } else {
                    $('.search-block').removeClass('show');
                }
            });
            return false;
        }
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
            // if (scroll >= searchTop) {
            //     $('header').addClass('scroll');
            // } else {
            //     $('header').removeClass('scroll');
            // }
            if (scroll >= height) {
                $('#top').fadeIn();
            } else {
                $('#top').fadeOut();
            }
        });
    });
});