<?php
define("HOSTNAME","localhost");
define("USERNAME","root");
define("PASSWORD","");
define("DATABASE","resume");
$dbhandle=new mysqli(HOSTNAME,USERNAME,PASSWORD,DATABASE) or die("cannot connect to database");
?>