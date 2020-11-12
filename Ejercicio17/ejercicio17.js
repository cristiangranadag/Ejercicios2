/** 17)	 El hotel “Cama Arena” requiere determinar lo que le debe cobrar a un huésped por su estancia en una 
 *      de sus habitaciones. Realice el algoritmo para determinar ese cobro. */

 let dias;
 let cobro;
 let total;

 cobro = Number(prompt("Ingrese cuantos pagar el hotel: "));
dias = Number(prompt("Ingrese número de dias: "))

 hotel(cobro, dias);

 function hotel(cobro, dias) {
     total = cobro * dias;
     return total;
 } 

 alert("Total pagar al hotel: "+total);