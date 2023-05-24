/**
 * Created by Administrator on 2016/8/25 0025.
 */
$(function () {

    $(".hyfl_tabs li").each(function (index) {
        $(this).hover(function () {
            $(".hyfl_detail").removeClass("show");
            $(".hyfl_detail").eq(index).addClass("show");

            $(".hyfl_tabs li").removeClass("active");
            $(this).addClass("active");

        })
    })


})



