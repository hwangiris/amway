var ClsCookie;
$(function() {
	var width = $(window).width();
	$('.popup-btn').click(function() {
		$('.popup').fadeOut();
		if($("#hidden_next").is(':checked')){
			ClsCookie.put("hide_tag",true,7)
		}
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
	function search(filter,count) {
		$('.search-block').addClass('show');
		var item_count = $(".item-section").length
		var hide_count = 0
		$(".item-section").each(function () {
			var current = $(this).attr('data-detail');
			if (current.search(new RegExp(filter, "i")) < 0) {
				$(this).hide();
				hide_count++
			} else {
				$(this).show();
				count++;
			}
			$('#length').text(count);
			if(count > 0){
				$('#length').text(count);
			}
		});
		if(item_count == hide_count) alert("查無資料")
	}
	$('.search-send').click(function(){
		var filter = $(this).siblings('.search-input').val(),
			count = 0;
		search(filter,count);
	});
	$('.search-input').keypress(function (e) {
		if (e.which == 13) {
			var filter = $(this).val(),
				count = 0;
			search(filter,count);
			return false;
		}
	});
	$(window).load(function() {
		var headerHeight = Math.ceil($('header').outerHeight()),
			searchTop = $('.container-search.mobile').offset().top,
			searchHeight = $('.container-search.mobile').outerHeight(),
			memberFirstTop = $('.item-detail.member').first().offset().top - headerHeight + 34;
		if(width > 1024){
			var distributorFirstTop = $('.item-detail.distributor').first().offset().top - headerHeight - 34;
		} else {
			var distributorFirstTop = $('.item-detail.distributor').first().offset().top - searchTop - searchHeight + 34;
		}
		$('body').css({
			'padding-top': headerHeight,
			'padding-bottom': $('footer').outerHeight()
		});
		setTimeout(function(){
			let headerHeight = Math.ceil($('header').outerHeight());
			$('body').css({
				'padding-top': headerHeight
			});
		}, 500);
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
			if (scroll >= headerHeight) {
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

	//寫入cookies 方法
	ClsCookie={
		"put":function(c_name, value, expiredays=7){
	　　　　var exdate=new Date();
	　　　　exdate.setDate(exdate.getDate() +  expiredays);
	　　　　document.cookie=c_name + "=" +  escape(value) +  ((expiredays==null) ? "" : ";expires="+ exdate.toGMTString());
		},
		"get":function(name){
			var arr,reg=new RegExp("(^| )"+ name +"=([^;]*)(;|$)");
			if(arr=document.cookie.match(reg))
			return (arr[2]);
			else
			return null;
		},
		"delete":function(name){
			var exp = new Date();
			exp.setTime(exp.getTime() - 1);
			var cval=getCookie(name);
			if(cval!=null)
			document.cookie= name +  "=" +cval +";expires="+ exp.toGMTString();
		}
	}
	//檢查是否以勾選過
	hide_tag()
	function hide_tag(){
		var hide_tag =  ClsCookie.get("hide_tag")
		if(hide_tag == "true"){
			$(".popup-container").hide()
			$('.popup').fadeOut();
		}
	}
});
