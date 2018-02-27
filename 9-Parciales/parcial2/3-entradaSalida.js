//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo;
	var ancho;
	var perimetro


	ancho = document.getElementById ("ancho").value;
	largo = document.getElementById ( "largo").value;
	ancho = parseInt (ancho);
	largo = parseInt (largo);
	perimetro = (largo * 2 + ancho * 2);
	alert ("se nesecitan" +  perimetro  +  "de alambre");
	 
console.log (perimetro)
	
}

