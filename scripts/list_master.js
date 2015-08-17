
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

        $(".people_profile").css('width', 430);
        $(".people_profile div").css('width', "65%");
        
    }  else {
        $(".people_profile").css('width', 480);
        $(".people_profile div").css('width', "70%");
    }

};
