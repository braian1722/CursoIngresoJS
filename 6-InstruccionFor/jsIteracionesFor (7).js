function Mostrar()
{
     var repeticiones = prompt ("ingrese un numero");
     var divisores
     
     for (var numero = 1; repeticiones < numero ; numero ++){
         if (numero % 2 == 0){
             console.log(numero);
             divisores ++;
         }
     }
 



}//FIN DE LA FUNCIÓN