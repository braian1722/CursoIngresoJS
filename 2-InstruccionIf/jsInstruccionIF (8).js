function Mostrar()
{
    var edad;
    var estado;
    var edad = document.getElementById("edad").value;
    var estado = document.getElementById("estadoCivil").value;
    edad = parseInt (edad);
    if (edad >18 && estado =="Soltero"){
        alert ("es soltero y no es menor");
    }
//tomo la edad  

	


}//FIN DE LA FUNCIÓN