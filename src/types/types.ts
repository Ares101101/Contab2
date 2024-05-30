import { ReactElement } from 'react'

export interface Layout {
  on: boolean
  index: number
  account: boolean[]
}
export interface CardProductoProps {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]

}

export interface MyFormInputs {
  date: object
}

export interface NavActiveProps {
  accountOn: (i: number, e: number) => void
  mainWindows: MainWindows[]
  setMainWindows: (MainWindows: MainWindows[]) => void
  crearWindow: (i: number, e: number) => MainWindows
  cerrar: () => void
  onTitle: boolean[]
}
export interface NavFacturacionProps {
  onSect: () => void
  accountOn: (i: number, e: number) => void
  crearWindow: (i: number, e: number) => MainWindows
  setMainWindows: (MainWindows: MainWindows[]) => void
  mainWindows: MainWindows[]
}

export interface TitleBarProps {
  accountOn: (i: number, e: number) => void
  mainWindows: MainWindows[]
  setMainWindows: (MainWindows: MainWindows[]) => void
  crearWindow: (i: number, e: number) => MainWindows
}

export interface AccountProps {
  mainWindows: MainWindows[]
  renderedLayout: Layout
  layoutOn: (i: number, e: number) => void
  setMainWindows: (setMainWindows: MainWindows[]) => void
  crearWindow: (i: number, e: number) => MainWindows
}

export interface MainProps {
  accounts: Layout[]
  layoutOn: (i: number, e: number) => void
  mainWindows: MainWindows[]
  setMainWindows: (MainWindows: MainWindows[]) => void
  crearWindow: (i: number, e: number) => MainWindows
  closewindow: (id: string) => void
  isOpenWindow: (id: string) => void
}

export interface MainBarProps {
  mainWindows: MainWindows[]
  closewindow: (id: string) => void
  isOpenWindow: (id: string) => void
}

export interface ProductosProps {
  sumarItems: (item: { id: number, title: string, price: number }) => void
}

export interface IconsProps {
  className?: string
  index?: number
}

export interface FacturaBoletaProps {
  state: Producto[]
}

export interface NavAlmacenProps {
  onSect: () => void
  accountOn: (i: number, e: number) => void
  mainWindows: MainWindows[]
  setMainWindows: (MainWindows: MainWindows[]) => void
  crearWindow: (i: number, e: number) => MainWindows
}

export interface NavAyudaProps {
  funct: () => void
  onSect: () => void
  layoutOn: (i: number, e: number) => void
}

export interface AppLogicProps {
  Accounts: Account[]
  mainWindows: MainWindows[]
  setAccount: React.Dispatch<React.SetStateAction<Account[]>>
  setMainWindows: React.Dispatch<React.SetStateAction<MainWindows[]>>
  accountOn: (i: number, e: number) => void
  crearWindow: (i: number, e: number) => MainWindows
  isOpenWindow: (id: string) => void
  closewindow: (id: string) => void
}

export interface FechaGenerada {
  minDate: string
  maxDate: string
  ultimeDate: string
}

interface Account {
  on: boolean
  index: number
  account: boolean[]
}

interface Producto {
  id: number
  title: string
  cantidad: number
  price: number
}
export const Settings = {
  layauts: [
    { on: true, index: 0, account: [true, false, false, false, false, false, false] },
    { on: false, index: 1, account: [true, false, false, false, false, false, false] },
    { on: false, index: 2, account: [true, false, false, false, false, false, false] },
    { on: false, index: 3, account: [true, false, false, false, false, false, false] }
  ],

  navs: [
    false,
    false,
    false,
    false,
    false
  ],

  MainWindows: [] as MainWindows[]
}

export class MainWindows {
  id: string
  title: string
  puntero: { i: number, e: number }
  componente: ReactElement
  isopen: boolean
  ismodified: boolean
  layoutOn: (i: number, e: number) => void
  icon: ReactElement
  constructor (
    title: string,
    puntero: { i: number, e: number },
    componente: ReactElement,
    layoutOn: (i: number, e: number) => void,
    isopen: boolean,
    ismodified: boolean,
    icon: ReactElement
  ) {
    this.id = crypto.randomUUID()
    this.title = title
    this.puntero = puntero
    this.componente = componente
    this.layoutOn = layoutOn
    this.isopen = isopen
    this.ismodified = ismodified
    this.icon = icon
  }
}
