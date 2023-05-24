/**
 * Created by Administrator on 2016/8/25 0025.
 */
$(function () {

    $(".ckys_tabs li").each(function (index) {
        $(this).hover(function () {
            $(".ckys_detail").removeClass("show");
            $(".ckys_detail").eq(index).addClass("show");

            $(".ckys_tabs li").removeClass("active");
            $(this).addClass("active");
        })
    })

    $(".tsjh_zb .zb_bot").each(function(index){
        $(this).hover(function(){
            $(".tsjh_zb .zb_moveBox").removeClass("zb_move");
            $(this).parent(".tsjh_zb .zb_moveBox").addClass("zb_move");
        },function(){
            $(".tsjh_zb .zb_moveBox").removeClass("zb_move");
        })

    })
    $(".tsjh_zb .zb_moveBox").removeClass("zb_move");


    function addclass(e){
        var win_h=$(window).height()*0.5;
        var t=$(e).offset().top;
        var top=$(window).scrollTop();

        if(top>t-win_h){
            $(e).addClass("move_on")
        }
    }
    $(window).scroll(function(){
        addclass(".tsjh_cent")
    })

})



