// 头部幻灯

(function (d, D, v) {
  d.fn.responsiveSlides = function (h) {
    var b = d.extend({ auto: !0, speed: 1E3, timeout: 15E3, pager: !1, nav: !1, random: !1, pause: !1, pauseControls: !1, prevText: "Previous", nextText: "Next", maxwidth: "", controls: "", namespace: "rslides", before: function () { }, after: function () { } }, h); return this.each(function () {
      v++; var e = d(this), n, p, i, k, l, m = 0, f = e.children(), w = f.size(), q = parseFloat(b.speed), x = parseFloat(b.timeout), r = parseFloat(b.maxwidth), c = b.namespace, g = c + v, y = c + "_nav " + g + "_nav", s = c + "_here", j = g + "_on", z = g + "_s",
        o = d("<ul class='" + c + "_tabs " + g + "_tabs'/> "), A = { "float": "left", position: "relative" }, E = { "float": "none", position: "absolute" }, t = function (a) { b.before(); f.stop().fadeOut(q, function () { d(this).removeClass(j).css(E) }).eq(a).fadeIn(q, function () { d(this).addClass(j).css(A); b.after(); m = a }) }; b.random && (f.sort(function () { return Math.round(Math.random()) - 0.5 }), e.empty().append(f)); f.each(function (a) { this.id = z + a }); e.addClass(c + " " + g); h && h.maxwidth && e.css("max-width", r); f.hide().eq(0).addClass(j).css(A).show(); if (1 <
          f.size()) {
            if (x < q + 100) return; if (b.pager) { var u = []; f.each(function (a) { a = a + 1; u = u + ("<span><a href='#' class='" + z + a + "'>" + a + "</a></span>") }); o.append(u); l = o.find("a"); h.controls ? d(b.controls).append(o) : e.after(o); n = function (a) { l.closest("span").removeClass(s).eq(a).addClass(s) } } b.auto && (p = function () { k = setInterval(function () { var a = m + 1 < w ? m + 1 : 0; b.pager && n(a); t(a) }, x) }, p()); i = function () { if (b.auto) { clearInterval(k); p() } }; b.pause && e.hover(function () { clearInterval(k) }, function () { i() }); b.pager && (l.bind("click", function (a) {
              a.preventDefault();
              b.pauseControls || i(); a = l.index(this); if (!(m === a || d("." + j + ":animated").length)) { n(a); t(a) }
            }).eq(0).closest("span").addClass(s), b.pauseControls && l.hover(function () { clearInterval(k) }, function () { i() })); if (b.nav) {
              c = "<ul class='fdsx'><a href='#' class='" + y + " prev'>" + b.prevText + "</a><a href='#' class='" + y + " next'>" + b.nextText + "</a></u>"; h.controls ? d(b.controls).append(c) : e.after(c); var c = d("." + g + "_nav"), B = d("." + g + "_nav.prev"); c.bind("click", function (a) {
                a.preventDefault(); if (!d("." + j + ":animated").length) {
                  var c = f.index(d("." + j)),
                  a = c - 1, c = c + 1 < w ? m + 1 : 0; t(d(this)[0] === B[0] ? a : c); b.pager && n(d(this)[0] === B[0] ? a : c); b.pauseControls || i()
                }
              }); b.pauseControls && c.hover(function () { clearInterval(k) }, function () { i() })
            }
      } if ("undefined" === typeof document.body.style.maxWidth && h.maxwidth) { var C = function () { e.css("width", "100%"); e.width() > r && e.css("width", r) }; C(); d(D).bind("resize", function () { C() }) }
    })
  }
})(jQuery, this, 0);
$(function () {
  $(".f426x240").responsiveSlides({
    auto: true,
    pager: true,
    nav: true,
    speed: 700,
    maxwidth: 0
  });
});

$(function () {
  $(".yydtgd").responsiveSlides({
    auto: true,
    pager: true,
    nav: true,
    speed: 700,
    maxwidth: 0
  });
});


// 收缩展开效果
$(window).on('load', function () {
  $('#focus .tools ul li').each(function (index, element) {
    $(this).addClass('moveLeft').delay(1000 * index).animate({ opacity: '1', left: '0' }, 2000, "easeOutBack", function () {
      setTimeout(function () {
        if ($('#focus .tools ul li .cur').length < 1) {
          $('#focus .tools ul li:first .slide .arr').click()
        };
      }, 1000);
    });
  });

  $('#focus .tools ul li .arr').click(function () {
    var _this = $(this);
    $('#focus .tools ul li .down').stop().slideUp(300);
    if (!_this.hasClass('cur')) {
      $('#focus .tools ul li .cur').removeClass('cur');
      _this.addClass('cur').parents('li').children('.down').slideDown(300);
    } else {
      $('#focus .tools ul li .cur').removeClass('cur');
    };
  });
});



// 医院动态

$(function () {
  // 轮播图开始 
  var left = $('.content_middle .btnLeft');//获取左点击
  var right = $('.content_middle .btnRight');//获取右点击
  var aSmall = $('.content_middle .table a');
  var aLi = $('.content_middle ul li');
  var iNow = 0;
  // 左点击  
  left.hover(function () {
    iNow--;
    // 判断回流
    if (iNow < 0) {
      iNow = 5;
    }
    aLi.eq(iNow).siblings().stop().animate({
      opacity: 0

    }, 800);
    aLi.eq(iNow).stop().animate({
      opacity: 1

    }, 800);
    aSmall.eq(iNow).addClass('small_active').siblings().removeClass('small_active');
  });
  // 右点击切换
  right.click(function () {
    iNow++;
    if (iNow > 5) {
      iNow = 0;
    }
    aLi.eq(iNow).siblings().stop().animate({
      opacity: 0

    }, 800);
    aLi.eq(iNow).stop().animate({
      opacity: 1

    }, 800);
    aSmall.eq(iNow).addClass('small_active').siblings().removeClass('small_active');

  });

  //手动切换
  aSmall.mouseover(function () {
    var n = $(this).index();
    //        var iNow = $(this).index();
    //        alert(iNow);
    iNow = n;
    aLi.eq(iNow).siblings().stop().animate({
      opacity: 0

    }, 800);
    aLi.eq(iNow).stop().animate({
      opacity: 1

    }, 800);
    aSmall.eq(iNow).addClass('small_active').siblings().removeClass('small_active');

  });
  // 封装函数体
  function move1() {
    aLi.eq(iNow).siblings().stop().animate({
      opacity: 0

    }, 800);
    aLi.eq(iNow).stop().animate({
      opacity: 1
    }, 800);

    aSmall.eq(iNow).addClass('small_active').siblings().removeClass('small_active');
  }

  // 定个定时器的初始值
  function run2(){ 
       iNow++;
        if(iNow>5){
               iNow=0;
          }
        move1();  
  }
  //// 定时器
  timer = setInterval(run2,800);



  //当鼠标划入，停止轮播图切换
  $(".content_middle").hover(function () {
    clearInterval(timer);
  }, function () {
    timer = setInterval(run2, 800);
  })
})







// JavaScript Document
$(function () {
  $(".zjgda").jCarouselLite({
    btnPrev: ".cur_l",
    btnNext: ".cur_r",
    auto: 2000,
    speed: 488,
    visible: 5
  });

});
