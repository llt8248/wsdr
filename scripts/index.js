/*轮播*/
$(function(){
    /*设置图片按钮剧中*/
    w = $("#show_but li").length;
    $("#show_but").css('width', 95*w);
    /*隐藏左右按钮*/
    $("#but_left").hide();
    $("#but_right").hide();

    var p = 0;
    $("#frame_bg li").css({"z-index":1,"opacity":0});

    $("#frame_bg li").eq(0).css({"z-index":100,"opacity":1});
    $("#show_but img").eq(0).css({"width":86,"height":46,"margin-top":2});
    $("#show_but li").click(
        function(){
            play($("#show_but li").index(this));
        });

    $("#but_left").click(
        function(){
            p = (p==0)?$("#show_but li").length-1:(p-1);
            play(p);
        });

    $("#but_right").click(
        function(){
            p = (p>$("#show_but li").length-2)?0:(p+1);
            play(p);
        });


    function play(p){
        $("#show_but img").css({"width":90,"height":50,"margin-top":0});
        $("#show_but img").eq(p).css({"width":86,"height":46,"margin-top":2});
        $("#frame_bg li").eq(p).animate({'opacity':1},800).css({'z-index':100}).siblings().animate({'opacity':0},800).css({'z-index':1});
    }
    function autoplay(){
        p = (p>$("#show_but li").length-2)?0:(p+1);
        play(p);
    }
    var auto = setInterval(function(){ autoplay(p)},3000);
    $("#frame_bg").mouseover(function(){clearInterval(auto); });
    $("#frame_bg").mouseout (function(){auto = setInterval(function(){ autoplay(p)},3000);});
    $("#show_but").mouseover(function(){clearInterval(auto);})
    $("#show_but").mouseout (function(){auto = setInterval(function(){ autoplay(p)},3000);});
    $("#but_left").mouseover(function(){clearInterval(auto);})
    $("#but_left").mouseout (function(){auto = setInterval(function(){ autoplay(p)},3000);});
    $("#but_right").mouseover(function(){clearInterval(auto);})
    $("#but_right").mouseout (function(){auto = setInterval(function(){ autoplay(p)},3000);});


    /*隐藏和显示轮播按钮*/
    $(".show_image").mouseover(function(event) {
        $("#but_left").show();
        $("#but_right").show();
    });
    $(".show_image").mouseout(function(event) {
        $("#but_left").hide();
        $("#but_right").hide();
    });
    /*更改品牌故事按钮*/
    $(".video_but_bg").mouseover(function(event) {
        $(".video_but_bg").css('opacity', 0.9);
    });
    $(".video_but_bg").mouseout(function(event) {
        $(".video_but_bg").css('opacity', 0.5);
    });

 size();

})

/*页面宽度改变达人推荐位置*/
$(window).resize(function(){
    size();
});


function size(){
    var _width = $(window).width();

    if(_width < 1270){

        $(".people_profile").eq(0).css({'position':'absolute','top': 0,'left': -20});
        $(".people_profile").eq(1).css({'position':'absolute','top': 160,'left': -20});
        $(".people_profile").eq(2).css({'position':'absolute','top': 0,'left': 20});
        $(".people_profile").eq(3).css({'position':'absolute','top': 160,'left': 20});


    }  else {

        $(".people_profile").eq(0).css({'position':'absolute','top': 0,'left': -100});
        $(".people_profile").eq(1).css({'position':'absolute','top': 160,'left': -60});
        $(".people_profile").eq(2).css({'position':'absolute','top': 0,'left': 100});
        $(".people_profile").eq(3).css({'position':'absolute','top': 160,'left': 60});

    }

};