import "../styles/App.css";
import { useEffect, useState } from "react";
import { MainWindows, Settings } from "../types/types";
import TitleBar from "../layout/titlebar";
import Main from "../layout/main";
import { layout1 } from "../lib/maps";

function App() {


  const [ Accounts , setAccount]= useState(Settings.layauts)
  const [ mainWindows, setMainWindows]= useState(Settings.MainWindows)

  function accountOn(i: number, e: number) {
    const newLayout = Accounts.map((l) => ({
      ...l,
      on: l.index === i,
      account: l.account.map((_, index) => index === e)
    }));
    setAccount(newLayout);
  }
  
  useEffect(()=>{
  
   if(true){
    const defaultMain = {
      title:"Emitir comprobante de venta",
      puntero:{i:0,e:0},
      componente:layout1[0],
      layoutOn:accountOn,
      isopen:true,
      ismodified:false
    }
    setAccount([defaultMain])
   }else{
    setAccount([])
   }
    
  },[])
  return (
    <div className="App text-[#222222] overflow-hidden " >
      <TitleBar accountOn={accountOn} />
      <Main accounts = {Accounts} layoutOn={accountOn} /> 
    </div>
  );
}
export default App;
  