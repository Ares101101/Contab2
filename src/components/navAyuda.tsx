import { NavAyudaProps } from '../types/types'

const NavAyuda: React.FC<NavAyudaProps> = (props) => {
  const { funct, onSect, layoutOn } = props

  const OnFunct = (): void => {
    funct()
    onSect()
  }
  return (
    <section className=' w-80 absolute top-8 left-[277px] border border-[#788284] bg-[#1f1f1f] rounded-md z-10'>
      <nav className='p-2 w-full'>

        <a
          className=' select-none text-xs  hover:bg-[#007acc50] hover:text-[#F6F6F6] w-full grid h-6 items-center pl-2  rounded-md'
          onClick={() => {
            OnFunct()
            layoutOn(4, 0)
          }}
        >
          Emitir Comprobante de Venta
        </a>
        <a
          className=' select-none text-xs  hover:bg-[#007acc50] hover:text-[#F6F6F6] w-full grid h-6 items-center pl-2  rounded-md'
          onClick={() => {
            OnFunct()
            layoutOn(4, 1)
          }}
        >
          Generar compras formato libro
        </a>
        <a
          className=' select-none text-xs  hover:bg-[#007acc50] hover:text-[#F6F6F6] w-full grid h-6 items-center pl-2  rounded-md'
          onClick={() => {
            OnFunct()
            layoutOn(4, 2)
          }}
        >
          Generar compras impresion hoja suelta
        </a>
      </nav>
    </section>
  )
}

export default NavAyuda
