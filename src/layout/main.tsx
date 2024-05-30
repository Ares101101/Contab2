import '../styles/main.css'
import IndexMain from '.'
import Account from './account'
import { Layout, MainProps } from '../types/types'
import { useEffect, useState } from 'react'

const Main: React.FC<MainProps> = (props) => {
  const {
    accounts,
    layoutOn,
    mainWindows,
    setMainWindows,
    crearWindow,
    closewindow,
    isOpenWindow
  } = props

  const [renderedLayout, setRenderedLayout] = useState(accounts[0])

  useEffect(() => {
    accounts.forEach((l: Layout): void => { if (l.on) { return setRenderedLayout(l) } })
  }, [accounts]
  )

  return (
    <main className='main text-[#777777] '>
      <Account
        renderedLayout={renderedLayout}
        layoutOn={layoutOn}
        setMainWindows={setMainWindows}
        mainWindows={mainWindows}
        crearWindow={crearWindow}
      />
      <IndexMain
        mainWindows={mainWindows}
        closewindow={closewindow}
        isOpenWindow={isOpenWindow}
      />
    </main>
  )
}
export default Main
