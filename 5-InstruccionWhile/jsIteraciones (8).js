function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';
	while (respuesta == "si")
	{    contador ++;
		respuesta = prompt ("terminar");
		if (respuesta =="si"){
			break
		}
		 numero = prompt ("ingrese un numero");
		 numero = parseInt (numero);
		 while (isNaN(numero)){
			 numero = prompt ("ingrese un numero");
			 numero = parseInt (numero);
		 }
		 if (numero >0){
			 positivo +=numero;
			 positivo + positivo;
			 break;
		 }
		  if (numero!=0){
			 negativo += numero;
			 negativo * negativo;
			 break;
		 }

		
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN