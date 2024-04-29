import IconSettins from "../icons/iconSeti"
import IconUser from "../icons/iconUser"
import { Layout } from "../types/types"
import { icons1, icons2, icons3, icons4 } from "../lib/icons";

function Account ({renderedLayout, layoutOn}:{ renderedLayout : Layout; layoutOn: (i: number, e: number) => void}){

    return(
        <section className="bg-[#333333] relative flex flex-col align-top ">          
            {
                (renderedLayout.index >= 0 && renderedLayout.index < 4) && (
                    <div>
                        {[icons1, icons2, icons3, icons4][renderedLayout.index].map((d, i) => (
                            <article
                                className={"w-full grid justify-center items-center h-12 hover:text-white transition " + (renderedLayout.pages[i] ? "border-l-2 border-white text-white" : "border-l-2 border-transparent")}
                                onClick={() => layoutOn(renderedLayout.index, i)}
                                key={i}
                            >
                                {d}
                            </article>
                        ))}
                    </div>
                )
            }
            <article className=' absolute bottom-0 w-full flex flex-col justify-center items-center'>
                <div className=" w-full grid justify-center items-center h-12 hover:text-[#F6F6F6]">
                    <IconUser  className=' w-8'/>
                </div>
                <div className=" w-full grid justify-center items-center h-12 hover:text-[#F6F6F6]">
                    <IconSettins  className= ' w-8'/>
                </div>    
            </article>  
        </section>
    )
}
export default Account