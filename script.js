function Calculation() 
{
	let R = document.getElementById("Unit").value;

	if(R<=30)
	{
		
		document.getElementById("result").innerHTML = Number(R)*7.85+"Rs";
	}
	else if(R<=60)
	{
		document.getElementById("result").innerHTML = 235.50+((Number(R)-30)*7.85)+"Rs";
	}
	else if(R<=90)
	{
		document.getElementById("result").innerHTML = 471.00+(Number(R)-60)*10.00+"Rs";
	}
	else if(R<=120)
	{
		document.getElementById("result").innerHTML = 771.00+(Number(R)-90)*27.75+"Rs";
	}
	else
	{
		document.getElementById("result").innerHTML = 1603.50+(Number(R)-120)*32.00+480.00+"Rs";
	}

}