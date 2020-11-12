/* 11)	 La compañía de luz y sombras (CLS) requiere determinar el pago que debe realizar una persona 
    por el consumo de energía eléctrica, la cual se mide en kilowatts (KW).*/

let kw;
let costo;
let tot;

kw = Number(prompt("Ingrese número de kw: "));
costo = Number(prompt('Ingrese número de costo:'))

energia(kw, costo);

function energia(kw, costo) {
    tot = kw * costo;
    return tot;
}

alert("Total pagar: "+tot)