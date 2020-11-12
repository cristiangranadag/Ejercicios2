/* 2)	Se requiere obtener el área de una circunferencia. Realizar el algoritmo correspondiente. El área de 
    la circunferencia se halla así: PI * R2 también PI * R *R RECUERDE QUE PI=3.1416*/

    let area;
    const pi = 3.1416;
    let r;

    r = Number(prompt("Ingrese radio: "));

    areaCircunferencia(r);

    function areaCircunferencia(r) {
        area = pi * r * r;
        return area;
    }

    alert('El area de una circunferencia: '+area)