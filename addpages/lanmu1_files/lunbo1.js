$(function(){

    var ii=0;
    var clone=$(".hmhd_lunbo li").first().clone();
    $(".hmhd_lunbo").append(clone);
    var size=$(".hmhd_lunbo li").size();
    for(var j=0;j<size-1;j++){
        $(".hmhd_circle").append("<li><div></div></li>");
    }
    $(".hmhd_circle li").first().addClass("on");


    /*鼠标划入圆点*/
    $(".hmhd_circle li").hover(function(){
        var index=$(this).index();
        ii=index;
        $(".hmhd_lunbo").stop().animate({left:-index*1210},500)
        $(this).addClass("on").siblings().removeClass("on")
    })


    /*自动轮播*/
    var t=setInterval(function(){
        ii++;
        move()
    },8000)


    /*  对banner定时器的操作
    $(".banner").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(function(){
            i++;
            move()
        },2000)
    })*/

    //对banner定时器的操作
     $(".hmhd_circle li").hover(function(){
     clearInterval(t);
     },function(){
     t=setInterval(function(){
     ii++;
     move()
     },8000)
     })



    /*向左的按钮*/
    $(".banner .btn_l").click(function(){
        ii++
        move();
    })



    /*向右的按钮*/
    $(".banner .btn_r").click(function(){
        ii--
        move()
    })






    function move(){

        if(ii==size){
            $(".hmhd_lunbo").css({left:0})
            ii=1;
        }


        if(ii==-1){
            $(".hmhd_lunbo").css({left:-(size-1)*1210})
            ii=size-2;
        }

        $(".hmhd_lunbo").stop().animate({left:-ii*1210},500)

        if(ii==size-1){
            $(".hmhd_circle li").eq(0).addClass("on").siblings().removeClass("on")
        }else{
            $(".hmhd_circle li").eq(ii).addClass("on").siblings().removeClass("on")
        }



    }







})