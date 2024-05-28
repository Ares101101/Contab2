import Lupa from '../icons/logoBusqueda'

const Menu: React.FC = () => {
  return (
    <article className=' flex relative  w-full justify-between bg-[#1f1f1f]  '>

      <nav className='flex h-9 justify-start items-center  text-[#fcfeff] p-0 m-0  left-0'>
        <a
          className='cursor-pointer px-2 hover:bg-[#D2D2D2] rounded-md h-6 grid items-center'
        >
          <p className='Pro-Light  select-none text-sm relative '>Facturacion</p>
        </a>
        <a className='cursor-pointer px-2 hover:bg-[#D2D2D2] rounded-md h-6 grid items-center'>
          <p className='Pro-Light  select-none text-sm '>Almacen</p>
        </a>
        <a className='cursor-pointer px-2 hover:bg-[#D2D2D2] rounded-md h-6 grid items-center '>
          <p className='Pro-Light  select-none text-sm '>Registros</p>
        </a>
        <a className='cursor-pointer px-2 hover:bg-[#D2D2D2] rounded-md h-6 grid items-center '>
          <p className='Pro-Light  select-none text-sm '>Graficos</p>
        </a>
        <a className='cursor-pointer px-2 hover:bg-[#D2D2D2] rounded-md h-6 grid items-center '>
          <p className='Pro-Light  select-none text-sm '>Ayuda</p>
        </a>
      </nav>

      <form className='h-[20px] rounded-xl bg-transparent max-w-[340px] w-full relative focus:border-[#5f6b7a]'>
        <input type='text' placeholder='buscar...' className=' h-full rounded-lg bg-transparent border-2 border-[#5f6b7a] px-2 max-w-[340px] w-full focus:outline-none text-[#5f6b7a] pl-8' />
        <div className=' w-5 h-full absolute  top-0 left-2 text-[#5f6b7a] items-center hidden '>
          <Lupa className=' size-5' />
        </div>
      </form>

    </article>
  )
}

export default Menu
