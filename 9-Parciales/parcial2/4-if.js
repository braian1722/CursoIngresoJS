//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()

{
    
	var number1
	var number2
	var respuesta;

	number1 = prompt ("ingrese un numero");
	number2 = prompt (" ingrese otro numero")
	number1 = parseInt (number1);
	number2 = parseInt (number2);

	if(number1 == number2 ) 
	{
		respuesta = number1 * number2
	}

	 else {
	 if (number1 > number2)
	
		respuesta = (number1 - number2 )
        
	}
	if (number1 < number2){
		respuesta = number1 + number2;
	}


console.log (respuesta)
}
document.write("la rspuesta es")= respuesta

