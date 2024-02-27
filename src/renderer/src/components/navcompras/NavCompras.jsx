function NavCompras({funct, onSect}) {
  function OnFunct() {
    funct()
    onSect()
  }
  return (
    <section className=" w-80 absolute top-8  border border-[#424243]  rounded-md bg-[#1F1F1F] z-10">
      <nav className="p-2 w-full">
        <a
          className="Pro-Light  select-none text-sm  hover:bg-[#017BCD] hover:text-[#C9C9C9] w-full grid h-6 items-center pl-2  rounded-md"
          onClick={OnFunct}
        >
          Generar compras formato concar
        </a>
        <a className="Pro-Light  select-none text-sm  hover:bg-[#017BCD] hover:text-[#C9C9C9] w-full grid h-6 items-center pl-2  rounded-md">
          Generar compras formato libro
        </a>
        <a className="Pro-Light  select-none text-sm  hover:bg-[#017BCD] hover:text-[#C9C9C9] w-full grid h-6 items-center pl-2  rounded-md">
          Generar compras impresion hoja suelta
        </a>
      </nav>
    </section>
  )
}

export default NavCompras
