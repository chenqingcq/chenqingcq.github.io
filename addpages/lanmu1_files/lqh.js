/**
 * Created by Administrator on 2016/9/6 0006.
 */
var index_lba =0;
//5秒轮播一次
var timer = setInterval(function(){
    index_lba = (index_lba == 1) ? 0 : index_lba + 1;          
    //某个div显示，其他的隐藏
 $(".lba").removeClass("on");
 $(".lba").eq(index_lba).addClass("on");
}, 5000);

var index_lbb =0;
//5秒轮播一次
var timer = setInterval(function(){
    index_lbb = (index_lbb == 1) ? 0 : index_lbb + 1;          
    //某个div显示，其他的隐藏
 $(".lbb").removeClass("on");
 $(".lbb").eq(index_lbb).addClass("on");
}, 5000);

var index_lbc =0;
//5秒轮播一次
var timer = setInterval(function(){
    index_lbc = (index_lbc == 1) ? 0 : index_lbc + 1;          
    //某个div显示，其他的隐藏
 $(".lbc").removeClass("on");
 $(".lbc").eq(index_lbc).addClass("on");
}, 5000);

var index_lbd =0;
//5秒轮播一次
var timer = setInterval(function(){
    index_lbd = (index_lbd == 1) ? 0 : index_lbd + 1;          
    //某个div显示，其他的隐藏
 $(".lbd").removeClass("on");
 $(".lbd").eq(index_lbd).addClass("on");
}, 5000);