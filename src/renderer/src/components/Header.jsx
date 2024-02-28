import { useState } from 'react'
import NavCompras from './navcompras/NavCompras'
import icon from './icons/icon.png'

function Header({ funct }) {
  const [sect, setSect] = useState(false)
  function onSect() {
    if (!sect) return setSect(true)
    else return setSect(false)
  }
  return (
    <nav className="flex h-9 justify-start items-center  text-[#8B8A8A] relative p-0 m-0">
      <a className=' select-none'>
        <img
          src={icon}
          alt=""
          className=" w-7  mx-2 items-center Pro-Light  select-none text-sm "
        />
      </a>

      <a
        className="cursor-pointer px-2 hover:bg-[#1F1F1F] rounded-md hover:text-[#C9C9C9]"
        onClick={onSect}
      >
        <p className="Pro-Light  select-none text-sm ">Compras</p>
      </a>
      <a className="cursor-pointer px-2 hover:bg-[#1F1F1F] rounded-md hover:text-[#C9C9C9]">
        <p className="Pro-Light  select-none text-sm ">Ventas</p>
      </a>
      <a className="cursor-pointer px-2 hover:bg-[#1F1F1F] rounded-md hover:text-[#C9C9C9]">
        <p className="Pro-Light  select-none text-sm ">Hoja de trabajo</p>
      </a>

      {sect && <NavCompras funct={funct} onSect={onSect} />}
    </nav>
  )
}

export default Header
