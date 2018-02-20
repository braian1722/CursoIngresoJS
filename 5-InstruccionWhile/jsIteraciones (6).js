function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero,resto;




        
		while(contador<5){
			contador ++;
			numero = prompt ("ingresar 5 numeros");
			numero= parseInt (numero);
			acumulador += numero;
			if (contador == 5){
				break;
			}
		}

		resto = acumulador / contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN