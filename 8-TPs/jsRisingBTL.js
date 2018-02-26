/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
     var Edad;
     var sexo;
     var sueldo;
     var Estadocivil;
     var legajo;
     var Nacionalidad;

function ComenzarIngreso () 
{
   
      
     
      Edad = prompt ("Edad entre 18 y 90 inclusive");
      Edad = parseInt (Edad);
      while (Edad <= 18  || Edad >= 90 || isNaN (Edad))
            {     
            
            Edad = prompt ("error ingrese una Edad entre 18 y 90 anños")
        
             }
       document.getElementById ("Edad").value = Edad;

      sexo = prompt ("ingrese m para masculino y f para femenino");
      while (sexo !="f" && sexo !="m")
            {
            sexo = prompt (" error ingrese sexo");
         
            }
       document.getElementById ("Sexo").value = sexo

    
     sueldo = prompt ("ingrese su sueldo")
      while ( sueldo < 8000 ){
         sueldo = prompt (" error ingrese su sueldo ")

      }
     document.getElementById ("Sueldo").value = sueldo

      Estadocivil = document.getElementById ("EstadoCivil").value;
      Estadocivil = prompt ("ingrese 1 para soltero 2 para casado 3 para divorciado y 4 para viudo")
      Estadocivil = parseInt (Estadocivil);
       switch (Estadocivil)
       {

           case 1:
           Estadocivil = "soltero"
           break;
           case 2:
           Estadocivil = "casado"
           break;
           case 3:
           Estadocivil = "divorciado"
           break;
           case 4:
           Estadocivil =  "viudo"
           break;
           default:
           
           
       }
       document.getElementById("EstadoCivil").value = Estadocivil
    

     
     legajo = prompt ("ingrese numero de legajo")
      while( legajo <= 4  )
      {
         legajo = prompt ("error.. ingrese su legajo")
       }
        document.getElementById ("Legajo").value = legajo


       Nacionalidad = prompt ("nacionalidad A para argentinos , E para extranjero y N para nacionalizados")
       switch(Nacionalidad){
           case "a":
           Nacionalidad = "argentinos"
           break;
           case "e":
           Nacionalidad= "extrangero"
           break;
           case "n":
           Nacionalidad= "nacionalizados"
           break;
           default:
       }
      document.getElementById ("Nacionalidad").value = Nacionalidad;






}
