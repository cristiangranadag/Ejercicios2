/* 7)	Un productor de leche lleva el registro de lo que produce en litros, pero cuando entrega le pagan en galones. 
    Realice un algoritmo que ayude al productor a saber cuánto recibirá por la entrega de su producción de un día 
    (1 galón = 3.785 litros).*/

let lit;
let pag;
let gal;
let tol;

lit = Number(prompt("Cuantos litros? "));
pag = Number(prompt("Cuantos pagar? "));

leche(lit, pag);

function leche(lit, pag) {
    gal = lit / 3.785;
    tol = gal * pag;
    return tol; 
}

document.write("Total pagar en galones: " +tol);