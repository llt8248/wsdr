
$(function(){
    size();
});

/*页面宽度改变达人推荐位置*/
$(window).resize(function(){
    size();
});


function size(){
    var _width = $(window).width();

    if(_width < 1100){

        $(".master_right").css('width', 724);
        $(".master_data").css('width', 684);
        $(".master_bg").css('width', 684);
        $(".master_bg span").css('width', 664);
        $(".popular_item").css('margin-left', 6);
    }  else {
        $(".master_right").css('width', 820);
        $(".master_data").css('width', 750);
        $(".master_bg").css('width', 750);
        $(".master_bg span").css('width', 720);
        $(".popular_item").css('margin-left', 35);
    }

};
