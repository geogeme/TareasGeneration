function weekDay (day, month, year){ 
    const fecha = new Date (year, month -1, day )
    const diasemana = fecha.getDay();

    switch (diasemana) {
        case 0:
            return 'Domingo, día no laborable';
        case 1:
            return 'Lunes, día laborable';
        case 2:
            return 'Martes, día laborable';
        case 3:
            return 'Miércoles, día laborable';
        case 4:
            return 'Jueves, día laborable';
        case 5:
            return 'Viernes, día laborable';
        case 6:
            return 'Sábado, día no laborable';
        default:
            return 'Día inválido';

    }
   
    
}
//console.log(weekDay (29, 2, 2020));
let btnWeekDay= document.getElementById("btnWeekDay");
let txtWeekDay = document.getElementById("txtWeekDay");

btnWeekDay.addEventListener("click", function() {
        txtWeekDay.value= weekDay (document.getElementById("day").value, document.getElementById("month").value, document.getElementById("year").value);
    }
)
