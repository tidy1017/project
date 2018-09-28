$(function($) {

    var wi = $(window).width();
    var he = $(window).height();
    var top = $(".bg img").offset().top;
    var left = $(".bg img").offset().left;

    // 给背景图提供宽高
    $(".bg img").css({
        'width': "" + wi + "px",
        'height': "" + he + "px",
        'top': "" + top + "px",
        "left": "" + left + "px"
    });
    // 用户名输入框的颜色和事件
    $("#username").on("click", function() {
        $(".ren").css("color", "aqua");
        $('.main .hu').css("border-color", "aqua");

    });
    $("#username").on("keyup", function() {

        if ($("#username").val() != "") {
            $(".chuqu").css("display", "");
            // console.log(1);
        } else {
            $(".chuqu").css("display", "none");
        }
    });
    $("#username").on('blur', function() {
        $(".ren").css("color", "#d6d6d6");
        $('.main .hu').css("border-color", "#d6d6d6");
    });
    $(".main .hu .chuqu").on("click", function() {
        $("#username").val("");
        console.log(1);
    });
    $("#pwd").on("click", function() {
        $(".suo").css("color", "aqua");
        $('.main .mi').css("border-color", "aqua");
    });

    $("#pwd").on("keyup", function() {
        if ($("#pwd").val() != "") {
            $(".chuqu1").css("display", "inline-block");

        } else {
            $(".chuqu1").css("display", "none");
        }
    });
    $("#pwd").on('blur', function() {
        $(".suo").css("color", "#d6d6d6");
        $('.main .mi').css("border-color", "#d6d6d6");

    });
    $(".main .mi .chuqu1").on("click", function() {
        $("#pwd").val("");
        console.log(1);
    });
});