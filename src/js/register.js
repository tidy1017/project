$(function($) {
    var wi = $(window).width();
    var he = $(window).height();
    var top = $(".bg img").offset().top;
    var left = $(".bg img").offset().left;
    var tId, i = 5;

    $(".bg img").css({
        'width': "" + wi + "px",
        'height': "" + he + "px",
        'top': "" + top + "px",
        "left": "" + left + "px"
    });

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
        $(".main .hu .chuqu").css("display", "none");
        $("#content").html("系统提示，请输入用户名或密码");
        console.log(1);
    });
    $("#pwd").on("click", function() {
        content.style.display = "none";
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
        $(".main .mi .chuqu1").css("display", "none");
        $("#content").html("系统提示，请输入用户名或密码");
        console.log(1);
    });
    // ajax对于用户名实时验证
    $("#username").on("keyup", function() {
        $(".btn").css("disabled", "disabled");
        var reg = /[A-z]\w{7,15}/;
        if ($("#username").val() != "") {
            if (reg.test($("#username").val())) {
                var data = {
                    "username": $('#username').val()
                };
                var url = "http://10.31.157.19:8080/myapp/ajax/xinlunkeji/src/js/sousuo_tlh.php";
                // var url = "../js/sousuo_tlh.php"
                $.ajax({
                    type: "POST",
                    url: url,
                    data: data,
                    dataType: "json",
                    success: function(data) {
                        if (data.res) {
                            $("#content").html(data.msg);
                            $("#content").css("display", "block");
                        } else {
                            $("#content").html(data.msg);
                            $("#content").css("display", "block");
                        }
                    }
                });
            } else {
                $("#content").html("用户名格式错误");
                $("#content").css("display", "block");
            }
        } else if ($("#username").val() == "") {
            $("#content").html("系统提示，请输入用户名或密码");
        }
    });
    // 密码框的验证
    $("#pwd").on("keyup", function() {
        var reg1 = /\w{7,15}/;
        if ($("#pwd").val() != "") {
            if (reg1.test(this.value) && $("username").val != "") {
                $("#content").html("密码格式正确");
                $("#content").css("display", "block");
                $(".btn").removeAttr("disabled");
            } else if (!reg1.test(this.value) && $("#username") != "") {
                $("#content").html("密码格式错误,最少在七位以上");
                $("#content").css("display", "block");
                $(".btn").attr("disabled", "disabled");
            }
        } else if ($("#pwd").val() == "") {
            $("#content").html("系统提示，请输入用户名或密码");
        }
    });
    // 登陆按键按下时，ajax请求验证
    $(".btn").on("click", function() {
        console.log(1);
        var data = {
            "username": $('#username').val(),
            "pwd": $('#pwd').val()
        };
        var url = "http://10.31.157.19:8080/myapp/ajax/xinlunkeji/src/js/register.php";
        // var url = "../js/register.php"
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            dataType: "json",
            success: function(data1) {
                if (data1.res) {
                    if ($("#username").val() != "" && $("#pwd").val() != "") {
                        $("#content").html(data1.msg);
                        $("#username").val("");
                        $("#pwd").val("");
                        $("#content").css("display", "block");
                        (function(i) {
                            tId = setInterval(function() {
                                // jishi.innerHTML = "正在为您跳转到首页，请稍等:" + i + "秒";
                                $(".jishi").html("正在为您跳转到首页，请稍等:" + i + "秒");
                                i--;
                                if (i == 0) {
                                    location.href = "./login_tlh.html";
                                }
                            }, 1000);
                        })(i);
                    }
                } else {
                    if ($("#username").val != "" && $("pwd").val() != "") {
                        $("#content").html(data1.msg);
                        $("#content").css("display", "block");
                    } else if ($("#username").val() == "" || $("#pwd").val() == "") {
                        data1 = null;
                        $("#content").css("display", "block");
                        $("#content").html("系统提示，请输入用户名或密码");
                    }
                }
            }
        });
    });

});