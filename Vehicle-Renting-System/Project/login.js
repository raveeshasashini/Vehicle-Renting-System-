function check_form() {
	var form1=document.loginForm;
	if(form1.Uname.value=="" || form1.pass.value==""){
		alert("please fill all the fields");
		if(form1.Uname.value=="")
		{
			form1.Uname.focus();
		}
		else
		{
			form1.pass.focus();
		}
	}
	else{
		alert("Thanks for filling the form");
	}
}

