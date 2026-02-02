/* FAQアコーディオン */
$(function() {
	$('.accordion dt').click(function(e) {
		$(this).next('dd').slideToggle();
		$(this).toggleClass('close');
	});
});


/* ハンバーガーメニュー */
$(function() {
	$('#btnmenu').click(function(e) {
		$('.head_nav').fadeToggle();
		$('#btnmenu').toggleClass('close');
	});
	$('.head_nav ul li a').click(function(e) {
		if($('#btnmenu').css('display')=="block"){
			$('.head_nav').fadeToggle();
			$('#btnmenu').toggleClass('close');
		}
	});
});

$(window).resize(function() {
	if(navigator.userAgent.indexOf('iPhone')>0 || navigator.userAgent.indexOf('iPad')>0 || navigator.userAgent.indexOf('iPod')>0 || navigator.userAgent.indexOf('Android')>0 || navigator.userAgent.indexOf('Windows Phone')>0)return;
	
	if($('#btnmenu').css('display')=="none"){
		$('header nav').show();
		$('#btnmenu').removeClass('close');
		
	}else{
		$('header nav').hide();
		$('#btnmenu').removeClass('close');
	}
});


/* スムーススクロール */
$(function () {
	$('a[href^="#"]').click(function () {
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var offset = $('header').height()-30;
		var position = target.offset().top - offset;
　　 var speed = 500;
		$("html, body").animate({
			scrollTop: position
		}, speed, "swing");
		return false;
	});
});


/* バナー固定表示 */
$(window).on('load scroll resize',function(){
	var scr_count = $(document).scrollTop();
	var scr_count1 = $('#cont1').offset().top;
	var scr_count2 = $('#contact').offset().top;
	
	if($('#btnmenu').css('display')=='none'){
		if(scr_count > 30){
			$('header').addClass('fixed');
		}else{
			$('header').removeClass('fixed');
		}
	}else{
		if($('.only_sp').css('display')!='block'){
			if(scr_count > 0){
				$('header').addClass('fixed');
			}else{
				$('header').removeClass('fixed');
			}
		}else{
			$('header').removeClass('fixed');
		}
	}
	
	if(scr_count > scr_count1 - 60 && scr_count < scr_count2 - $(window).height()){
		$('#bottom_nav').css('bottom',0);
	}else{
		$('#bottom_nav').css('bottom','-300px');
	}
});
