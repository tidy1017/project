<?php
    header("Content-type:text/html;charset=utf-8");
    error_reporting(E_ALL ^ E_DEPRECATED);
    $db=mysql_connect("localhost","root",123456);
    mysql_select_db("login",$db);
    mysql_query(`set names utf-8`);
   
    $username = $_POST["username"];
    $pwd=$_POST["pwd"];

    $sql1="SELECT * FROM `login_user` WHERE (u_name='$username')";
    $date1=mysql_query($sql1);
    $result=mysql_fetch_array($date1);

    if($username===$result[1]&&$pwd===$result[2]){
        echo '{"status":200,"msg":"登陆成功","res":true}';
        
    }else{
        echo '{"status":200,"msg":"系统提示：用户名或密码错误","res":false}';          
    }  
?>
