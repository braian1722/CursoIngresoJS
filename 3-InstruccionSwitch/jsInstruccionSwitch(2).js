function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);
switch (mesDelAño){
    case "Julio":
    case "agosto":
        alert ("abrigate que hace frio");
        break;
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "abril":
    case "mayo":
         alert (" todabia no llego el invierno");
         break;
    default:
         alert ("uff que calor hace");       

    
          
}




}//FIN DE LA FUNCIÓN