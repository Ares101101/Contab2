import { ReactElement, useEffect, useState } from 'react'
import { Layout, MainWindows} from '../types/types'
import Account from './account'
import '../styles/main.css'
import { layout1, layout2, layout3, layout4 } from '../lib/maps'


function Main ({
    accounts, 
    layoutOn, 
    mainWindows, 
    setMainWindows,
    crearWindow,
    isModificWindow,
    closewindow,
    isOpenWindow,
}:{ 
    accounts : Layout[]; 
    layoutOn: (i: number, e: number) => void;
    mainWindows:MainWindows[];
    setMainWindows:(MainWindows:MainWindows[]) => void;
    crearWindow:(i:number,e:number)=>MainWindows;
    isModificWindow:(id:string)=>void;
    closewindow:(id:string)=>void;
    isOpenWindow:(id:string)=>void
},
) {

    const [renderedLayout, setRenderedLayout] = useState(accounts[0])
     
    useEffect(() =>{ 
        accounts.map((l)=>{if(l.on){return setRenderedLayout(l)}})  
    },[accounts]
    )


    function renderizar (){
        const Layauts:ReactElement[] = [];
        [layout1, layout2, layout3, layout4][renderedLayout.index].map((d, e) =>
            renderedLayout.account.map((p, i) => {
                if (p && e === i) {
                    Layauts.push(d); // Guarda el valor de d en el array Layauts
                }
                return null;
            })
        );
    return Layauts;
    }

    return(
        <main className="main text-[#848484]">
        <Account 
            renderedLayout = {renderedLayout}
            layoutOn={layoutOn} 
            setMainWindows={setMainWindows} 
            mainWindows={mainWindows} 
            crearWindow={crearWindow}
        />
        <div className=' flex '>
            <div className=' w-full flex '>

                {   
                    mainWindows && mainWindows.map((main,index)=>(
                        <div 
                            className=' flex h-8'     
                        >
                            <div 
                                className={' relative w-28 border border-red-600 h-8 align-middle truncate overflow-hidden ' + (main.isopen ? ' bg-slate-950' : '')}
                                key={index}
                                onClick={()=>{
                                    main.layoutOn(main.puntero.i,main.puntero.e)
                                    isOpenWindow(main.id)
                                }}
                               
                            >
                                {main.title}
                            </div>
                            <button
                                className=' bg-red-600 w-8 '
                                onClick={()=>{closewindow(main.id)}} 
                            >
                                x
                            </button>
                        </div>
                    ))
                }
            </div>
            <div >

            </div>
        </div>
        </main>
    )
}
export default Main