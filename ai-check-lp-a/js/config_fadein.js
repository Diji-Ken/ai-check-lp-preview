/* フェードイン */
function runFadeInCheck() {
	$('.fadein, .fadein_0, .popup').each(function(){
		var elemPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll > elemPos - windowHeight + 50) {
			$(this).addClass('scrollin');
		}
	});
}

// 初回チェック（ページ読み込み直後）
$(document).ready(function() {
	runFadeInCheck(); // ← これが重要
});

// スクロール時チェック
$(window).on('scroll', function() {
	runFadeInCheck();
});