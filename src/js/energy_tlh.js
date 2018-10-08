$(function() {
    // 解决选项卡的点击背景问题
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
    for (var i = 0; i < 3; i++) {
        $(".main .tab-2 .pai a").on("click", function() {
            var i = $(".main .tab-2 .pai a").index($(this));
            $(".main .tab-2 .pai a").css({
                "border": "",
                "color": ""
            });
            $(this).css({
                "border-bottom": "3px solid #015198",
                "color": "#015198"
            });
            $(".main .tab-2 .tab-pane").removeClass("active");
            $(".main .tab-2 .tab-pane").eq(i).addClass("active");
            console.log(i);
        });
    }
    for (var j = 0; j < 12; j++) {
        $(".main .tab-5 p").on("click", function() {
            $(".main .tab-5 p modal").css({
                "display": "none"
            });
            // console.log($("this"));
            $("this").css({
                "display": "block"
            })
        });
    }
    // 滚动监听事件
    function jianting() {
        $(window).scroll(function() {
            // 滚动条距离顶部的距离大于等于100px时
            if ($(window).scrollTop() >= 100) {
                $(".aside").fadeIn(1000); // 开始淡入
            } else {
                $(".aside").stop(true, true).fadeOut(1000); // 如果小于 100 淡出
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
});

// 模态框的消失事件
$(".main .tab-5 .modal-dialog .cha").on("click", function() {
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