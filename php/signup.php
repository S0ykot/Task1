<?php

require_once '../db/functions.php';

	$name = $_POST['name'];
	$mail = $_POST['email'];
	$uname = $_POST['userName'];
	$pass= $_POST['password'];
	$gen = $_POST['gender'];
	$dob = $_POST['day'].'-'.$_POST['month'].'-'.$_POST['year'];
	$blood = $_POST['bloodG'];
	$degree= $_POST['D[]'];
	$img = $_POST['profile'];


	echo $name." ".$email;




?>