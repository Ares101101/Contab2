import "../styles/App.css";
import { useState } from "react";
import { Settings } from "../types/types";
import TitleBar from "../layout/titlebar";
import Main from "../layout/main";

function App() {


  const [ layouts , setLayout]= useState(Settings.layauts)

  function layoutOn(i: number, e: number) {
    const newLayout = layouts.map((l) => ({
      ...l,
      on: l.index === i,
      pages: l.pages.map((_, index) => index === e)
    }));
    setLayout(newLayout);
  }
  
  return (
    <div className="App text-[#222222] overflow-hidden " >
      <TitleBar layoutOn={layoutOn} />
      <Main layouts = {layouts} layoutOn={layoutOn} /> 
    </div>
  );
}
export default App;
  