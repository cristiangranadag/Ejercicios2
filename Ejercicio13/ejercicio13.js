/** 13. Determinar cuánto dinero ahorra una persona en un año si considera que cada semana ahorra 15% de su sueldo 
 *  (considere cuatro semanas por mes y que no cambia el sueldo) */

let ahorra;
let tot;

ahorra = parseFloat(prompt("Ingresar su sueldo: "));

dinero(ahorra);

function dinero(ahorra) {

    tot = (ahorra*0.15) * 4 * 12;
    return tot;
}

document.write("Su ahorra de un año: "+tot)