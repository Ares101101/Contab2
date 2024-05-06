import { ReactElement } from "react"

export interface Layout {
    on: boolean;
    index: number;
    account: boolean[];
}
  
export class Settings {
    static layauts : Layout[] = [
        {on:true, index:0, account:[true, false, false, false, false, false, false]},
        {on:false, index:1, account:[true, false, false, false, false, false, false]},
        {on:false, index:2, account:[true, false, false, false, false, false, false]},
        {on:false, index:3, account:[true, false, false, false, false, false, false]}
    ]
    static navs :boolean[]=[
        false,
        false,
        false,
        false,
        false
    ]
    static MainWindows: MainWindows[]
}


export class MainWindows{
    title: string
    puntero: {i: number, e: number} 
    componente: ReactElement
    isopen: boolean
    ismodified: boolean
    layoutOn:(i: number, e: number)=>void

    constructor(
        title:string, 
        puntero: {i: number, e: number}, 
        componente: JSX.Element,
        layoutOn:(i: number, e: number)=>void,
        isopen: boolean,
        ismodified: boolean,
    )
        {
            this.title = title;
            this.puntero = puntero;
            this.componente = componente;
            this.layoutOn = layoutOn
            this.isopen = isopen
            this.ismodified = ismodified
        }
}
