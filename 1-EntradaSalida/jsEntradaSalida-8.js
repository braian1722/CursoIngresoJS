/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var number1
    var number2
    nunber1 = document.getElementById("numeroDividendo").value;
    number2 = document.getElementById("numeroDivisor").value;
    number1 = parseInt (number1);
    number2 = parseInt (number2);
    dividir = number1 / number2;
    alert  ("el resto es" + dividir);


    
}
