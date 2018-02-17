function Mostrar()
{
    var edad
    var estado
    edad = document.getElementById("edad").value;
    estado = document.getElementById ("estadoCivil").value;
    edad = parseInt (edad)
    if (edad <18 && estado != "soltero" ){
        alert ("es muy pequeño")
    }

//tomo la edad  

	


}//FIN DE LA FUNCIÓN