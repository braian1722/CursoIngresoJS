function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';
	while (respuesta == "si"){
		numero = prompt ("ingrese los numeros");
		if (numero == null){
			break;
		}
		numero = parseInt (numero);
		if (isNaN (numero))
		continue;
		respuesta = prompt ("ingrese otro numero");
		positivo +=numero;
		positivo + positivo;
		negativo += numero;
		negativo * negativo;
		contador++
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN