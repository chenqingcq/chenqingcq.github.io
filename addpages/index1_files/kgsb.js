//按宽给高值

$(document).ready(function(){  

    //初始化宽度、高度  
    $(".hfdb").css("width",$(window).width()-"0"+"px");
    //打开窗口时执行
    $(function(){  
        $(".hfdb").css("width",$(window).width()-"0"+"px");
    });
	$(function(){  
        $(".hfdb").css("height",$(window).width()*0.296875);
    });
	$(function(){  
        $(".hfdb img").css("min-height",$(window).width()*0.296875);
    });
	
	//当文档窗口发生改变时 触发
    $(window).resize(function(){  
        $(".hfdb").css("width",$(window).width()-"0"+"px");
    });
	$(window).resize(function(){  
        $(".hfdb").css("height",$(window).width()*0.296875);
    });
	$(window).resize(function(){  
        $(".hfdb img").css("min-height",$(window).width()*0.296875);
    });
	

    });