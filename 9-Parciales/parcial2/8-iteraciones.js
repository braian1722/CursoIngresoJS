//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero;
	var contador = 0
	var contadorpares = 0
    var alumno;
	var acumulador;

numero = prompt ("ingrese numero positivos")
numero = parseInt (numero);
while ( numero <0){
	numero = prompt ("error .. ingrese un mnumero positivos")
}

	if (numero % 2 == 0){
		contadorpares ++;
		console.log (numero)
	}

	
}
   

 
