//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{ 
	var nota;
	var sexo;
	var alumnos;
	
	nota = prompt ("ingrese notas del 0 al 10")
	while (nota >10 || nota <0 ){
		nota = prompt (" error ingrese la nota")
	}
	sexo = prompt ("ingrese f para femenino y m para masculino")
	while (sexo != "f" && sexo != "m"){
        sexo = prompt ("error .. ingrese sexo")
	}
	
}

