import { ComponentType } from 'react'

export class Lista {
  head: Ventana[]
  constructor () {
    this.head = []
  }

  add: (i: number, e: number) => void = () => {}
}

class Ventana {
  navs: string
  puntero: (i: number, e: number) => void
  componente: ComponentType<any> | null

  constructor (navs: string, puntero: (i: number, e: number) => void, componente: ComponentType<any> | null) {
    this.navs = navs
    this.puntero = puntero
    this.componente = componente
  }
}

Lista.prototype.add = function () {

}
