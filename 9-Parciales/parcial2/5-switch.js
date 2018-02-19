//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mesdelaño;
	mesdelaño = prompt ("ingrese el mes");
	switch (mesdelaño){
		case "Enero":
		case "Febrero":
		      alert ("veranitoo");
			  break;
		default:
			  alert("extraño enero y febrero");
	}
	
}

