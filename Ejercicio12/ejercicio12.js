/* 12)	 Determinar cuánto pagará finalmente una persona por un artículo equis, considerando que tiene 
    un descuento de 20%, y debe pagar 19% de IVA (debe mostrar el precio con descuento y el precio final). */

let cos;
let des;
let iva

cos = Number(prompt("Ingresar costo del articulo: "));

articulo(cos);

function articulo(cos) {
    
    des = cos - (cos * 0.2);
    iva = des + (des * 0.19);
    return des, iva;
}

document.write("El precio con descuento: "+des)
document.write(" y el precio final: "+iva)
