//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var importeFinal; 
	var respuesta;
   
	importe = prompt ("ingrese importe")
    importe = parseInt (importe);
    importeFinal = importe * 1.21;
	respuesta = (" el importe es " + importeFinal);

    console.log (importe);

}

