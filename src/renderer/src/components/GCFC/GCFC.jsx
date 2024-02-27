import CloseIcon from '../icons/close'
import Maximi from '../icons/maximize'
import Minimize from '../icons/minimize'

function GCFC() {
  return (
    <section className=" w-full h-full grid bg-[#1F1F1F]">
      <div 
        style={{ '-webkit-app-region': 'drag' }}
        id="navTitle"
    >
        <nav className=" grid items-center justify-center text-[#DDDCDD] Pro-Light  select-none text-sm px-2 border-b border-[#017BCD] relative h-5">
          compras
        </nav>
        <nav className="absolute right-0 grid grid-flow-col items-center justify-center  h-5 ">
          <a className=" hover:bg-slate-100  h-full grid w-5 items-center justify-center">
            <Minimize className=" w-[10px] fill-white " />
          </a>
          <a className=" hover:bg-slate-100  h-full grid w-5 items-center justify-center">
            <Maximi className=" w-[10px] fill-white " />
          </a>
          <a className=" hover:bg-slate-100  h-full grid w-5 items-center justify-center">
            <CloseIcon className=" w-2 fill-white" />
          </a>
        </nav>
      </div>

      <section className="grid h-[500px] w-full "></section>
    </section>
  )
}

export default GCFC
