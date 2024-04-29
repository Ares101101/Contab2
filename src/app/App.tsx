import "../styles/App.css";
import { useState } from "react";
import { Settings } from "../types/types";
import TitleBar from "../layout/titlebar";
import Main from "../layout/main";

function App() {

  const [compConc, compConcSect] = useState(false)
  const [ layouts , setLayout]= useState(Settings.layauts)

  function layoutOn (i:number, e:number){
    const newLayout = layouts.map(l  => {
      if (l.index === i){ 

        const pages = l.pages.map((_,i)=>{
          if(i=== e) return true
          return false
        })
        pages?pages:""
        return {...l, on: true, pages: pages}
      }
      else{ 
        return {...l, on: false}
      }
    })
    setLayout(newLayout) 
    console.log(layouts)
  }

  function onComp() { 
    if (!compConc) return compConcSect(true)
    else return compConcSect(false)
  } 

  return (
    <div className="App text-[#222222] overflow-hidden " >
      <TitleBar funct={onComp} layoutOn={layoutOn} />
      <Main layouts = {layouts} layoutOn={layoutOn} /> 
    </div>
  );
}
export default App;
  