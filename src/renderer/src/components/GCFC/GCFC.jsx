import { useState } from 'react'
import CloseIcon from '../icons/close'

function GCFC() {
  const [informacion, setInformacion] = useState([])

  const handleClick = () => {
    window.api.createWindow()
  }

  const handleClick2 = async () => {
    try {
      const datosTipoCambio = await window.api.cargarTc(
        'https://www.sbs.gob.pe/app/pp/sistip_portal/paginas/publicacion/tipocambiopromedio.aspx'
      )
      setInformacion(datosTipoCambio)
    } catch (error) {
      console.error('Error al cargar el tipo de cambio:', error)
      // Manejar el error si es necesario
    }
  }

  return (
    <div className=" h-full w-full flex flex-col">
      <section className=" w-full  h-6 bg-black flex  flex-col">
        <div className="relative ">
          <nav className=" grid items-center justify-center text-[#DDDCDD] Pro-Light  select-none text-sm px-2 border-b border-[#017BCD] relative h-6">
            compras
          </nav>
          <nav className="absolute right-0 grid  top-0 grid-flow-col items-center justify-center  h-6 ">
            <a className=" hover:bg-slate-100  h-full grid w-5 items-center justify-center">
              <CloseIcon className=" w-2 fill-white" />
            </a>
          </nav>
        </div>
      </section>
      <article className=" text-white h-full w-full bg-slate-500 ">
        <div>
          <button onClick={handleClick}>Mostrar Diálogo</button>
        </div>
        <button onClick={handleClick2}> Mostrar tc </button>
        {informacion && <div>{informacion[0]}</div>}
      </article>
    </div>
  )
}

export default GCFC
