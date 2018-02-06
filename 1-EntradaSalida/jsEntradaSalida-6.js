/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var number1
    var number2
    number1 = document.getElementById ("numeroUno").value; 
    number2 = document.getElementById ("numeroDos").value; 
    number1 = parseInt (number1);
    number2 = parseInt (number2);
    suma = number1 + number2;
    alert ("la suma es" + suma);

}

