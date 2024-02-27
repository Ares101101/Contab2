import Header from './components/Header'
import '../index.css'
import Red from './assets/Control.png'
import Green from './assets/Control (2).png'
import Hellow from './assets/Control (1).png'
import './App.css'
import { useState } from 'react'
import GCFC from './components/GCFC/GCFC'
import Minimize from './components/icons/minimize'
import Maximi from './components/icons/maximize'
import CloseIcon from './components/icons/close'

function App() {
  const [compConc, compConcSect] = useState(false)
  function onComp() {
    if (!compConc) return compConcSect(true)
    else return compConcSect(false)
  }

  return (
    <div className="w-full flex flex-col h-full ">
      <nav
        style={{ '-webkit-app-region': 'drag' }}
        id="navTitle"
        className="flex justify-between bg-[#161716] text-[#DCDCDD] "
      >
        <p className=" ml-2 Pro-Light  select-none text-sm ">Contab 2</p>
        <div className=" flex   h-full">
          <a className=" hover:bg-slate-100  h-full grid w-8 items-center justify-center">
            <Minimize className="w-[10px] fill-white " />
          </a>
          <a className=" hover:bg-slate-100  h-full grid w-8 items-center justify-center">
            <Maximi className=" w-[10px] fill-white " />
          </a>
          <a className=" hover:bg-slate-100  h-full grid w-8 items-center justify-center">
            <CloseIcon className=" w-2 fill-white" />
          </a>
        </div>
      </nav>
      <Header funct={onComp} />
      <div className="">{compConc && <GCFC />}</div>

      <section className="h-5 w-full grid bg-[#0277BC] absolute bottom-0 justify-center Pro-Light select-none text-sm text-[#C9C9C9]">
        creado por Diego Felix Amachi Flores
      </section>
    </div>
  )
}

export default App
