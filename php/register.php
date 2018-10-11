<?php
  
    error_reporting(E_ALL ^ E_DEPRECATED);
    $db=mysql_connect("localhost","root","123456");
    mysql_select_db("login",$db);
    mysql_query(`set names utf-8`);
    header("Content-type:text/html;charset=utf-8");
    $username = $_POST["username"];
    $pwd=$_POST["pwd"];
    $sql1="SELECT * FROM `login_user` WHERE (u_name='$username')";
    $date1=mysql_query($sql1);
    $result=mysql_fetch_array($date1);
        if(!$result){
            $sql2 = "INSERT INTO `login_user`(`u_id`, `u_name`, `u_password`) VALUES (null,'$username','$pwd')";
            $date2=mysql_query($sql2);
            if($date2==1){
                echo '{"status":200,"msg":"注册成功","res":true}';            
            }
        }else{
            echo '{"status":200,"msg":"注册失败，用户名已经存在","res":false}';  
        }
   
?>
