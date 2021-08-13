<?php
 
    // Nếu không phải là sự kiện đăng ký thì không xử lý
    
     
    //Nhúng file kết nối với database

    include('ketnoibh.php');
          
    //Khai báo utf-8 để hiển thị được tiếng việt
    header('Content-Type: text/html; charset=UTF-8');
          
    //Lấy dữ liệu từ file menuside.php
    $a    = addslashes($_POST['txtname']);
    $b    = addslashes($_POST['txtemail']);
    $c    = addslashes($_POST['txtsubject']);
    $d    = addslashes($_POST['txtmessage']);

    //Kiểm tra người dùng đã nhập liệu đầy đủ chưa
    if (!$a || !$b || !$c || !$d)
    {
        echo "Vui lòng nhập đầy đủ thông tin. <a href='javascript: history.go(-1)'>Trở lại</a>";
        echo 
        "name:".$a,
        "mail:".$b,
        "subject:".$c,
        "message:".$d,

        exit;
    }

     //Lưu thông tin thành viên vào bảng
     @$addreq = mysqli_query($conn,
     " INSERT INTO request (
                            name,
                            mail,
                            subject,
                            message
                            )
     VALUE (
         
         '{$a}',
         '{$b}',
         '{$c}',
         '{$d}'
     )"
 );


	?>