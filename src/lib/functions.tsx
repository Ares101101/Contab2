export const generarFecha = ()=>{
    const fechaActual = new Date()
    const fecha = new Date()
    fechaActual.setDate(fechaActual.getDate() - 2)
    const formattedDate = fechaActual.toISOString().slice(0, 10)
    const fechaa = fecha.toISOString().slice(0, 10)
    return {minDate:formattedDate, maxDate:fechaa}
  
}
