"use strict";



function valid_name() {
	var name = document.getElementById('name').value;
	var msg = document.getElementById('eName');
	var c = 0;
	var data = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9','.','-',' '];
	var words = name.split(" ");

	for(var i=0;i< words.length;i++)
	{
		if (words!=0) {
			c++;
		}
	}

	if (name=='') {
		msg.innerHTML="<b>*</b>Empty Value";
	}
	else
	{
		if (c<2) {
			msg.innerHTML="<b>*</b>Must need two word";
		}
		else
		{
			msg.innerHTML="";
		}
	}
	// else
	// {
	// 	for(var i=0;i<name.length;i++)
	// 	{
	// 		for(var j=0;j<i;j++)
	// 		{
	// 			if (name[i]==data[j]) {

	// 			}
	// 		}
	// 	}
	// }
	
}


function valid_email()
{
    function valid(email)
    {
    	if (email.indexOf("@") == -1) {
            return false;
        }
        var parts = email.split("@");
        var dot = parts[1].indexOf(".");

        var len = parts[1].length;
        var dotSplits = parts[1].split(".");
        var dotCount = dotSplits.length - 1;


        if (dot == -1 || dot < 2 || dotCount > 2) {
            return false;
        }

        for (var i = 0; i < dotSplits.length; i++) {
            if (dotSplits[i].length == 0) {
                return false;
            }
        }

        return true;
    }

    var mail = document.getElementById('email').value;
    var msg = document.getElementById('Email');
    if (mail=="") {
    	msg.innerHTML="<b>*</b>Empty value";
    }
    else
    {
    	var status = valid(mail);

	    if (status) {
	    	msg.innerHTML="";
	    }
	    else
	    {
	    	msg.innerHTML="<b>*</b>Invalid email";
	    }
    }
}



function valid_uname()
{
	var uname = document.getElementById('username').value;
	var msg = document.getElementById('euser');
	if (uname=="") {
		msg.innerHTML = "<b>*</b>Empty value";
	}
	else
	{
		msg.innerHTML = "";
	}

}



function valid_day()
{
	var day = document.getElementById('day').value;
	var msg = document.getElementById('d');
	if (day=="") {
		msg.innerHTML = "<b>*</b>Empty day value";
	}
	else
	{
		if (day<1 || day>31) {
			msg.innerHTML = "<b>*</b>Invalid day value";
		}
		else
		{
			msg.innerHTML = "";
		}
	}
}


function valid_month()
{
	var month = document.getElementById('month').value;
	var msg = document.getElementById('m');
	if (month=="") {
		msg.innerHTML = "<b>*</b>Empty month value";
	}
	else
	{
		if (month<1 || month>12) {
			msg.innerHTML = "<b>*</b>Invalid month value";
		}
		else
		{
			msg.innerHTML = "";
		}
	}
}


function valid_year()
{
	var year = document.getElementById('year').value;
	var msg = document.getElementById('y');
	if (year=="") {
		msg.innerHTML = "<b>*</b>Empty year value";
	}
	else
	{
		if (year<1900 || year>2016) {
			msg.innerHTML = "<b>*</b>Invalid year value";
		}
		else
		{
			msg.innerHTML = "";
		}
	}
}

function valid_gender()
{
	var gender1 = document.getElementById('gender1');
	var gender2 = document.getElementById('gender2');
	var gender3 = document.getElementById('gender3');
	var status = gender1.checked || gender2.checked || gender3.checked;
	var msg = document.getElementById('eGen');
	if (status) {
		msg.innerHTML="";
	}
	else
	{
		msg.innerHTML="<b>*</b>Gender not selected";
	}
}


function valid_degree()
{
	var ssc = document.getElementById('c1');
	var hsc = document.getElementById('c2');
	var bsc = document.getElementById('c3');
	var msg = document.getElementById('deg');

	var status = ssc.checked || hsc.checked || bsc.checked;

	if (status) {
		msg.innerHTML="";
	}
	else
	{
		msg.innerHTML="<b>*</b>No degree selected";
	}

}


function valid_blood()
{
	var type = document.getElementById('blood');

	var msg = document.getElementById('bg');

	if (type.value=="") {
		msg.innerHTML="Select blod group"
	}
	else
	{
		msg.innerHTML="";
	}
}



function valid_photo()
{
	var profile = document.getElementById('pro').files.length;
	var msg = document.getElementById('ePro');

	if (profile>0) {
		msg.innerHTML="";

	}
	else
	{
		msg.innerHTML="<b>*</b>No image selected";
	}
	
}


function pass()
{
	var pass = document.getElementById('password').value;
	var msg = document.getElementById('pass1');

	if (pass=="") {
		msg.innerHTML="<b>*</b>Empty value";
	}
	else
	{
		msg.innerHTML="";
	}
}


function cpass()
{
	var pass = document.getElementById('password').value;
	var cpass = document.getElementById('confirmpassword').value;
	var msg = document.getElementById('pass2');
	if (cpass=="") {
		msg.innerHTML="<b>*</b>Empty value";
	}
	else
	{
		if (cpass!=pass) {
			msg.innerHTML="<b>*</b>Password didn't match";
		}
		else
		{
			msg.innerHTML="";
		}
	}
}



function validation()
{
	valid_name();
	pass();
	cpass();
	valid_photo();
	valid_blood();	
	valid_degree();
	valid_gender()
	valid_day();
	valid_month();
	valid_year();
	valid_uname();
	valid_email();
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


function signup()
{

	var name = 'name='+document.getElementById('name').value;
	var email ='email='+document.getElementById('email').value;
	var uname = "userName="+document.getElementById('username').value;
	var pass ="password="+document.getElementById('password').value;
	var gen = "gender="+document.querySelector('input[name="gender"]:checked').value;
	var day = "day="+document.getElementById('day').value;
	var month = "month="+document.getElementById('month').value;
	var year = "year="+document.getElementById('year').value;
	var blood = document.getElementById('blood');
	var bloodValue = "bloodG="+blood.options[blood.selectedIndex].value;
	var image = document.getElementById('pro').value;
	var imgValue = image.split('\\');
	var img = "profile="+imgValue[2];
	var degree = document.getElementsByName('D[]');
	var degValue= "";
	for(var i=0;i<degree.length;i++)
	{
		if (degree[i].checked) {
			degValue+="["+degValue[i]+"]";
		}
	}

	var dval  ="D[]="+degValue;

	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "php/signup.php", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	 xhttp.send(name+'&'+email+'&'+uname+'&'+pass+'&'+gen+'&'+day+'&'+month+'&'+year+'&'+bloodValue+'&'+img+'&'+dval);
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	     	document.getElementById('message').innerHTML = this.responseText;
	    }
	  };
}