/* 5)	Un estacionamiento requiere determinar el cobro que debe aplicar a las personas que lo utilizan. Considere 
    que el cobro es con base en las horas que lo disponen y que las fracciones de hora se toman como completas. 
    Realizar el algoritmo que permita determinar el cobro.*/

let hora;
let precio;
let total;

hora = Number(prompt("Cuantos pagar? "));
precio = Number(prompt("Cuantas horas? "));

estacionamiento(hora, precio);

function estacionamiento(hora, precio) {
    total = hora * precio;
    return total;
}

alert('Total precio '+total)