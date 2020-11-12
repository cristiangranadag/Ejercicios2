/* 16)	 Realice el algoritmo para determinar aproximadamente cuántos meses, semanas, días y horas 
    ha vivido una persona.*/

    let mes;
    let sem;
    let dia;
    let hrs;
    let ano;

    ano = Number(prompt("Cuantos año tiene una perosna? "));

    edad(ano);

    function edad(ano) {
        mes = 12 * ano;
        sem = 52.18 * ano;
        dia = 365.25 * ano;
        hrs = 24 * dia;
        return mes, sem, dia, hrs;
    }

    document.write("La persona tiene "+mes+" meses, "+sem+" semanas, "+dia+" dias y "+hrs+" horas.")