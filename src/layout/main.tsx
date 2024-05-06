import { ReactElement, useEffect, useState } from 'react'
import { Layout} from '../types/types'
import Account from './account'
import '../styles/main.css'
import { layout1, layout2, layout3, layout4 } from '../lib/maps'


function Main ({layouts, layoutOn}:{ layouts : Layout[]; layoutOn: (i: number, e: number) => void}) {

    const [renderedLayout, setRenderedLayout] = useState(layouts[0])
     
    useEffect(() =>{ 
        layouts.map((l)=>{if(l.on){return setRenderedLayout(l)}})  
    },[layouts]
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
        <Account renderedLayout = {renderedLayout} layoutOn={layoutOn} />
        {   
            renderizar()
        }
        </main>
    )
}
export default Main