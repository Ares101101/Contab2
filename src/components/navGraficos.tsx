import { navGraficos } from "../lib/maps";

function NavGraficos({ funct, onSect, layoutOn }:{funct:()=>void; onSect: ()=>void; layoutOn: (i: number, e: number) => void }) {
    function OnFunct() {
      funct()
      onSect()
    }
    return (
        <section className=" w-80 absolute top-8 left-[216px] border border-[#788284] bg-[#1f1f1f] rounded-md z-10">
          <nav className="p-2 w-full">
            {navGraficos.map((b, index)=>( 
              <button
              className=" select-none text-xs  hover:bg-[#007acc50] hover:text-[#F6F6F6] w-full grid h-6 items-center pl-2  rounded-md justify-start"
              onClick={()=>{
                OnFunct()
                layoutOn(3,index)
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
  
  export default NavGraficos
  