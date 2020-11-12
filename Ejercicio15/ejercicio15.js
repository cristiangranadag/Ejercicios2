/** 15)	 Realice el algoritmo para determinar el promedio que obtendrá un alumno considerando que realiza 
 *  tres exámenes, de los cuales el primero y el segundo tienen una ponderación de 25%, mientras que el tercero 
 * de 50%. */

 let nota1;
 let nota2;
 let nota3;
 let promedio;

 nota1 = parseFloat(prompt("Ingresa el primer examen: "));
 nota2 = parseFloat(prompt("Ingresa el segundo examen: "));
 nota3 = parseFloat(prompt("Ingresa el tercer examen: "));

 examenes(nota1, nota2, nota3);

 function examenes(nota1, nota2, nota3) {
     promedio = nota1*0.25 + nota2*0.25 + nota3*.5;
     return promedio;
 }

 document.write("El promedio de 3 examenes: "+promedio)