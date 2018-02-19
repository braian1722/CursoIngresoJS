function Mostrar()
{

var sexo = prompt("ingrese f ó m .");



document.getElementById('Sexo').value=sexo;
while (sexo !="f" && sexo !="m"){
    sexo = prompt ("error...ingrese f o m");
    if(sexo ==null){
        break;
    }
}

}//FIN DE LA FUNCIÓN