

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

    $('.tc_fq').hide();

      $(".btn_fb").click(function () {
        $(".tc_fq").show();
        $(".tc_fq").css({ "left": getPosLeft, "top": getPosTop + mytop});

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
        //删除变灰的层
        $("#zz").hide();
        return false;
    });

     $(".btn_cancel").click(function () {
         $('.tc_fq').hide();
        //删除变灰的层
        $("#zz").hide();
        return false;
    });
});

