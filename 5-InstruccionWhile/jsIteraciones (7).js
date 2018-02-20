function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	
	while (respuesta == "si"){
	numero = prompt ("ingrese los numeros");
	numero = parseInt (numero);
	if (isNaN (numero))
	continue;
	respuesta = prompt ("quieres seguir o no");
	acumulador += numero;
	contador++;
	}
	

	

	



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN