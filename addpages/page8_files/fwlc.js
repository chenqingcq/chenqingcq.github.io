/**
 * Created by Administrator on 2016/8/25 0025.
 */
$(function () {

    $(".fwlc_tabs li").each(function (index) {
        $(this).hover(function () {
            $(".fwlc_detail").removeClass("show");
            $(".fwlc_detail").eq(index).addClass("show");

            $(".fwlc_tabs li").removeClass("active");
            $(this).addClass("active");

        })
    })

    function addclass(e){
        var win_h=$(window).height()*0.5;
        var t=$(e).offset().top;
        var top=$(window).scrollTop();

        if(top>t-win_h){
            $(e).addClass("move_slide")
        }
    }
    $(window).scroll(function(){
        addclass(".fwlc_detail")
    })
	
	
	

$(document).ready(function(){
	$('.zxdy_content li').click(function(){
		$('.zxdy_content li').not($(this)).removeClass('zxdy_active');
		$(this).toggleClass('zxdy_active');
	});
 
	
	
	
    })

})



