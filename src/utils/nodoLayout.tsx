import { ReactElement } from "react";
import { layout1, layout2, layout3, layout4 } from "../lib/maps";

class Lista {

    head:Nodo|null;
    constructor() {
        this.head = null;
    }
    
    add(title: string, puntero:{i:number,e:number}, layoutOn:(i: number, e: number)=>void, isopen:boolean, ismodified:boolean): void {

        const layouts = [layout1, layout2, layout3, layout4]
        const elementoLayout = layouts[puntero.i][puntero.e]
         
        const newNode = new Nodo(new Layout(title, puntero, elementoLayout, layoutOn, isopen, ismodified))
        
        if (this.head === null) {
            // Si la lista está vacía, el nuevo nodo será la cabeza
            this.head = newNode;
        } else {
            // Si la lista no está vacía, agregamos el nuevo nodo al final de la lista
            let current = this.head;
            while (current.next !== null) {
                current = current.next; // Avanzar al siguiente nodo
            }
            current.next = newNode; // Agregar el nuevo nodo al final
        }         
    }

    allTitles(){
        const titles:String[] = []
        if (this.head == null) {
            return null
        }
        else {
            let current = this.head;
            titles.push(current.value.title)
            while(current.next !== null){
                current = current.next;
                titles.push(current.value.title)
            } 
        }
        return titles
    }

    allComponentsUserTrabajador(){
        const components: ReactElement[] = []
        if(this.head == null) {
            return null
        }
        else {
            let current = this.head
            components.push(current.value.componente)
            while(current.next !== null){
                current = current.next;
                components.push(current.value.componente)
            } 
        }
        return components
    }
    countTitles(i: number, e: number) {
        let titles: number = 0;
        if (this.head === null) {
            return titles;
        } else {
            let current = this.head;
            if (current.value.puntero.i === i && current.value.puntero.e === e) {
                titles++;
            }
            while (current.next !== null) {
                current = current.next;
                if (current.value.puntero.i === i && current.value.puntero.e === e) {
                    titles++;
                }
            }
        }
        return titles;
    }

}

class Nodo {
    value : Layout
    next : Nodo|null
    constructor (value:Layout, next:Nodo|null = null ){
        this.value = value 
        this.next = next
    }
}

class Layout{
    title: string
    puntero: {i: number, e: number} 
    componente: ReactElement
    isopen: boolean
    ismodified: boolean
    layoutOn:(i: number, e: number)=>void

    constructor(
        title:string, 
        puntero: {i: number, e: number}, 
        componente: ReactElement,
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

const Renderizar = new Lista()

export default Renderizar

