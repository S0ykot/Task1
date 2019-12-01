function valid_name() {
	var name = document.getElementById('name').value;
	var msg = document.getElementById('eName');
	var c = 0;
	var words = name.split(" ");

	for(var i=0;i< words.length;i++)
	{
		if (words!=0) {
			c++;
		}
	}

	/*function gCharArray(var1, var2) {
    var a = [], i = var1, j = var2;
    
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
  }
	var x = gCharArray(65,90);
	var y = gCharArray(97,122);
	var z = x.concat(y);*/
	/*
	var myuname = document.getElementById('username').value;
	
	
	
	
	var myyear = document.getElementById('year').value;
	var msg = document.getElementById('msg');
*/
	if (name=='') {
		msg.innerHTML="Empty Value";
	}
	else
	{
		if (c<2) {
			msg.innerHTML="Two word needed";
		}
		else
		{
			msg.innerHTML="";
		}
	}
	
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
    	msg.innerHTML="Empty value";
    }
    else
    {
    	var status = valid(mail);

	    if (status) {
	    	msg.innerHTML="";
	    }
	    else
	    {
	    	msg.innerHTML="Invalid email";
	    }
    }
}


// function gender()
// {
// 	var gender = document.getElementById('gender');
// 	var msg = document.getElementById('eGen');
// 	if (gender.checked) {

// 	}
// 	else{
// 		msg.innerHTML = "Select gender"; 
// 	}
// }



function day()
{
	var day = document.getElementById('day').value;
	var msg = document.getElementById('dob');
	if (day=="") {
		msg.innerHTML="Empty Day value";
	}
	else
	{
		if (day<1 || day>31) {
			msg.innerHTML="Invalid day";
		}
	}
}

function month()
{
	var month = document.getElementById('month').value;
	var msg = document.getElementById('dob');
	if (month=="") {
		msg.innerHTML="Empty Month value";
	}
	else
	{
		if (month<1 || day>12) {
			msg.innerHTML="Invalid Month";
		}
	}
}


/*
function password()
{
	var mypass = document.getElementById('password').value;
	var mycpass = document.getElementById('confirmpassword').value;
	var msg = document.getElementById('ePass');


	if (mypass="" || confirmpassword="") {
		msg.innerHTML="Empty Value";
	}
	else
	{
		if (mypass!=mycpass) {
			msg.innerHTML="Password didn't matched";
		}
		else
		{
			msg.innerHTML="";
		}
	}
}*/




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
