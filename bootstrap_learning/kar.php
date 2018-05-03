<?php
include "connect.php";
$postData=file_get_contents("php://input");
$request=json_decode($postData);
$firstname=$request->firstname;
$secondname=$request->secondname;
$email=$request->email;
$gender=$request->gender;
$survey=$request->survey;
 
$query1="insert into details(firstname,lastname,email,gender,survey) values('$firstname','$secondname','$email','$gender','$survey')";
if($dbhandle->query($query1)){
    echo "sucessfully inserted";
}

else
     echo "not inserted";

?>