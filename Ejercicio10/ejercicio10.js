/* 10)	 Se requiere determinar el costo que tendrá realizar una llamada telefónica con base en el tiempo que dura 
    la llamada y en el costo por minuto*/

let costo;
let min;
let tot;

costo = Number(prompt("Ingrese cuantos costos? "));
min = Number(prompt("Ingrese cuantos minutos? "));

llamada(costo, min);

function llamada(csoto, min) {
    tot = costo * min;
    return tot;
}

alert('Total al pagar: '+tot)