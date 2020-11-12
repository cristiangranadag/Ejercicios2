/* 1)	Se requiere conocer el área de un rectángulo. Realice un algoritmo para tal fin El área del rectángulo 
    se halla así: (base*altura) */

    let a;
    let b;
    let area;
    
    a = Number(prompt("Ingrese altura del rectangulo: "));
    b = Number(prompt("Ingrese base del rectangulo: "));
    
    areaRectangulo(a, b);

    function areaRectangulo(a, b){
        area = a*b;
        return area;
    }

    document.write("La area del rectangulo es "+area);