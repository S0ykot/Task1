<?php
	function getConnection(){
		$conn = mysqli_connect('localhost', 'root', '', 'task1');
		return $conn;
	}
?>