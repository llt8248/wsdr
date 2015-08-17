
$(function(){
	$(".plan>div").eq(0).addClass('plan_1');
	$(".plan>div").eq(1).addClass('plan_2');
	$(".plan>div").eq(2).addClass('plan_2');
	$(".plan>div").click(function(event) {
		$(".plan .plan_1").removeClass().addClass('plan_2');
		$(this).removeClass().addClass('plan_1');

	});
});
