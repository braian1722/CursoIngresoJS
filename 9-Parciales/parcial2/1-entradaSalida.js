//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var number1
	var perimetro
	number1 = document.getElementById("lado").value;
	number1 = parseInt (number1);
	perimetro = number1 + number1+ number1+ number1;
	alert ("el perimetro es" + perimetro);
	
}

