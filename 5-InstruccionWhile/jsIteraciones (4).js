function Mostrar()
{
    
	var numero = prompt("ingrese un número entre 0 y 9.");
	while (numero <0 || numero >9){
		numero = prompt (" error..ingrese un numero entre 0 y 9.");
		console.log(numero);
		if (numero == null){
			break;
		}
	}


}//FIN DE LA FUNCIÓN