import Header from './components/Header'
import '../index.css'
import './App.css'
import { useState } from 'react'
import GCFC from './components/GCFC/GCFC'
import Minimize from './components/icons/minimize'
import Maximi from './components/icons/maximize'
import CloseIcon from './components/icons/close'
import Lupa from './components/lupa'

function App() {
  const [compConc, compConcSect] = useState(false)
  function onComp() {
    if (!compConc) return compConcSect(true)
    else return compConcSect(false)
  }

  return (
    <div className="w-full h-screen flex flex-col  ">
      <nav
        style={{ '-webkit-app-region': 'drag' }}
        id="navTitle"
        className="flex justify-center text-[#222222] relative bg-[#F6F6F6] border "
      >
        <Header funct={onComp} />
        <p className=" Pro-Light  select-none text-sm  border border-[#E6E6E6] h-7 hover:bg-[#EBEBEB]   rounded-md px-2 min-w-64 w-full max-w-[30%] justify-center items-center flex gap-2">
          <Lupa fill="currentColor" className=" size-3" /> Contab 2
        </p>
        <div className=" flex   h-full absolute right-0">
          <a className=" hover:bg-slate-100  h-full grid w-8 items-center justify-center">
            <Minimize className="w-2 " />
          </a>
          <a className=" hover:bg-slate-100  h-full grid w-8 items-center justify-center">
            <Maximi className=" w-2" />
          </a>
          <a className=" hover:bg-slate-100  h-full grid w-8 items-center justify-center">
            <CloseIcon className=" w-2 " />
          </a>
        </div>
      </nav>

      <div className="h-full w-full grid  ">{compConc && <GCFC />}</div>

      <section className="h-5 w-full grid bg-[#366af3] absolute bottom-0 justify-center Pro-Light select-none text-sm text-[#C9C9C9]"></section>
    </div>
  )
}

export default App
