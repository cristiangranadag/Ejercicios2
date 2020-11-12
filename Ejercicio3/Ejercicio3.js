/* 3)	De un triángulo se tiene la longitud de la base y la longitud de la altura. Determine el valor de su área.
        El área del triángulo se halla así: (base*altura) /2
 */

 let a;
 let b;
 let areaT;

 a = Number(prompt("Ingrese altura del triangulo:"));
 b = Number(prompt("Ingrese base del triangulo:"));

 areaTriangulo(a, b);

 function areaTriangulo(a, b){
     areaT = (a * b)/2;
     return areaT;
 }

 document.write('El area del Triangulo: '+areaT)