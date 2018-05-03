<!DOCTYPE HTML>
<html>
<body>

<?php
 include 'connect.php';
  
  if(isset($_FILES['file']) && $_FILES['file']['error'] == 0)
   {
        $imagename=$_FILES['file']['name'];
        $imagedata=file_get_contents($_FILES['file']['tmp_name']);
       

        $query1="insert into photo values('$imagename','$imagedata')";

        if($dbhandle->query($query1))
        {
            echo 'photo inserted sucessfully';
        }

        else{
            echo 'photo could not be inserted';
        }
    
   }
   else
   echo 'false';


?>

<form method="post" enctype="undefined">
<input type="file" accept=".jpg,.jpeg" name="file">
</form>
</body>
</html>