// JavaScript Document
$(function(){
	//二级菜单
	$('#header .hcd').hover(function(){
		$('#header .mask').addClass('xl');
		$('ddpages/lanmu2_files/.hcd .nav').addClass('xl');
	},function(){
		$('#header .mask').removeClass('xl');
		$('ddpages/lanmu2_files/.hcd .nav').removeClass('xl');
	});
});

 function btqh(name,cursel,n){
    for(i=1;i<=n;i++){
    var menu=document.getElementById(name+i);
    var con=document.getElementById("con_"+name+"_"+i);
    menu.className=i==cursel?"on":"";
    con.style.display=i==cursel?"block":"none";
    }
    }

// 弹出层
function    locking(){
document.all.tc.style.display="block";
}
function    Lock_CheckForm(theForm){
document.all.tc.style.display='none';
return   false;
}