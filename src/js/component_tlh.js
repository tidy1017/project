$(function() {
    // 选项卡的js部分代码
    for (var i = 0; i < 4; i++) {
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
            });

        });
        $(".main li").on("click", function() {
            $("li span").css({
                "display": "none"
            });
            $(this)[0].childNodes[3].style.display = "block";
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
});

// 模态框的消失事件
$(".main .tab-3 .modal-dialog .cha").on("click", function() {
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