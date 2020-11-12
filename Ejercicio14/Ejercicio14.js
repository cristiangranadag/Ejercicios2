/** 14)	 Una empresa desea determinar el monto de un cheque que debe proporcionar a uno de sus empleados que 
 *      tendrá que ir por equis número de días a la ciudad de Bogotá; los gastos que cubre la empresa son: hotel, 
 *      comida y 200.000 pesos diarios para otros gastos. El monto debe estar desglosado para cada concepto (mostrar 
 *      detalle a detalle y el total) */

 let nroDias;
 let hot;
 let hotDias;
 let comi;
 let comiDias;
 const gas = 200000;
 let gasto;
 let total;

 nroDias = parseInt(prompt("Ingrese cuantos dias de Bogotá? "));
 hot = parseFloat(prompt("Ingrese cuantos pagar el hotel diario? "));
 comi = parseFloat(prompt("Ingrese cuantos pagar comida diario? "));

 empresa(nroDias, hot, comi);

 function empresa(nroDias, hot, comi) {
    
    gasto = gas * nroDias;
    hotDias = hot * nroDias;
    comiDias = comi * nroDias;
    total = hotDias + comiDias + gasto;
    return comiDias, hotDias, gasto, total;

 }

 document.write("Pagar comida: "+comiDias)
 document.write(", el hotel: "+hotDias)
 document.write(", otros gastos: "+gasto)
 document.write(" y total: "+total)
