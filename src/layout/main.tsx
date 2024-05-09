import { useEffect, useState } from 'react'
import { Layout, MainWindows} from '../types/types'
import Account from './account'
import '../styles/main.css'
import CloseIcon from '../icons/logoclose';
import SettingsMain from './settings';

function Main ({
    accounts, 
    layoutOn, 
    mainWindows, 
    setMainWindows,
    crearWindow,
    closewindow,
    isOpenWindow,
}:{ 
    accounts : Layout[]; 
    layoutOn: (i: number, e: number) => void;
    mainWindows:MainWindows[];
    setMainWindows:(MainWindows:MainWindows[]) => void;
    crearWindow:(i:number,e:number)=>MainWindows; 
    closewindow:(id:string)=>void;
    isOpenWindow:(id:string)=>void
},
) {

    const [renderedLayout, setRenderedLayout] = useState(accounts[0])
     
    useEffect(() =>{ 
        accounts.map((l)=>{if(l.on){return setRenderedLayout(l)}})  
    },[accounts]
    )


    return(
        <main className="main text-[#848484] ">
            <Account 
                renderedLayout = {renderedLayout}
                layoutOn={layoutOn} 
                setMainWindows={setMainWindows} 
                mainWindows={mainWindows} 
                crearWindow={crearWindow}
            />
            <div className=' flex overflow-hidden '>
                <SettingsMain >
                    <div>

                    </div>
                </SettingsMain>
                <div className=' w-full '>
                    <div className=' w-full flex h-9 bg-[#252526]'>
                        {   
                            mainWindows && mainWindows.map((main,index)=>(
                                
                                <div 
                                    className={'cursor-pointer justify-between  px-1 relative w-40 items-center h-full  flex  text-xs border-y-[1px] border-r-[1px] border-[#252526]' + (index===0?" ":"") + (main.isopen ? ' bg-[#1e1e1e] text-white' : ' bg-[#2d2d2d]') }     
                                >   <div 
                                        className=' [&>svg]:w-[20px] [&>svg>path]:text-[#007acc] h-full items-center flex '
                                        onClick={()=>{
                                            main.layoutOn(main.puntero.i,main.puntero.e)
                                            isOpenWindow(main.id)
                                        }}
                                    >
                                        {
                                            main.icon
                                        }
                                    </div>
                                    <button 
                                        className='truncate h-full pr-5 w-full overflow-hidden '  
                                        key={index}
                                        onClick={()=>{
                                            main.layoutOn(main.puntero.i,main.puntero.e)
                                            isOpenWindow(main.id)
                                        }}
                                    
                                    >
                                        {main.title}
                                    </button>
                                    <button
                                        className=' min-w-5 h-5 rounded-sm absolute right-1 hover:bg-red-600 hover:text-white ml-1'
                                        onClick={()=>{closewindow(main.id)}} 
                                    >
                                    <CloseIcon className="w-5"/>
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                    <div className=' overflow-hidden w-full h-full'>
                        {
                            mainWindows && mainWindows.map((main,index)=>(
                                <div className={' ' +(main.isopen?" ":"hidden")}>
                                    {main.componente}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Main