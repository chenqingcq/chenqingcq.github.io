$(function(){
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失

    $(window).scroll(function(){
        if($(window).scrollTop()<3000){
            $(".yhhd_gd").addClass("slider");
        }else{
            $(".yhhd_gd").removeClass("slider");
        };





    });


});