function Shutdown()
{
	document.body.style.backgroundColor = document.body.style.backgroundColor == "black" ? "white" : "black";
}
function ValidateLogInForm(securitylevel)
{
	var username = document.login.username.value;
	var passwordLength = document.login.password.value.length;
	var valid=false;
	if (username == "")
	{
		document.getElementById("blankusername").style.display="block";
	}
	else
	{
		document.getElementById("blankusername").style.display="none";
		valid=true;
	}
	if (passwordLength < 8)
	{
		document.getElementById("shortpassword").style.display="block";
		valid=false;
	}
	else
	{
		document.getElementById("shortpassword").style.display="none";
	}
	if (valid == true)
	{
		if (securitylevel == 0)
		{
			alert("AUTHENTICATION ACCEPTED. THE TIME AND DATE OF YOUR ACCESS TO THIS FILE HAS BEEN LOGGED AND REPORTED TO THE RECORDS AND INFORMATION SECURITY ADMINISTRATION (RAISA).");
		}
		else
		{
			alert("CREDENTIALS RECOGNIZED. LEVEL " + securitylevel + " CLEARANCE GRANTED.");
			document.getElementById("login").style.display="none";
			document.getElementById("document").style.display="block";
			document.getElementById("counter").style.display="none";
			setTimeout(CensorTimer,10000,'info',40);
		}
	}
	return valid;
}

function ValidateRequestForm()
{
	var lastname = document.requestaccess.lastname.value;
	var firstname = document.requestaccess.firstname.value;
	var middlename = document.requestaccess.middlename.value;
	var nationality = document.requestaccess.nationality.value;
	var email = document.requestaccess.email.value;
	var at = email.indexOf("@");
	var dot = email.lastIndexOf(".");
	var phonenumber = document.requestaccess.phonenumber.value;
	var username = document.requestaccess.username.value;
	var password = document.requestaccess.password.value;
	var confirmpassword = document.requestaccess.confirmpassword.value;
	var facilitynumber = document.requestaccess.facilitynumber.value;
	var reason = document.requestaccess.reason.value;
	var fields = "";
	var numericfields = "";
	var fieldcount = 0;
	var valid = false;
	if (lastname == "")
	{
		fields = fields + "LAST NAME;";
	}
	if (firstname == "")
	{
		fields = fields + "FIRST NAME;";
	}
	if (middlename == "")
	{
		fields = fields + "MIDDLE NAME;";
	}
	if (nationality == "")
	{
		fields = fields + "NATIONALITY;";
	}
	if (email == "")
	{
		fields = fields + "E-MAIL ADDRESS;";
	}
	if (phonenumber == "")
	{
		fields = fields + "MOBILE NUMBER;";
	}
	if (username == "")
	{
		fields = fields + "USERNAME;";
	}
	if (password == "")
	{
		fields = fields + "PASSWORD;";
	}
	if (confirmpassword == "")
	{
		fields = fields + "CONFIRM PASSWORD;";
	}
	if (facilitynumber == "")
	{
		fields = fields + "FACILITY NUMBER;";
	}
	if (reason == "")
	{
		fields = fields + "REASON FOR ACCESS;";
	}
	if (fields !== "")
	{
		document.getElementById("blankfield").style.display="block";
		document.getElementById("blankfield").innerHTML = "&#9679; THE FOLLOWING FIELDS REQUIRE INPUT:<br>" + fields;
	}
	else
	{
		document.getElementById("blankfield").style.display="none";
		valid=true;
	}
	if (isNaN(phonenumber))
	{
		numericfields = numericfields + "MOBILE NUMBER;";
	}
	if (isNaN(facilitynumber))
	{
		numericfields = numericfields + "FACILITY NUMBER;";
	}
	if (numericfields !== "")
	{
		document.getElementById("numericfield").style.display="block";
		document.getElementById("numericfield").innerHTML = "&#9679; THE FOLLOWING FIELDS REQUIRE NUMERIC INPUT:<br>" + numericfields;
		valid = false;
	}
	else
	{
		document.getElementById("numericfield").style.display="none";
	}
	if (email != "" && (at < 1 || dot < at + 2 || dot + 2 >= email.length))
	{
		document.getElementById("invalidemail").style.display="block";
		document.getElementById("invalidemail").innerHTML = "&#9679; INVALID E-MAIL ADDRESS";
		valid = false;
	}
	else
	{
		document.getElementById("invalidemail").style.display="none";
	}
	if (password.length < 8)
	{
		document.getElementById("shortpassword").style.display="block";
		document.getElementById("shortpassword").innerHTML = "&#9679; PASSWORD FIELD REQUIRES 8 CHARACTERS (" + (8 - password.length) + " MORE)";
		valid = false;
	}
	else
	{
		document.getElementById("shortpassword").style.display="none";
	}
	if (password != confirmpassword)
	{
		document.getElementById("passwordmismatch").style.display="block";
		document.getElementById("passwordmismatch").innerHTML = "&#9679; PASSWORD MISMATCH";
		valid = false;
	}
	else
	{
		document.getElementById("passwordmismatch").style.display="none";
	}
	return valid;
}

function ValidateReportForm()
{
	var url = document.problemreport.url.value;
	var description = document.problemreport.description.value;
	var dot = url.lastIndexOf(".");
	var fields = "";
	var valid = false;
	if (url == "")
	{
		fields = fields + "URL;";
	}
	if (description == "")
	{
		fields = fields + "DESCRIPTION;";
	}
	if (fields !== "")
	{
		document.getElementById("blankfield").style.display="block";
		document.getElementById("blankfield").innerHTML = "&#9679; THE FOLLOWING FIELDS REQUIRE INPUT:<br>" + fields;
	}
	else
	{
		document.getElementById("blankfield").style.display="none";
		valid=true;
	}
	if (url != "" && (dot < 1 || dot + 2 >= url.length))
	{
		document.getElementById("invalidurl").style.display="block";
		document.getElementById("invalidurl").innerHTML = "&#9679; INVALID URL";
		valid = false;
	}
	else
	{
		document.getElementById("invalidurl").style.display="none";
	}
	return valid;
}
function Show(select)
{
	for(var i=0;i<select.length;i++)
	{
		if(i==select.selectedIndex)
		{
			document.getElementById(select.id+i).style.display="block";
		}
		else
		{
			document.getElementById(select.id+i).style.display="none";
		}
	}
}
function ShowHide(contentid,buttonid,close,access)
{
	if(document.getElementById(contentid).style.display=="none")
	{
		document.getElementById(contentid).style.display="block";
		document.getElementById(buttonid).innerHTML=close;
	}
	else
	{
		document.getElementById(contentid).style.display="none";
		document.getElementById(buttonid).innerHTML=access;
	}
}
function Click(input)
{
	var valid=false;
	document.getElementById("input").innerHTML+=input;
	if(document.getElementById("input").innerHTML.length==4)
	{
		if(document.getElementById("pin").name=='pin1')
		{
			if(document.getElementById("input").innerHTML=="0767")
			{
				valid=true;
			}
		}
		else if(document.getElementById("pin").name=="pin3")
		{
			if(document.getElementById("input").innerHTML=="1234")
			{
				valid=true;
			}
		}
		if(valid==true)
		{
			document.getElementById("pin").style.display="none";
			document.getElementById("login").style.display="block";
		}
		else
		{
		alert("INCORRECT AUTHENTICATION. PLEASE RE-ENTER PSPIN.");
		document.getElementById("input").innerHTML="";
		}
	}
}
function Press(input)
{
	var valid=false;
	if(input.value.length==32)
	{
		alert("INCORRECT AUTHENTICATION. PLEASE RE-ENTER KEYPHRASE.");
		input.value="";
	}
	if(document.getElementById("keyphrase").name=='keyphrase2')
	{
		if((input.value.length==15)&&(input.value=="six six seventh"))
		{
			valid=true;
		}
	}
	else if(document.getElementById("keyphrase").name=="keyphrase4")
	{
		if((input.value.length==27)&&(input.value=="fifth sixth's seventh third"))
		{
			valid=true;
		}
	}
	if(valid==true)
	{
		document.getElementById("keyphrase").style.display="none";
		document.getElementById("login").style.display="block";
	}
}
var counter;
function ShutdownTimer(counterid)
{
	if(document.getElementById(counterid).style.display=="block")
	{
		if(counter==0)
		{
			counter=undefined;
			open('shutdown.html','_top');
		}
		if(counter==undefined)
		{
			counter=61;
		}
		counter--;
		document.getElementById(counterid).innerHTML=counter;
		setTimeout(ShutdownTimer,1000,counterid);
	}
}
var infonumber=0;
function CensorTimer(infoid,infoamount)
{
	if(infonumber<infoamount)
	{
		setTimeout(CensorTimer,10000,infoid,infoamount);
		Censor(infoid+infonumber);
		infonumber++;
	}
	else
	{
		infonumber=0;
		setTimeout(function(){open('shutdown.html','_top');},10000);
	}
}
function Censor(info)
{
	var block="";
	for(i=0;i<document.getElementById(info).innerHTML.length;i++)
	{
		block+="&#9608;";
	}
	document.getElementById(info).innerHTML=block;
}
function OpenCLI()
{
		document.getElementById("cli").style.display="block";
		document.getElementById("clibutton").style.display="none";
}
var blank=0;
function ReadLine(input)
{
	if(input=="intro")
	{
		AccessPage("index.html#about");
	}
	else if(input=="report")
	{
		AccessPage("index.html#reports");
	}
	else if(input=="log")
	{
		AccessPage("index.html#logs");
	}
	else if(input=="scp")
	{
		AccessPage("index.html#SCPs");
	}
	else if(input=="gallery")
	{
		AccessPage("gallery.html");
	}
	else if(input=="livefeed")
	{
		AccessPage("SCP-895.html");
	}
	else if(input=="index")
	{
		AccessPage("index.html");
	}
	else if(input=="about")
	{
		AccessPage("about.html");
	}
	else if(input=="report 143")
	{
		AccessPage("SCP-143testing.html");
	}
	else if(input=="report 3035")
	{
		AccessPage("SCP-3035exploration.html");
	}
	else if(input=="report 3456")
	{
		AccessPage("I-3456-032incident.html");
	}
	else if(input=="report 2446")
	{
		AccessPage("SCP-2446-B4interview.html");
	}
	else if(input=="report 3148")
	{
		AccessPage("SCP-3148supplement.html");
	}
	else if(input=="log item")
	{
		AccessPage("itemlog.html");
	}
	else if(input=="log event")
	{
		AccessPage("eventlog.html");
	}
	else if(input=="log location")
	{
		AccessPage("locationlog.html");
	}
	else if(input=="scp 173")
	{
		AccessPage("SCP-173.html");
	}
	else if(input=="scp 087")
	{
		AccessPage("SCP-087.html");
	}
	else if(input=="scp 2521")
	{
		AccessPage("SCP-2521.html");
	}
	else if(input=="scp 055")
	{
		AccessPage("SCP-055.html");
	}
	else if(input=="scp 093")
	{
		AccessPage("SCP-093.html");
	}
	else if(input=="scp 231")
	{
		AccessPage("SCP-231.html");
	}
	else if(input=="problem")
	{
		AccessPage("problemreport.html");
	}
	else if(input=="help")
	{
		alert("index - index page\nintro - introduction page\nabout - about page\nreport (SCP number) - document related to the SCP item\nlog (item/event/location) - log of items, events, or locations\nscp (SCP number) - article of the SCP item\ngallery - gallery page\nlivefeed - SCP-895 live feed\nproblem - problem report page\nexit (responsive cli only) - closes cli\ndetach (responsive cli only) - closes cli and opens a standalone cli\nclear (standalone cli only) - clears the output");
	}
	else if(input=="exit")
	{
		document.getElementById("cli").value="";
		document.getElementById("cli").style.display="none";
		document.getElementById("clibutton").style.display="block";
		AccessPage("index.html");
	}
	else if(input=="detach")
	{
		document.getElementById("cli").value="";
		document.getElementById("cli").style.display="none";
		document.getElementById("clibutton").style.display="block";
		AccessPage("index.html");
		open("cli.html","_blank");
	}
	else
	{
		if(blank==0)
		{
			AccessPage("blank.html");
			blank=1;
		}
	}
}
function AccessPage(page)
{
	open(page,"content");
	blank=0;
}
function LoadCLI()
{
	document.addEventListener("keyup", function(event)
	{
		event.preventDefault();
		if (event.keyCode == 13)
		{
		document.getElementById("send").click();
		}
	});
}
var line=0;
function Send(input,output)
{
	if(input.value!="")
	{
		output.innerHTML+=input.value+"<br>";
		line++;
		if((input.value=="clear")||(line>48))
		{
			output.innerHTML="";
			line=0;
		}
		else
		{
			ReadLine(input.value);
		}
		input.value="";
	}
}