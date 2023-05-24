//下拉浮动
function scrollLis(){
	var hiddenPosition = $(".dtdfw").offset();
	var hiddenTop = hiddenPosition.top;
	var toTop = offs.top-$(window).scrollTop();
	if ($(window).height() + $(window).scrollTop() > hiddenTop) {
		if(!$('.picd').hasClass('tz'))$('.picd').addClass('tz');
	} else {
		$('.picd').removeClass('tz');
		if(toTop==0||toTop<0){
			if(!$('#fixed').hasClass('dz'))$('#fixed').addClass('dz');
		}else{
			$('#fixed').removeClass('dz');
		}
	}
}
var offs=$('#fixed').offset();
$(window).scroll(function(){
	scrollLis();
});

//专家大图切换显示
 $(document).ready(function(){
	$('#con_zjd_1 li').eq(0).addClass('on');
	$('#con_zjd_2 li').eq(0).addClass('on');
	$('#con_zjd_3 li').eq(0).addClass('on');
	$('#con_zjd_4 li').eq(0).addClass('on');
	$('#con_zjd_5 li').eq(0).addClass('on');
	$('#con_zjd_6 li').eq(0).addClass('on');
	$('#con_zjd_7 li').eq(0).addClass('on');
	
	$('#con_zjd_1 li').click(function(){
	$('#con_zjd_1 li').removeClass('on');
	$(this).addClass('on');
	});
	
	$('#con_zjd_2 li').click(function(){
	$('#con_zjd_2 li').removeClass('on');
	$(this).addClass('on');
	});
	
	$('#con_zjd_3 li').click(function(){
	$('#con_zjd_3 li').removeClass('on');
	$(this).addClass('on');
	});
	
	$('#con_zjd_4 li').click(function(){
	$('#con_zjd_4 li').removeClass('on');
	$(this).addClass('on');
	});
	
	$('#con_zjd_5 li').click(function(){
	$('#con_zjd_5 li').removeClass('on');
	$(this).addClass('on');
	});
	
	$('#con_zjd_6 li').click(function(){
	$('#con_zjd_6 li').removeClass('on');
	$(this).addClass('on');
	});
	
	$('#con_zjd_7 li').click(function(){
	$('#con_zjd_7 li').removeClass('on');
	$(this).addClass('on');
	});
	
});

