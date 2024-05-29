import { useState, useEffect } from 'react'
import { layout1, layout2, layout3, layout4, navAlmacen, navFacturacion, navGraficos, navRegistros } from '../lib/maps'
import { icons1, icons2, icons3, icons4 } from '../lib/icons'
import { AppLogicProps, MainWindows, Settings } from '../types/types'

export const useAppLogic = (): AppLogicProps => {
  const [Accounts, setAccount] = useState(Settings.layauts)
  const [mainWindows, setMainWindows] = useState(Settings.MainWindows)

  const accountOn = (i: number, e: number): void => {
    const newLayout = Accounts.map((l) => ({
      ...l,
      on: l.index === i,
      account: l.account.map((_, index) => index === e)
    }))
    setAccount(newLayout)
  }

  const crearWindow = (i: number, e: number): MainWindows => {
    const layouts = [layout1, layout2, layout3, layout4]
    const titles = [navFacturacion, navAlmacen, navRegistros, navGraficos]
    const icons = [icons1, icons2, icons3, icons4]
    const elementoLayout = layouts[i][e]
    const titleLayout = titles[i][e]
    const icon = icons[i][e]
    const newWindow = new MainWindows(titleLayout, { i, e }, elementoLayout, accountOn, true, true, icon)
    return newWindow
  }

  const isOpenWindow = (id: string): void => {
    const newWindow = mainWindows.map((m) => {
      if (m.id === id) {
        return {
          ...m,
          isopen: true,
          ismodified: true
        }
      } else {
        return {
          ...m,
          isopen: false
        }
      }
    })
    setMainWindows(newWindow)
  }

  const closewindow = (id: string): void => {
    const newWindows = mainWindows.filter((m) => m.id !== id)
    console.log(newWindows)
    setMainWindows([...newWindows])
    console.log(mainWindows)
  }

  useEffect(() => {
    const defaultMain = new MainWindows(
      'Emitir comprobante de venta',
      { i: 0, e: 0 },
      layout1[0],
      accountOn,
      true,
      false,
      icons1[0]
    )

    setMainWindows([defaultMain])
  }, [])

  return {
    Accounts,
    mainWindows,
    setAccount,
    setMainWindows,
    accountOn,
    crearWindow,
    isOpenWindow,
    closewindow
  }
}
