//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{ 
	var nota;
	var sexo;
	var alumnos;
	var acumulador= 0;
	var contador = 0;
	var minimo;
	var maximo;
	var contadorv=0;


	nota = prompt ("ingrese notas del 0 al 10")
	while (nota >10 || nota <0 ){
		nota = prompt (" error ingrese la nota")
	}
	sexo = prompt ("ingrese f para femenino y m para masculino")
	while (sexo != "f" && sexo != "m"){
        sexo = prompt ("error .. ingrese sexo")
	}
	
	contador ++;
	acumulador += nota
	alert (" promedio de notas mas bajas" + nota)

	if (contador == 1){
		minimo = nota
		alert ("nota mas baja" + nota)
	}
	else
	{
		if(nota < minimo)
		minimo  =nota;
	}
	if ( sexo =="m" && nota > 6){
		contadorv ++
		alert (" cantidad de baron con notas mayor a 6"+ nota)
	}
 

}

