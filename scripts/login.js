//商家和达人切换
$(function(){
    $('.login_box').hide();
    $("#zz").hide();
    $('.cont_dl').show();
    $('.cont_zc').hide();

    dlc();
    zcc();

    $('.go_zc').click(function(event) {
        $('.cont_dl').hide();
        $('.cont_zc').show();
    });
    $('.go_dl').click(function(event) {
        $('.cont_dl').show();
        $('.cont_zc').hide();
    });

    $(".le_1").click(function(event) {
        $('.cont_dl').hide();
        $('.cont_zc').hide();
        $('.cont_yx').show();
    });

     $(".btn_mail").click(function(event) {
        $('.cont_dl').hide();
        $('.cont_zc').hide();
        $('.cont_yx').hide();
        $('.cont_tishi').show();
    });

});


function dlc(){
    $('.cont_dl .sj').addClass('focus');
    $('.cont_dl .dr').addClass('nofocus');
    $('.cont_dl .sj_dl').show();
    $('.cont_dl .dr_dl').hide();

    $('.cont_dl .sj').click(function(event) {
        $('.cont_dl .sj').removeClass('nofocus').addClass('focus');
        $('.cont_dl .dr').removeClass('focus').addClass('nofocus');
        $('.cont_dl .sj_dl').show();
        $('.cont_dl .dr_dl').hide();
    });
    $('.cont_dl .dr').click(function(event) {
        $('.cont_dl .sj').removeClass('focus').addClass('nofocus');
        $('.cont_dl .dr').removeClass('nofocus').addClass('focus');
        $('.cont_dl .sj_dl').hide();
        $('.cont_dl .dr_dl').show();
    });

};


function zcc(){
    $('.cont_zc .sj').addClass('focus');
    $('.cont_zc .dr').addClass('nofocus');
    $('.cont_zc .sj_dl').show();
    $('.cont_zc .dr_dl').hide();

    $('.cont_zc .sj').click(function(event) {
        $('.cont_zc .sj').removeClass('nofocus').addClass('focus');
        $('.cont_zc .dr').removeClass('focus').addClass('nofocus');
        $('.cont_zc .sj_dl').show();
        $('.cont_zc .dr_dl').hide();
    });
    $('.cont_zc .dr').click(function(event) {
        $('.cont_zc .sj').removeClass('focus').addClass('nofocus');
        $('.cont_zc .dr').removeClass('nofocus').addClass('focus');
        $('.cont_zc .sj_dl').hide();
        $('.cont_zc .dr_dl').show();
    });

};



//登陆
$(function () {
    var screenwidth, screenheight, mytop, getPosLeft, getPosTop
    screenwidth = $(window).width();
    screenheight = $(window).height();
    //获取滚动条距顶部的偏移
    mytop = $(document).scrollTop();
    //计算弹出层的left
    getPosLeft = screenwidth / 2 - 200;
    //计算弹出层的top
    getPosTop = screenheight / 2 - 300;

    //点击链接弹出登录窗口
    $("#goto_dl").click(function () {
        $(".login_box").show();
        $(".login_box").css({ "left": getPosLeft, "top": getPosTop + mytop });

        $('.cont_dl').show();
        $('.cont_zc').hide();
        $('.cont_yx').hide();
        $('.cont_tishi').hide();

        $("#zz").show();
        //获取页面文档的高度
        var docheight = $(document).height();
        //追加一个层，使背景变灰
        $("#zz").css({ "opacity": "0.5", "height": docheight });
        return false;
    });

    //点击链接弹出注册窗口
    $("#goto_zc").click(function () {
        $(".login_box").show();
        $(".login_box").css({ "left": getPosLeft, "top": getPosTop + mytop });

        $('.cont_dl').hide();
        $('.cont_zc').show();
        $('.cont_yx').hide();
        $('.cont_tishi').hide();

        $("#zz").show();
        //获取页面文档的高度
        var docheight = $(document).height();
        //追加一个层，使背景变灰
        $("#zz").css({ "opacity": "0.5", "height": docheight });
        return false;
    });


    //点击关闭按钮
    $("#close_btn").click(function () {
        $(".login_box").hide();
        //删除变灰的层
        $("#zz").hide();
        return false;
    });
});
