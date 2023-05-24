/**
 * Created by Administrator on 2016/9/6 0006.
 */
$(function(){

    //手动轮播
    $(".cksb_lunboBtn span").eq(0).addClass("active");
    $(".cksb_lunboBox li").eq(0).show();
    $(".cksb_lunboBtn span").mouseover(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var index=$(this).index();//当前元素的索引值
        //$(".img li").eq(index).show().siblings().hide();
        //解决bug;

        i=index;
        $(".cksb_lunboBox li").eq(index).stop().fadeIn().siblings().stop().fadeOut();//加stop防止淡入淡出的乱
        clearInterval(t);
    })
    $(".cksb_lunboBtn span").mouseleave(function(){
        t=setInterval(move,1500);
    })

    //自动轮播
    var i=0;
    var t=setInterval(move,1500);
    //核心向右的函数
    function move(){
        i++;
        if(i==4){
            i=0;
        }
        $(".cksb_lunboBtn span").eq(i).addClass("active").siblings().removeClass("active");
        $(".cksb_lunboBox li").eq(i).fadeIn().siblings().fadeOut();

    }
    $(".cksb_lunboBox").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,1500);
    })


})