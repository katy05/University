function Calculator(fild)
{
    this.numberA=0;
    this.numberB=0;
    this.field=fild;
    this.operation="none";
    this.Nan_Infinity=false;
}

Calculator.prototype.Number=function(number)
{
    if(number=="."  &&  this.field.value.indexOf(".")==-1)
        this.field.value+=".";
    else
        if(this.field.value!=="0"&& number!=".")
            this.field.value+=number;
        else
			if(number!="." )
				this.field.value=number;
};

Calculator.prototype.NumberXNumber=function()
{
    this.field.value=+(this.field.value)*(this.field.value);
    this.operation="none";
	if(isNaN(this.field.value)||this.field.value.search("Inf")!=-1)
	{
		this.Nan_Infinity=true;
		this.NanS();
	}
};

Calculator.prototype.X1Number=function()
{
    this.field.value=1/this.field.value;
    
	if(isNaN(this.field.value)||this.field.value.search("Inf")!=-1)
	{
		this.Nan_Infinity=true;
		this.NanS();
	}
};

Calculator.prototype.Sqrt=function()
{
    this.field.value=Math.sqrt(this.field.value);
    this.operation="none";
	if(isNaN(this.field.value)||this.field.value.search("Inf")!=-1)
	{
		this.Nan_Infinity=true;
		this.NanS();
	}
};
Calculator.prototype.NanS=function()
{
    var buton = document.getElementsByTagName("input");
        for(var i=0; i<buton.length; i++)
        {
			if( buton[i].value =="C" || buton[i].value =="CE")
				buton[i].disabled=false;	
			else			
				buton[i].disabled=(!false);		
        }
	this.field.value="Ошибка";
};
Calculator.prototype.ValiB=function()
{
    var buton = document.getElementsByTagName("input");
        for(var i=0; i<buton.length; i++)        
			buton[i].disabled=false;
    this.operation="none";
	this.Nan_Infinity=false;	
};
Calculator.prototype.X_X=function()
{
    this.field.value=+(this.field.value)*(-1);
	if(isNaN(this.field.value)||this.field.value.search("Inf")!=-1)
	{
		this.Nan_Infinity=true;
		this.NanS();
	}
};

Calculator.prototype.C=function()
{
    this.field.value=0;
	if(this.Nan_Infinity)
		this.ValiB();		
};

Calculator.prototype.Cs=function()
{
    this.field.value=this.field.value.substring(0,this.field.value.length-1);
   
    
    console.log(this.field.value.length);
    console.log(this.field.value.indexOf("."));
    
    
    if(this.field.value=="0.")
       {
       this.field.value=0;
       }
    
    
    if(this.field.value.length==0||this.field.value=="-")
	{
        this.field.value=0;
		if(this.Nan_Infinity)
			this.ValiB();
	}
    
};

Calculator.prototype.CE=function()
{
    this.numberA=0;
    this.numberB=0;
    this.field.value="0";
    this.operation="none";
	if(this.Nan_Infinity)
		this.ValiB();
};

Calculator.prototype.Operation=function(numA,numB)
{
    switch(this.operation)
    {
        case "add":
numA+=+(numB);
            break;
        case "sub":
            numA-=+(numB);
            break;
        case "mul":
            numA*=+(numB);
            break;
        case "div":
            numA/=+(numB);
            break;

        case "pow":
            if(numA==0 && numB==0){
                numA="Ошибка";
                break;
            }
            numA=Math.pow(numA,numB);
            break;
        case "none":
            numA=+(numB);
            break;
    }		
    return numA;
};

Calculator.prototype.Add=function()
{
    this.numberA= +(this.field.value);
    this.numberB = 0;
    this.field.value="";
    this.field.placeholder=this.numberA;
    this.operation="add";
};





Calculator.prototype.Sub=function()
{
    this.numberA= +(this.field.value);
    this.field.value="";
    this.field.placeholder=this.numberA;
    this.operation="sub";
};

Calculator.prototype.Mul=function()
{
    this.numberA= +(this.field.value);
    this.field.value="";
    this.field.placeholder=this.numberA;
    this.operation="mul";
};

Calculator.prototype.Div=function()
{
    this.numberA= +(this.field.value);
    this.field.value="";
    this.field.placeholder=this.numberA;
    this.operation="div";
};

Calculator.prototype.DivE=function()
{
    this.numberB= this.numberB ? this.numberB : this.field.value;
    this.numberA=this.Operation(this.numberA,this.numberB/100);
    this.field.placeholder="";
    this.field.value=this.numberA;
};

Calculator.prototype.Answer=function()
{

    this.numberB= this.numberB ? this.numberB : this.field.value;
    this.numberA=this.Operation(this.numberA,this.numberB);
    this.field.placeholder="";
    this.field.value=this.numberA;


	if(isNaN(this.field.value)||this.field.value.search("Inf")!=-1)
	{
		this.Nan_Infinity=true;
		this.NanS();
	}
};

var calc=new Calculator(document.getElementById("text_field"));
document.getElementById("button-plus").addEventListener("click",    ()=>{calc.Add()});
document.getElementById("button-minus").addEventListener("click",   ()=>{calc.Sub()});
document.getElementById("button-mul").addEventListener("click",     ()=>{calc.Mul()});
document.getElementById("button-div").addEventListener("click",     ()=>{calc.Div()});
document.getElementById("button-dive").addEventListener("click",    ()=>{calc.DivE()});
document.getElementById("button-ans").addEventListener("click",     ()=>{calc.Answer()});
document.getElementById("button-C").addEventListener("click",      ()=>{calc.CE()});
document.getElementById("button-<").addEventListener("click",       ()=>{calc.Cs()});
document.getElementById("button-CE").addEventListener("click",       ()=>{calc.C()});
document.getElementById("button-X").addEventListener("click",       ()=>{calc.X_X()});
document.getElementById("button-sqrt").addEventListener("click",    ()=>{calc.Sqrt()});
document.getElementById("button-1X").addEventListener("click",      ()=>{calc.X1Number()});
document.getElementById("button-xx").addEventListener("click",      ()=>{calc.NumberXNumber()});
document.getElementById("button-1").addEventListener("click",       ()=>{calc.Number("1")});
document.getElementById("button-2").addEventListener("click",       ()=>{calc.Number("2")});
document.getElementById("button-3").addEventListener("click",       ()=>{calc.Number("3")});
document.getElementById("button-4").addEventListener("click",       ()=>{calc.Number("4")});
document.getElementById("button-5").addEventListener("click",       ()=>{calc.Number("5")});
document.getElementById("button-6").addEventListener("click",       ()=>{calc.Number("6")});
document.getElementById("button-7").addEventListener("click",       ()=>{calc.Number("7")});
document.getElementById("button-8").addEventListener("click",       ()=>{calc.Number("8")});
document.getElementById("button-9").addEventListener("click",       ()=>{calc.Number("9")});
document.getElementById("button-0").addEventListener("click",       ()=>{calc.Number("0")});
document.getElementById("button-.").addEventListener("click",       ()=>{calc.Number(".")});
