import { navFacturacion } from "../lib/maps";

function NavFacturacion({  onSect, layoutOn }:{ onSect: ()=>void; layoutOn: (i: number, e: number) => void }) {
  function OnFunct() {
   
    onSect()
  }
  return (
      <section className=" w-80 absolute top-8 left-2  border border-[#788284] bg-[#1f1f1f] rounded-md z-10">
        <nav 
          className="p-2 w-full"
         
        > 
        {navFacturacion.map((b, index)=>( 
          <button
          className=" select-none text-xs  hover:bg-[#007acc50] hover:text-[#F6F6F6] w-full grid h-6 items-center pl-2  rounded-md justify-start"
          onClick={()=>{
            OnFunct()
            layoutOn(0,index)
          }}
          key={index}
        >
          {b}
        </button>
        ))}
          
        </nav>
      </section>
  )
}

export default NavFacturacion
