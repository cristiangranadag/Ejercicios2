/* 9)	Se requiere determinar el tiempo que tarda una persona en llegar de una ciudad a otra en bicicleta, 
    considerando que lleva una velocidad constante */

let t;
let d;
let v;

d = Number(prompt("Ingrese # distancia: "));
v = Number(prompt("Ingrese # velocidad: "));

bici(d, v);

function bici(d, v) {
    t = d/v;
    return t;
}

document.write("El tiempo: "+t);