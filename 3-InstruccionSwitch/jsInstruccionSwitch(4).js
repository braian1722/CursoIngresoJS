function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
alert (mesDelAño)
switch (mesDelAño){
    case "Febrero":
          alert ("este mes tiene 28 dias");
          break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Novienbre":
          alert("este mes tiene 30 dias");
          break;
    default:
          alert ("este mes tiene 31 dias");      

}

//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN