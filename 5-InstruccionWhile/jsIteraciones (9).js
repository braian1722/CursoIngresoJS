function Mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var respuesta='si';
	var maximo;
	var minimo; 

	while(respuesta!='no')
	{   contador ++;
		numero = prompt ("ingrese un numero");
		if (numero==null){
			break;
		}
		numero= parseInt (numero);
		if (isNaN (numero))
		continue;
		respuesta = prompt ("ingrese otro numero");
		if (contador == 1){
			maximo = numero;
			minimo = numero;
		}
		else if(numero <=minimo){
		  minimo = numero
		}else if (numero >=maximo){
		   maximo = numero
		}
		

		


		

	
	}

document.getElementById("maximo").value= maximo;
document.getElementById("minimo").value = minimo;


}//FIN DE LA FUNCIÓN