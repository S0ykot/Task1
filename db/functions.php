<?php

require_once 'db.php';

function signup(name,email,username,password,gender,dob,degree,blood,image)
{
	$conn = getConnection();
	$query = "INSERT INTO users VALUES ('','$name','$email','$username','$password','$gender','$degree','$dob','$blood','$image')";
	if (mysqli_query($conn,$query)) {
		return true;
	}
	else
	{
		return false;
	}
}


?>