import '../styles/main.css'
import Account from './account'
import CloseIcon from '../icons/logoclose'
import SettingsMain from './settings'
import { Layout, MainProps } from '../types/types'
import { useEffect, useState } from 'react'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'

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
      <div className='overflow-hidden section w-full '>
        <SettingsMain />
        <div className=' overflow-hidden w-full h-full'>
          <OverlayScrollbarsComponent
            element='div'
            options={{
              scrollbars: {
                theme: 'os-theme-light-mini',
                autoHide: 'leave',
                autoHideDelay: 500
              },
              overflow: { x: 'scroll', y: 'scroll' }
            }}
            defer
            className=' w-full'
          >
            <div className=' w-full flex h-9 bg-[#252526] '>
              {mainWindows.map((main, index) => (

                <div
                  key={index}
                  className={'cursor-pointer justify-between  px-1 relative w-40 items-center h-full  flex  text-xs border-y-[1px] border-r-[1px] border-[#252526]' + (index === 0 ? ' ' : '') + (main.isopen ? ' bg-[#1e1e1e] text-white' : ' bg-[#2d2d2d]')}
                >
                  <div
                    className={' [&>svg]:w-5  h-6 min-w-6 items-center flex  [&>svg]:text-[#007acc]  justify-center rounded-sm mr-1 ' + (main.isopen ? ' bg-[#007acc] [&>svg]:text-white' : ' bg-transparent [&>svg]:text-[#007acc]')}
                    onClick={() => {
                      main.layoutOn(main.puntero.i, main.puntero.e)
                      isOpenWindow(main.id)
                    }}
                  >
                    {
                                main.icon
                            }
                  </div>
                  <button
                    className='truncate h-full pr-5 w-full overflow-hidden '
                    key={index}
                    onClick={() => {
                      main.layoutOn(main.puntero.i, main.puntero.e)
                      isOpenWindow(main.id)
                    }}
                  >
                    {main.title}
                  </button>
                  <button
                    className={' min-w-5 h-5 rounded-sm absolute right-1 hover:bg-red-600 hover:text-white ml-1 ' + (main.isopen ? '' : ' bg-transparent text-transparent')}
                    onClick={() => { closewindow(main.id) }}
                  >
                    <CloseIcon className='w-5' />
                  </button>
                </div>
              ))}
            </div>
          </OverlayScrollbarsComponent>
          <div className=' overflow-hidden w-full h-full  mains '>
            {
              mainWindows.map((main, i) => (
                <div
                  key={i}
                  className={'w-full  ' + (main.isopen ? ' ' : 'hidden')}
                >
                  {main.componente}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  )
}
export default Main
