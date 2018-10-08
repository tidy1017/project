$(function() {
        var t = 0;
        for (var i = 0; i < 6; i++) {
            $(".main li a").on("click", function() {

                $("li a").css({
                    "background": "#f2f2f2",
                    "color": "black",
                    "border": "1px solid #CCCCCC",
                    "border-top": "none"
                });
                $(this).css({
                    "background-color": "#015198",
                    "color": "white",
                    "border": "none"
                })
            });
            $(".main li").on("click", function() {
                $("li span").css({
                    "display": "none"
                });
                $(this)[0].childNodes[3].style.display = "block";
            });
        }
        // 选项卡6js部分
        $(".main .tab-6 .left").on("click", function() {
            if (t < 0) {
                t += ($(".main .tab-6 .box li").width() + 10);
                $(".main .tab-6 ul").animate({
                    "left": t + "px"
                }, 800)

            }
        });

        $(".main .tab-6 .right").on("click", function() {
            console.log(1);
            t += -($(".main .tab-6 .box li").width() + 10);
            console.log($(window).width());
            if ($(window).width() > 1023) {
                if (t > -($(".main .tab-6 .box li").width() + 10) * 2) {
                    $(".main .tab-6 ul").animate({
                        "left": t + "px"
                    }, 800)
                }
            } else if ($(window).width() > 300 && $(window).width() < 415) {
                if (t > -($(".main .tab-6 .box li").width() + 10) * 6) {
                    $(".main .tab-6 ul").animate({
                        "left": t + "px"
                    }, 800)
                }
            } else if ($(window).width() > 660 && $(window).width() < 1024) {
                if (t > -($(".main .tab-6 .box li").width() + 10) * 4) {
                    $(".main .tab-6 ul").animate({
                        "left": t + "px"
                    }, 800)
                }
            }
        });

        for (var i = 0; i < 6; i++) {
            $(".main .tab-6 li a").on("click", function() {
                $(".main .tab-6 li a").removeClass("show");
                $(this).addClass("show");
            });
        }
        for (var j = 0; j < 3; j++) {
            $(".main .tab-3 .pai a").on("click", function() {
                $(".main .tab-3 .pai a").css({
                    "border-bottom": "none",
                    "color": "black"
                });
                $(this).css({
                    "border-bottom": "3px solid #015198",
                    "color": "#015198"
                })
            });
        }
        for (var k = 0; k < 4; k++) {
            $(".main .tab-4 .pai1 a").on("click", function() {
                $(".main .tab-4 .pai1 a").css({
                    "background": "#f3f3f3",
                    "color": "black"
                });
                $(this).css({
                    "background": "#015098",
                    "color": "white"
                })
            });
        }
        // 滚动监听事件
        function jianting() {
            $(window).scroll(function() {
                // 滚动条距离顶部的距离 大于300px时
                if ($(window).scrollTop() >= 100) {
                    $(".aside").fadeIn(1000); // 开始淡入
                } else {
                    $(".aside").stop(true, true).fadeOut(1000); // 如果小于等于 300 淡出
                }
            });
        }
        jianting();

        function huidingbu() {
            $(".aside").click(function() {
                $("html,body").animate({ scrollTop: "0px" }, 'slow');
            });
        }
        huidingbu();
    })
    // 模态框的消失事件
$(".main .tab-4 .modal-dialog .cha").on("click", function() {
    console.log(1);
    $("body").removeClass("modal-open");
    $("body").css({
        "padding-right": ""
    })
    $(".modal").removeClass("in");
    $(".modal").css({
        "display": "none"
    })
    $(".modal-backdrop").remove();
});