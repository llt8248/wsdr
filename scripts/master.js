
$(function(){
    $(".menu_item a").click(function(event) {
        $("#title").html($(this).html());
        $(".menu_item li").removeClass('page-sel');
        $(this).parent("li").addClass('page-sel');
    });
});



$(function(){
   $('.hd_all').show();
   $('.hd_bmd').hide();
   $('.hd_jxzd').hide();
   $('.hd_yjsd').hide();

   $('.tc_fq').hide();
   $('.tc_ty').hide();
   $('.tc_xw').hide();

   $('.hd_select button').click(function(event) {
   		$('.focus').removeClass().addClass('nofocus');
   		$(this).removeClass().addClass('focus');

   		$('.hd_all').hide();
	   $('.hd_bmd').hide();
	   $('.hd_jxzd').hide();
	   $('.hd_yjsd').hide();

   		$('.syhd> div').eq($(this).index()+1).show();
   });



});



//tuancuang
$(function () {
    var screenwidth, screenheight, mytop, getPosLeft, getPosTop
    screenwidth = $(window).width();
    screenheight = $(window).height();
    //获取滚动条距顶部的偏移
    mytop = $(document).scrollTop();
    //计算弹出层的left
    getPosLeft = screenwidth / 2 - 200;
    //计算弹出层的top
    getPosTop = screenheight / 2 - 150;

      $(".btn_0").click(function () {
        $(".tc_ty").show();
        $(".tc_ty").css({ "left": getPosLeft, "top": getPosTop + mytop});

        $("#zz").show();
        //获取页面文档的高度
        var docheight = $(document).height();
        //追加一个层，使背景变灰
        $("#zz").css({ "opacity": "0.5", "height": docheight });
        return false;
    });

     $(".btn_1").click(function () {
        $(".tc_fq").show();
        $(".tc_fq").css({ "left": getPosLeft, "top": getPosTop + mytop});

        $("#zz").show();
        //获取页面文档的高度
        var docheight = $(document).height();
        //追加一个层，使背景变灰
        $("#zz").css({ "opacity": "0.5", "height": docheight });
        return false;
    });

    $(".btn_2").click(function () {
        $(".tc_xw").show();
        $(".tc_xw").css({ "left": getPosLeft, "top": getPosTop + mytop });

        $("#zz").show();
        //获取页面文档的高度
        var docheight = $(document).height();
        //追加一个层，使背景变灰
        $("#zz").css({ "opacity": "0.5", "height": docheight });
        return false;
    });

    $(".btn_3").click(function () {
        $(".tc_xw").show();
        $(".tc_xw").css({ "left": getPosLeft, "top": getPosTop + mytop });

        $("#zz").show();
        //获取页面文档的高度
        var docheight = $(document).height();
        //追加一个层，使背景变灰
        $("#zz").css({ "opacity": "0.5", "height": docheight });
        return false;
    });

    //点击关闭按钮
    $(".btn_xx").click(function () {
         $('.tc_fq').hide();
         $('.tc_ty').hide();
         $('.tc_xw').hide();
        //删除变灰的层
        $("#zz").hide();
        return false;
    });

     $(".btn_cancel").click(function () {
         $('.tc_fq').hide();
         $('.tc_ty').hide();
         $('.tc_xw').hide();
        //删除变灰的层
        $("#zz").hide();
        return false;
    });
});

