/* 8)	La compañía de autobuses “La curva loca” requiere determinar el costo que tendrá el boleto de un viaje 
    sencillo, esto basado en los kilómetros por recorrer y en el costo por kilómetro. */

let km;
let costo;
let pagar;

km = Number(prompt("Numero de kilometros: "));
costo = Number(prompt("Numero de costo: "));

auto(km, costo);

function auto(km, costo) {
    pagar = km * costo;
    return pagar;
}

document.write("Total del costo: "+pagar)