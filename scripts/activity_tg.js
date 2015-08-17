
$(function(){
	$(".zx_zf>div").eq(0).addClass('f_1');
	$(".zx_zf>div").eq(1).addClass('f_2');

	$(".zx_zf>div").click(function(event) {
		$(".zx_zf .f_1").removeClass().addClass('f_2');
		$(this).removeClass().addClass('f_1');

	});
});

