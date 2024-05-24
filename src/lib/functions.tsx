export const generarFecha = ()=>{
    const fechaActual = new Date()
    const fecha = new Date()
    const anio = fecha.getFullYear()
    fechaActual.setDate(fechaActual.getDate() - 2)
    const ultimoDiaDelAnio = new Date(anio, 11, 31);
    const formattedDate = fechaActual.toISOString().slice(0, 10)
    const fechamax = fecha.toISOString().slice(0, 10)
    const fechaAnual = ultimoDiaDelAnio.toISOString().slice(0,10)
    return {minDate:formattedDate, maxDate:fechamax, ultimeDate: fechaAnual }
    
}
