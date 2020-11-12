/* 6)	Un amigo suyo acaba de iniciar un negocio de venta de zapatos. Por ahora sólo vende tres tipos de zapatos: 
    sandalias, tenis y mocasines. Cada tipo de zapato lo adquiere a un costo distinto y para venderlos, 
    supone una ganancia del 55%. Cuando un cliente llega debe comprar de los tres tipos de zapatos y la cantidad 
    que desee de cada uno de ellos (si o si el cliente siempre compra los 3 tipos de zapatos). El cliente 
    tiene derecho a un 8% de descuento sobre la compra que realiza. Ayúdele a su amigo a crear un programa que, 
    para un cliente dado, muestre su nombre, el valor de la venta sin descuento, el descuento, valor de la venta 
    con descuento y valor de la venta incluyendo IVA (venta neta final)*/

    let sanCan;
    let tenCan;
    let mocCan;
    let sanPre;
    let tenPre;
    let mocPre;
    let bru1;
    let bru2;
    let bru3;
    let bru;
    let gana;
    let desc;
    let nom;
    let iva;

    nom = (prompt('El nombre del cliente: '))
    sanCan = Number(prompt('Cantidad de sandalias: '));
    sanPre = Number(prompt('Precio de sandalias: '));
    mocCan = Number(prompt('Cantidad de mocasines: '));
    mocPre = Number(prompt('Precio de mocasines: '));
    tenCan = Number(prompt('Cantidad de tenis: '));
    tenPre = Number(prompt('Precio de tenis: '));

    zapatos(sanCan, sanPre, mocCan, mocPre, tenCan, tenPre);
    total(bru1, bru2, bru3);

    function zapatos(sanCan, sanPre, mocCan, mocPre, tenCan, tenPre) {
        bru1 = sanCan * sanPre;
        bru2 = mocCan * mocPre;
        bru3 = tenCan * tenPre;
        return bru1, bru2, bru3;
    }

    function total(bru1, bru2, bru3) {
        bru = bru1 + bru2 + bru3;
        gana = bru + (bru*0.55);
        des = gana*0.08;
        desc = gana - des;
        iva = desc + (desc*0.19);
        return gana, des, desc, iva;
    }

    document.write('El cliente: '+nom);
    document.write(', el valor de venta sin descuento: '+gana);
    document.write(', el descuento: '+des);
    document.write(', el valor de venta con descuento: '+desc);
    document.write(' y el valor de venta IVA (Total): '+iva);
