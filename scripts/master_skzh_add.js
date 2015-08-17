
$(function(){
    $(".bank").show();
    $(".alipay").hide();

    $(".bank_ck").click(function(event) {
    	$(".bank").show();
    	$(".alipay").hide();
    });

	$(".alipay_ck").click(function(event) {
    	$(".bank").hide();
    	$(".alipay").show();
    });
});
