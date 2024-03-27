import { useState } from 'react'
import NavCompras from './navcompras/NavCompras'
import Logo from '../assets/logo'
import PropTypes from 'prop-types'

function Header({ funct }) {
  const [sect, setSect] = useState(false)
  function onSect() {
    if (!sect) return setSect(true)
    else return setSect(false)
  }
  return (
    <nav className="flex h-9 justify-start items-center  text-[#222222] p-0 m-0 absolute left-0">
      <a className=" select-none p-2">
        <Logo className=" min-h-4 min-w-4" />
      </a>

      <a className="cursor-pointer px-2 hover:bg-[#EBEBEB] rounded-md h-6" onClick={onSect}>
        <p className="Pro-Light  select-none text-sm relative ">Compras</p>
      </a>
      <a className="cursor-pointer px-2 hover:bg-[#EBEBEB] rounded-md h-6">
        <p className="Pro-Light  select-none text-sm ">Ventas</p>
      </a>
      <a className="cursor-pointer px-2 hover:bg-[#EBEBEB] rounded-md h-6 ">
        <p className="Pro-Light  select-none text-sm ">Hoja de trabajo</p>
      </a>

      {sect && <NavCompras funct={funct} onSect={onSect} />}
    </nav>
  )
}
Header.propTypes = {
  funct: PropTypes.func.isRequired
}
export default Header
