$(function(){
        //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
       
            $(window).scroll(function(){
                if($(window).scrollTop()>100){
                    $(".gdhz").addClass("wc");
                };
				if($(window).scrollTop()>1000){
                	$(".gdhzb").addClass("wc");
                };
              
            });
            
});