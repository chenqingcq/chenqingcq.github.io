// JavaScript Document
var isIE = function(ver){
	var b = document.createElement('b')
	b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
	return b.getElementsByTagName('i').length === 1
}

$.fn.smartFloat = function(options) { //浮动层智能定位 $("#float").smartFloat();
    var opts = $.extend({},$.fn.smartFloat.defaults,options);
    var position = function(element) {
        var top = element.position().top, pos = element.css("position");
        $(window).scroll(function() {
            var scrolls = $(this).scrollTop();
            if (scrolls > top) {
                if (window.XMLHttpRequest) {
                    element.css({
                        position: "fixed",
                        top: opts.top
                    });
                } else {
                    element.css({
                        top: scrolls+opts.top
                    });
                }
            }else {
                element.css({
                    position: ""
                });
            }
        });
    };
    return $(this).each(function() {
        position($(this));
    });

};
$.fn.smartFloat.defaults = {
    top:370
};

 

(function($){
    
    $.fn.animatescroll = function(options) {
        
        // fetches options
        var opts = $.extend({},$.fn.animatescroll.defaults,options);
        
        if(opts.element == "html,body") {
            // Get the distance of particular id or class from top
            var offset = this.offset().top;
        
            // Scroll the page to the desired position
            $(opts.element).stop().animate({ scrollTop: offset - opts.padding}, opts.scrollSpeed, opts.easing);
        }
        else {
            // Scroll the element to the desired position
            $(opts.element).stop().animate({ scrollTop: this.offset().top - this.parent().offset().top + this.parent().scrollTop() - opts.padding}, opts.scrollSpeed, opts.easing);
        }
        
    };
    
    // default options
    $.fn.animatescroll.defaults = {        
        easing:"swing",
        scrollSpeed:800,
        padding:370,
        element:"html,body"
    };
    
}(jQuery));

   
 

//功能介绍滚动
   function getQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        }

            $("#tabs_gnjs ").smartFloat({top:0});
            $("#tabs_gnjs a").click(function(){
                $($(this).attr("href")).animatescroll({padding:0});
                $("#tabs_gnjs li").removeClass("active");
                $(this).parent().addClass("active")
            });




	
	
  function getQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        }
		
		
		
		
		
		
$(function(){

	var tophtml="";
	$("#top").html(tophtml);
	$("#izl_rmenu").each(function(){
		$(this).find(".btndb-wx").mouseenter(function(){
			$(this).find(".pic").fadeIn("fast");
		});
		$(this).find(".btndb-wx").mouseleave(function(){
			$(this).find(".pic").fadeOut("fast");
		});
		$(this).find(".btndb-phone").mouseenter(function(){
			$(this).find(".phone").fadeIn("fast");
		});
		$(this).find(".btndb-phone").mouseleave(function(){
			$(this).find(".phone").fadeOut("fast");
		});
		$(this).find(".btndb-top").click(function(){
			$("html, body").animate({
				"scroll-top":0
			},"fast");
		});
	});
	var lastRmenuStatus=false;
	$(window).scroll(function(){//bug
		var _top=$(window).scrollTop();
		if(_top>300){
			$("#izl_rmenu").data("expanded",true);
		}else{
			$("#izl_rmenu").data("expanded",false);
		}
		if($("#izl_rmenu").data("expanded")!=lastRmenuStatus){
			lastRmenuStatus=$("#izl_rmenu").data("expanded");
			if(lastRmenuStatus){
				$("#izl_rmenu .btndb-top").slideDown();
			}else{
				$("#izl_rmenu .btndb-top").slideUp();
			}
		}
	});
});