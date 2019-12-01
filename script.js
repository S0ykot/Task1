function validation() {
	var myname = document.getElementById('name').value;
	var myemail = document.getElementById('email').value;
	var myuname = document.getElementById('username').value;
	var mypass = document.getElementById('password').value;
	var mycpass = document.getElementById('confirmpassword').value;
	var mygender = document.getElementById('gender').value;
	var myday = document.getElementById('day').value;
	var mymonth = document.getElementById('month').value;
	var myyear = document.getElementById('year').value;
	var msg = document.getElementById('msg');
	var c  =myname.split(' ');
	


	 if (myname=="" || myemail=="" || myuname =="" || mypass==""|| mycpass==""|| mygender==""|| myday==""|| mymonth==""||myyear=="") {
	 	msg.innerHTML="Null submission";
	 }
	 else
	 {

	 	if (myname[0]==' ') {
	 		alert("Name can't start with space");
	 	}
	 	else
	 	{
	 		if (c.length<2) {
	 		alert("Name must need atleast two words");
	 	}
	 	}

	 	if ((Number(myday)<1) || (Number(myday)>31)) {
	 		alert("Day error");
	 	}

	 	if (Number(mymonth)<1 || Number(mymonth)>12) {
	 		alert("Invalid month" );
	 	}
	 	if (Number(myyear)<1900 || NUmber(myyear)>2016) {
	 		alert("Invalid year" );
	 	}

	 	if (mypass.length<8 && mycpass.length<8) {
	 			alert("Password must be 8 char" );
	 		}
	 	else
	 	{
	 		if (mypass!==mycpass) {
	 		alert("Password don't matching" );
	 	}

	 }
}

}



function reset()
{
	document.getElementById('name').value="";
	document.getElementById('email').value="";
	document.getElementById('username').value="";
	document.getElementById('password').value="";
	document.getElementById('confirmpassword').value="";
	document.getElementById('gender').value="";
	document.getElementById('day').value="";
	document.getElementById('month').value="";
	document.getElementById('year').value="";
}
