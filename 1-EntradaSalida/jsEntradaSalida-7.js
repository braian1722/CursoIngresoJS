/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var number1
    var number2
    number1 = document.getElementById("numeroUno").value;
    number2 = document.getElementById("numeroDos").value;
    number1 = parseInt (number1);
    number2 = parseInt (number2);
    suma = number1 + number2;
    alert ("la suma es" + suma);
	
}

function restar()
{
    var number1
	var number2
    number1 = document.getElementById("numeroUno").value;
    number2 = document.getElementById("numeroDos").value;
    number1 = parseInt (number1);
    number2 = parseInt (number2);
    restar = number1 - number2;
    alert ("la resta es" + restar );

}

function multiplicar()
{ 
    var number1
    var number2
    number1 = document.getElementById("numeroUno").value;
    number2 = document.getElementById("numeroDos").value;
    number1 = parseInt (number1);
    number2 = parseInt (number2);
    multiplicar = number1 * number2;
    alert ("la multiplicacion es" + multiplicar);

    

	
}

function dividir()
{
    var number1
    var number2
    number1 = document.getElementById("numeroUno").value;
    number2 = document.getElementById("numeroDos").value;
    number1 = parseInt (number1);
    number2 = parseInt (number2);
    dividir = number1 / number2;
    alert = ("la resutado es " + dividir);

	
}

