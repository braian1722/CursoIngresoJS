function Mostrar()
{
    var edad
    edad = document.getElementById("edad").value;
    if ( edad > 18 ){
        alert ("mayor")
    }
    else if (edad < 18){
         alert ("es menor")
    } 
    if (edad >13 && edad <17){
        alert ("es adolecente")
    }
    else if (edad <13 && edad >17) {
        alert ("no es adolecente")
    }
    if (edad <13){
        alert ("es niño")
    }
    
//tomo la edad  




}//FIN DE LA FUNCIÓN