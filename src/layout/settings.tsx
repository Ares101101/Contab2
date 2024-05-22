import { ReactNode, RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react';
import facturas from '../assets/facturas.json' 
import productos from '../assets/products.json'
import FileZipIcon from '../icons/filezipicon';
import CheckIcon from '../icons/checkicon';
import '../styles/Settings.css'
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { event } from '@tauri-apps/api';



const SettingsMain: React.FC = () => {

  const ref = useRef<HTMLDivElement>(null);
  const refRight = useRef<HTMLDivElement>(null);


  useLayoutEffect(()=>{
    const resizeableEle = ref.current
    const resizerRight = refRight.current
    if (!resizeableEle || !resizerRight) return;
  
    let x = 0

    const onMouseMoveRight = ( event: MouseEvent ) => {
      const dx = event.clientX - 48   
      resizeableEle.style.width = `${dx}px`
    } 

    const onMouseUpRight = () => {
      document.removeEventListener("mousemove", onMouseMoveRight)
      document.removeEventListener("mouseup", onMouseUpRight)
      document.body.style.cursor = 'default'
      resizerRight.classList.remove('active')
    }

    const onMoueseDownRight = ( event: MouseEvent ) => {
      x = event.clientX
      document.addEventListener("mousemove", onMouseMoveRight)
      document.addEventListener("mouseup", onMouseUpRight)
      document.body.style.cursor = 'ew-resize'
      resizerRight.classList.add('active')
    }

    resizerRight?.addEventListener("mousedown", onMoueseDownRight)

    return ()=>{
      resizerRight?.removeEventListener("mousedown", onMoueseDownRight)
    }
  },[])
  return (
    <div 
      className='relative bg-[#252526] h-full flex flex-col w-80 overflow-hidden'
      ref={ref} 
    >
      <section className='text-xs px-4 pt-2 min-h-12 text-white items-center flex font-bold'>
          EMITIR NOTA DE CREDITO
      </section>
      <article className='px-4 mr-0 p-0 flex  min-h-12 ' >
          {/*
            <button className='grid items-center justify-center'>
                <MenorIcon className='w-4'/>
            </button>
          */}
          <article className=' w-full h-full flex flex-col gap-1 justify-center items-center'>
              <form className='flex w-full h-7 '>
                  <input type="search" placeholder="Buscar comprobante..." className=' text-sm px-2 rounded bg-[#333333] inputs focus:outline-none focus:ring-[#007acc] focus:ring-1'/>
              </form> 
              {/*
              <form action="" className='flex w-full h-[22px]  '>
                <input type="text" placeholder="Buscar..." className=' text-sm w-full pl-4 rounded'/>
              </form> 
              */}
            </article>
      </article>
      <OverlayScrollbarsComponent 
        element="div"
        options={{ 
          paddingAbsolute:true, 
          scrollbars: { 
            theme:'os-theme-light',
            autoHide: 'leave',
            autoHideDelay: 500,
          
          },
          overflow:{x: 'scroll', y: 'scroll'} 
      }}
        defer
      >
        <div className=" flex flex-col overflow-auto px-4 pb-2">
          {facturas.map((f,i)=>(
              <section 
                className=" min-h-16 flex w-full items-center rounded hover:shadow  hover:bg-white/40 hover:text-white justify-between px-2 group cursor-pointer"
                key={i}
              >
                <article className=" flex justify-start">
                  <div className=' bg-[#4caf50] rounded text-white mr-2'>
                    <FileZipIcon className="w-12 "/>
                  </div>
                  <section className=" flex flex-col items-start justify-evenly">
                    <span className=" whitespace-nowrap text-xs text-amber-200/75 font-extrabold">
                    {f.numero}
                    </span>
                    <span className=" text-xs">
                      {f.RUC}
                    </span>
                  </section>
                </article>
                <article className='flex flex-col items-end justify-evenly min-h-12'>
                  <span className="inline-flex items-center   text-xs font-medium rounded bg-gray-700 max-w-[90px] px-2 w-full justify-between overflow-hidden text-amber-200/75 ">
                      <span>
                        {`s/`}
                      </span>
                      <span >
                        4550400.00
                      </span>                    
                  </span>
                  <span className="  flex text-xs truncate"> 
                    <CheckIcon className="w-3 text-[#4caf50]"/>
                    {`${f.fecha}`}
                  </span>
                </article>
              </section>
          ))} 
        </div>
      </OverlayScrollbarsComponent> 
      <div 
        className='mover'
        ref={refRight}
      >
      </div>       
    </div>  
    )
}

export default SettingsMain