function getForm()
{
    return document.getElementById("Forms");
}
function Uncheck(form)
{
    form.UserName.value="";
    form.Password.value="";
    form.RePassword.value="";
    form.Names.value="";
    form.Mail.value="";
    form.File.value="";
    form.Date.value="";
    form.CheckIf.checked=false;
}
function Ch(form)
{
    let check=[],i=0,exitForm=true;
    check[i++]=chUserName(form.UserName);
    check[i++]=chPassword(form.Password);
    check[i++]=chPasswordConfirm(form.Password,form.RePassword);
    check[i++]=chName(form.Names);
    check[i++]=chMail(form.Mail);
    check[i++]=chFile(form.File);
    check[i++]=chDate(form.Date);
    check[i++]=chCheckIf(form.CheckIf);
    for(let j=0;j<i;j++)
        if (check[j] === false)
        {
            exitForm = false;
        }
    if(exitForm===false)
    {
      //  alert("Try again");
    }
    else
    {
        Uncheck(form);
        window.location.reload();
    }
}
function chUserName(UserName)
{
    if(UserName.value.length<6)
    {
		UserName.style["boxShadow"]="0 0 6px 2px rgba(250,7,7,0.9)";
    document.getElementById('_1').style.display="block";
        return false;
    }
    else
    {
		UserName.style["boxShadow"]="0 0 6px 2px rgba(7,250,7,0.9)";
    document.getElementById('_1').style.display="none";
        return true;
    }
}
function chPassword(Password)
{
    if(Password.value.length<6)
    {
		Password.style["boxShadow"]="0 0 6px 2px rgba(250,7,7,0.9)";
    document.getElementById('_2').style.display="block";
    Password.value="";
        return false
    }
    else
    {
		Password.style["boxShadow"]="0 0 6px 2px rgba(7,250,7,0.9)";
    document.getElementById('_2').style.display="none";
        return true;
    }
}
function chPasswordConfirm(Password,RePassword)
{
    if(Password.value!==RePassword.value || RePassword.value.length<6)
    {
		RePassword.style["boxShadow"]="0 0 6px 2px rgba(250,7,7,0.9)";
    document.getElementById('_3').style.display="block";
    RePassword.value="";
        return false;
    }
    else
    {
		RePassword.style["boxShadow"]="0 0 6px 2px rgba(7,250,7,0.9)";
    document.getElementById('_3').style.display="none";
        return true;
    }
}
function chName(Names)
{
    if(Names.value.length<2)
    {
		Names.style["boxShadow"]="0 0 6px 2px rgba(250,7,7,0.9)";
    document.getElementById('_4').style.display="block";
        return false;
    }
    else
    {
		Names.style["boxShadow"]="0 0 6px 2px rgba(7,250,7,0.9)";
    document.getElementById('_4').style.display="none";
        return true;
    }
}

function chMail(Mail)
{
  const mailPattern = /^[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,3}$/i;
    if(!mailPattern.test(Mail.value))
    {
		Mail.style["boxShadow"]="0 0 6px 2px rgba(250,7,7,0.9)";
    document.getElementById('_5').style.display="block";
        return false;
    }
    else
    {
		Mail.style["boxShadow"]="0 0 6px 2px rgba(7,250,7,0.9)";
    document.getElementById('_5').style.display="none";
        return true;
    }
}
function chFile(File)
{
    if(File.files.length==0)
	{
		File.style["boxShadow"]="0 0 6px 2px rgba(250,7,7,0.9)";
    document.getElementById('_6').style.display="block";
        return false;
	}
    else
    {
		File.style["boxShadow"]="0 0 6px 2px rgba(7,250,7,0.9)";
    document.getElementById('_6').style.display="none";
        return true;
    }
}
function chDate(Dates)
{
	let date=new Date();
    if(date.getFullYear()-Dates.value.split("-")[0]<12)
    {
		Dates.style["boxShadow"]="0 0 6px 2px rgba(250,7,7,0.9)";
    document.getElementById('_7').style.display="block";
        return false;
    }
    else
    {
		Dates.style["boxShadow"]="0 0 6px 2px rgba(7,250,7,0.9)";
    document.getElementById('_7').style.display="none";
        return true;
    }
}

function chCheckIf(CheckIf)
{
    if(CheckIf.checked!==true)
    {
      CheckIf.style["boxShadow"]="0 0 6px 2px rgba(250,7,7,0.9)";
  document.getElementById('_8').style.display="block";
        return false;
    }
    else
    {
		CheckIf.style["boxShadow"]="0 0 6px 2px rgba(7,250,7,0.9)";
    document.getElementById('_8').style.display="none";
        return true;
    }
}
