import "../styles/App.css";
import { useEffect, useState } from "react";
import { MainWindows, Settings } from "../types/types";
import TitleBar from "../layout/titlebar";
import Main from "../layout/main";
import { layout1, layout2, layout3, layout4, navAlmacen, navFacturacion, navGraficos, navRegistros } from "../lib/maps";

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

  function crearWindow(i:number, e:number){
    const layouts = [layout1, layout2, layout3, layout4]
    const titles = [navFacturacion, navAlmacen, navRegistros, navGraficos ]
    const elementoLayout = layouts[i][e]
    const titleLayout = titles[i][e]
    const newWindow = new MainWindows(titleLayout,{i:i,e:e}, elementoLayout, accountOn, true, true)
    return newWindow
  }

  function isModificWindow(id : string, ){
    const newWindow = mainWindows.map((m)=>{
      if(m.id === id){
        return {
          ...m,
          
        }
      }else{
        return m
      }
    })
    console.log(newWindow)
    setMainWindows(newWindow)
   
  }

  function isOpenWindow(id : string, ){
    const newWindow = mainWindows.map((m)=>{
      if(m.id === id){
        return {
          ...m,
          isopen: true,
          ismodified: true
        }
      }else{
        return {
          ...m,
          isopen:false
        }
      }
    })
    setMainWindows(newWindow)
   
  }

  function closewindow(id: string) {
    const newWindows = mainWindows.filter((m) => m.id !== id);
    console.log(newWindows)
    setMainWindows([
      ...newWindows

    ]);
    console.log(mainWindows)
    
}
  useEffect(()=>{
  
   if(true){
    const defaultMain = new MainWindows("Emitir comprobante de venta",{i:0,e:0}, layout1[0], accountOn, true, false)

    setMainWindows([defaultMain])
   }else{
    setMainWindows([])
   }
    
  },[])
  
  return (
    <div className="App text-[#222222] overflow-hidden " >
      <TitleBar 
        accountOn={accountOn}
        mainWindows={mainWindows} 
        setMainWindows={setMainWindows}
        crearWindow={crearWindow}
      />
      <Main 
        accounts = {Accounts} 
        mainWindows={mainWindows} 
        layoutOn={accountOn}  
        setMainWindows={setMainWindows}
        crearWindow={crearWindow}
        isModificWindow={isModificWindow}
        closewindow={closewindow} 
        isOpenWindow={ isOpenWindow}
      /> 
    </div>
  );
}
export default App;
  