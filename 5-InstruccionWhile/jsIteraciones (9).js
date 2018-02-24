function Mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var respuesta='si';
	var maximo;
	var minimo; 

	while(respuesta=="si")

	{   contador ++;
		numero = prompt ("ingrese un numero");
		numero = parseInt (numero);

	}
	while (isNaN(num)){
		continue;
	}
		if (contador ==1 )
		{
			maximo = numero;
			minimo = numero;

		}
		else
		{
			if (numero >maximo)
			{
				maximo = numero;
			}
			 if (numero < minimo)
			{
				minimo = numero;
			
		
		// contador ++
		respuesta = prompt ("para salir ingrese no")
		
			}
		
	
	}
	
	   }

	   document.getElementById("maximo").value= maximo;
	   document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN
