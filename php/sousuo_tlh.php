<?php
//   注册时，实时验证用户名
    error_reporting(E_ALL ^ E_DEPRECATED);
    $db=mysql_connect("localhost","root","123456");
    mysql_select_db("login",$db);
    mysql_query(`set names utf-8`);
    header("Content-type:text/html;charset=utf-8");
    $username = $_POST["username"];
    $sql1="SELECT * FROM `login_user` WHERE (u_name='$username')";
    $date1=mysql_query($sql1);
    $result=mysql_fetch_array($date1);
    
        if(!$result){
            echo '{"status":200,"msg":"用户名可用","res":true}';             
        }else{
            echo '{"status":200,"msg":"用户名已经存在","res":false}';  
        }
   
?>
