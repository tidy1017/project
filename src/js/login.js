$(function($) {

    var wi = $(window).width();
    var he = $(window).height();
    var top = $(".bg img").offset().top;
    var left = $(".bg img").offset().left;
    var tId, i = 5;
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
        // if ($("#username").val() != "") {
        //     $(".chuqu").css("display", "block");
        // }
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
    // 删除用户名框的字段
    $(".main .hu .chuqu").on("click", function() {
        $("#username").val("");
        $(".main .hu .chuqu").css("display", "none");
        console.log(1);
    });
    $("#pwd").on("click", function() {
        $(".suo").css("color", "aqua");
        $('.main .mi').css("border-color", "aqua");
        // if ($("#pwd").val() != "") {
        //     $(".main .mi .chuqu1").css("display", "block");
        // }
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
    // 删除密码框的字段
    $(".main .mi .chuqu1").on("click", function() {
        $("#pwd").val("");
        $(".main .mi .chuqu1").css("display", "none");
    });
    // 登陆按键按下时，ajax请求验证
    $("#btn1").on("click", function() {
        console.log(1);
        var data = {
            "username": $('#username').val(),
            "pwd": $('#pwd').val()
        };
        // var url = "http://10.31.157.19:8080/myapp/ajax/xinlunkeji/src/js/login.php";
        var url = "../js/login.php"
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            dataType: "json",
            success: function(mesg) {
                $("#content").html(mesg);
                var data1 = mesg;
                if (data1.res) {
                    if ($("#username").val() != "" && $("pwd").val() != "") {
                        $("#content").html(data1.msg);
                        $("#content").css("display", "block");
                        $("#username").val("");
                        $(location).attr('href', '../html/register_tlh.html');
                    }
                } else {
                    if ($("#username").val != "" && $("pwd").val() != "") {
                        $("#content").html(data1.msg);
                        $("#content").css("display", "block");
                    } else if ($("#username").val == "" || $("pwd").val() == "") {
                        data1 = null;
                        $("#content").css("display", "block");
                        $("#content").html("系统提示，请输入用户名或密码");
                    }
                }
            }
        });
    });
});