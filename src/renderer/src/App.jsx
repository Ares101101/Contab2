import Header from './components/Header'
import '../index.css'
import './App.css'
import { useState } from 'react'
import GCFC from './components/GCFC/GCFC'
import Lupa from './components/lupa'
import ButtonBar from './buttons/butonsBar'
import Acount from './components/acounts/acount'

function App() {
  const [compConc, compConcSect] = useState(false)
  function onComp() {
    if (!compConc) return compConcSect(true)
    else return compConcSect(false)
  }

  return (
    <div className="w-full h-screen flex flex-col">
      <nav
        style={{ '-webkit-app-region': 'drag' }}
        id="navTitle"
        className="flex justify-center text-[#222222] relative bg-[#F6F6F6] border-b z-10"
      >
        <Header funct={onComp} />
        <p className=" Pro-Light  select-none text-sm  border border-[#E6E6E6] h-7 hover:bg-[#EBEBEB]   rounded-md px-2 min-w-64 w-full max-w-[30%] justify-center items-center flex gap-2">
          <Lupa fill="currentColor" className=" size-3" /> Contab 2
        </p>
        <ButtonBar />
      </nav>
      <Acount/>
      <div className="h-full w-full grid  ">{compConc && <GCFC />}</div>
      <section className="h-5 w-full grid bg-[#0576b8ff] absolute bottom-0 justify-center Pro-Light select-none text-sm text-[#C9C9C9]"></section>
    </div>
  )
}

export default App