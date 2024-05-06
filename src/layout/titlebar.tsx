import '../styles/titlebar.css'
import CloseIcon from '../icons/logoclose'
import MaximiIcon from '../icons/logomaximize'
import MinimizeIcon from '../icons/logominimize'
import Logo from '../icons/logo'
import { appWindow } from '@tauri-apps/api/window'
import { useEffect, useRef, useState } from 'react'
import NavFacturacion from '../components/navFacturacion'
import ExpanIcon from '../icons/logoexpan'
import {  Settings } from '../types/types'
import { pestañas } from '../lib/maps'
import NavGraficos from '../components/navGraficos'
import NavAlmacen from '../components/navAlmacen'
import NavRegistros from '../components/navRegistros'


function TitleBar(
  {  accountOn: accountOn }: {  accountOn: (i: number, e: number) => void }) 
{
    const ref = useRef<HTMLDivElement>(null);
    const [onTitle, setOnTitle]= useState(Settings.navs)
    const [ismax, SetIsmax]= useState<boolean>(false)  

    const minimize = async () => await appWindow.minimize();
    const maximize = async () => await appWindow.toggleMaximize();
    const close =  async() => await appWindow.close();

    const unlisten = async() => await appWindow.onResized(async()=>{
      if(await appWindow.isMaximized()){
        SetIsmax(true)
      }
      else{ SetIsmax(false) }
    });
    unlisten()

    function onNav(i:number){
      const newNav = onTitle.map((_,index)=>{
        if(i===index)return true
        return false
      })
      setOnTitle(newNav)
    }
    function cerrar(){
      const newNav = onTitle.map(()=>{
        return false
      })
      setOnTitle(newNav)
    }
    
    const handleClickOutside = (event:any) => {
      // Verificar si el clic se produjo fuera del componente
      if (ref.current && !ref.current.contains(event.target)) {
        cerrar(); // Llamar a la función onClose
      }
    };
    useEffect(() => {
      
      document.addEventListener('click', handleClickOutside);
      // Remover el listener cuando el componente se desmonta
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [cerrar]);
    
  return (
    <header data-tauri-drag-region className="flex justify-center items-center  relative h-full w-full bg-[#323233] text-[#cccccc]" ref={ref}
    >
        <nav 
          className="flex h-full justify-start items-center  text-[#cccccc] pl-2 absolute left-0"
        >
          {pestañas.map((pestaña, i)=>(
            <div 
            className='h-full flex items-center justify-center cursor-pointer '
            onClick={()=>{
              onTitle[i]?cerrar():onNav(i)
            }}
            key={i}
            >

            <button
              className="px-2 hover:bg-[#ffffff25] rounded-md h-6 grid items-center hover:text-white hover:shadow-xl" 
              
            >
              <p className="  select-none text-xs relative ">{pestaña}</p>
            </button> 
            </div>
          ))}
          <div 
            className='h-full flex items-center justify-center cursor-pointer '
            >
            <button
              className="px-2 hover:bg-[#ffffff25] rounded-md h-6 grid items-center hover:text-white hover:shadow-xl">
              <p className="  select-none text-xs relative ">Ayuda</p>
            </button> 
          </div> 
        </nav>

        <nav   className=" flex items-center gap-2 justify-center h-6 "> 
          <div className='select-none  flex items-center gap-1'>
            <div className=''>           
              <Logo className=" size-4" />
            </div>
            <div className=' text-xs text-[#cccccc]'> 
              Contab 2 
            </div>
          </div>
        </nav>
        
        <section className=' absolute right-0'>
          <section className=" h-9 w-36  grid grid-cols-3 right-0  ">
            <button className=" grid items-center justify-center hover:shadow-xl hover:bg-[#ffffff75] transition duration-100 ease-in-out hover:text-white" onClick={minimize}><MinimizeIcon className=" w-[20px]"/></button>
            <button className=" grid items-center justify-center hover:shadow-xl hover:bg-[#ffffff75] transition duration-100 ease-in-out transform hover:text-white" onClick={maximize}>
              {ismax?<MaximiIcon className=" w-[20px]"/>:<ExpanIcon className=' w-[20px]'/>}
            </button>
            <button className=" grid items-center justify-center hover:shadow-xl hover:bg-red-600 transition duration-100 ease-in-out hover:text-white" onClick={close}><CloseIcon className="  w-[20px]"/></button>
          </section>
        </section>
        {onTitle[0] && <NavFacturacion onSect={cerrar} accountOn={accountOn}/>}
        {onTitle[1] && <NavAlmacen onSect={cerrar} accountOn={accountOn}/>}
        {onTitle[2] && <NavRegistros onSect={cerrar} accountOn={accountOn}/>}
        {onTitle[3] && <NavGraficos onSect={cerrar} accountOn={accountOn}/>}
    </header>
  ) 
}
export default TitleBar

