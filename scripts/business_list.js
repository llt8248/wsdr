
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

        $(".brand_list").css('width', 985);
        $(".band_item").css('width', 310);
        
    }  else {
        $(".brand_list").css('width', 1280);
        $(".band_item").css('width', 410);
    }

};
