$(function(){
    //代码初始化
    var size=$(".fwzz_lunbo .fwzz_lunboBox li").size();

    for(var i=1; i<=size; i++){
        /*var li="<li>"+i+"</li>";*/
        var span="<span>"+"</span>";
        $(".fwzz_lunboBtn").append(span);
    }




    //手动控制轮播图
    $(".fwzz_lunbo .fwzz_lunboBox li").eq(0).show();
    $(".fwzz_lunboBtn span").eq(0).addClass("active");
    $(".fwzz_lunboBtn span").mouseover(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var index=$(this).index();
        i=index;
        $(".fwzz_lunbo .fwzz_lunboBox li").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
    })



    //自动轮播
    var i=0;
    var t=setInterval(move,3000);


    //核心向左运动函数
    function moveL(){
        i--;
        if(i==-1){
            i=size-1;
        }

        $(".fwzz_lunboBtn span").eq(i).addClass("active").siblings().removeClass("active");
        $(".fwzz_lunbo .fwzz_lunboBox li").eq(i).fadeIn(300).siblings().fadeOut(300);

    }


    //核心向右运动函数
    function move(){
        i++;
        if(i==size){
            i=0;
        }

        $(".fwzz_lunboBtn span").eq(i).addClass("active").siblings().removeClass("active");
        $(".fwzz_lunbo .fwzz_lunboBox li").eq(i).fadeIn(300).siblings().fadeOut(300);

    }




    //定时器的开始于结束
    $(".fwzz_lunboBtn span").hover(function(){
        clearInterval(t)
    },function(){
        t=setInterval(move,3000);
    })



})