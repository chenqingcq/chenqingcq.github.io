/**
 * Created by Administrator on 2016/9/6 0006.
 */
$(function(){

    //自动轮播
    var i=0;
    var t=setInterval(move,2000);
    //核心向右的函数
    function move(){
        i++;
        if(i==2){
            i=0;
        }
        $(".hyfl_detail li").eq(i).fadeIn().siblings().fadeOut();
        $(".hyfl_detail2 li").eq(i).fadeIn().siblings().fadeOut();
        $(".hyfl_detail3 li").eq(i).fadeIn().siblings().fadeOut();
        $(".hyfl_detail4 li").eq(i).fadeIn().siblings().fadeOut();

    }








})