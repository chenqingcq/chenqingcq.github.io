/**
 * Created by Administrator on 2016/8/25 0025.
 */
$(function () {
    $(".ckys_tabs li").each(function(index){
        $(this).hover(function(){
            $(".ckys_tabs li").removeClass("active");
            $(this).addClass("active");

            $(".ckys_detail").removeClass("show");
            $(".ckys_detail").eq(index).addClass("show");
        })
    })

    $(".jstj_content ul li").each(function(index){
        $(this).hover(function(){
            $(".jstj_content ul li").removeClass("picHover");
            $(this).addClass("picHover");

            $(".jstj_intro").removeClass("introShow");
            $(".jstj_intro").eq(index).addClass("introShow");



        })
    })





})



