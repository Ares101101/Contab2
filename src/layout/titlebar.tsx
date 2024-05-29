import '../styles/titlebar.css'
import Logo from '../icons/logo'
import ExpanIcon from '../icons/logoexpan'
import CloseIcon from '../icons/logoclose'
import MaximiIcon from '../icons/logomaximize'
import MinimizeIcon from '../icons/logominimize'
import { pestañas } from '../lib/maps'
import { appWindow } from '@tauri-apps/api/window'
import { UnlistenFn } from '@tauri-apps/api/event'
import { handleErrors } from '../utils/utils'
import { Settings, TitleBarProps } from '../types/types'
import { useEffect, useRef, useState } from 'react'
import NavActive from '../components/NavActiva'

const TitleBar: React.FC<TitleBarProps> = (props) => {
  const {
    accountOn,
    mainWindows,
    setMainWindows,
    crearWindow
  } = props
  const ref = useRef<HTMLDivElement>(null)
  const [onTitle, setOnTitle] = useState(Settings.navs)
  const [ismax, SetIsmax] = useState<boolean>(false)

  const minimize = handleErrors(async () => { await appWindow.minimize() })
  const maximize = handleErrors(async () => { await appWindow.toggleMaximize() })
  const close = handleErrors(async () => { await appWindow.close() })

  const unlisten = async (): Promise<UnlistenFn> => await appWindow.onResized(() => {
    appWindow.isMaximized()
      .then((maximized) => {
        SetIsmax(maximized)
      })
      .catch((error) => {
        console.error('Error al verificar si está maximizado:', error)
      })
  })

  unlisten()
    .then(() => {
      console.log('Listener de redimensionamiento desregistrado correctamente')
    })
    .catch(() => {
      console.error('Error al desregistrar el listener de redimensionamiento')
    })

  const cerrar = (): void => {
    const newNav = onTitle.map(() => {
      return false
    })
    setOnTitle(newNav)
  }

  const onNav = (i: number): void => {
    const newNav = onTitle.map((_, index) => {
      if (i === index) return true
      return false
    })
    setOnTitle(newNav)
  }
  const handleClickOutside = (event: any): void => {
    // Verificar si el clic se produjo fuera del componente
    if ((ref.current != null) && !ref.current.contains(event.target)) {
      cerrar() // Llamar a la función onClose
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    // Remover el listener cuando el componente se desmonta
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <header
      data-tauri-drag-region className='flex justify-center items-center  relative h-full w-full bg-[#323233] text-[#cccccc]' ref={ref}
    >
      <nav
        className='flex h-full justify-start items-center  text-[#cccccc] pl-2 absolute left-0'
      >
        {pestañas.map((pestaña, i) => (
          <div
            className='h-full flex items-center justify-center cursor-pointer '
            onClick={() => {
              onTitle[i] ? cerrar() : onNav(i)
            }}
            key={i}
          >

            <button
              className='px-2 hover:bg-[#ffffff25] rounded-md h-6 grid items-center hover:text-white hover:shadow-xl'
            >
              <p className='  select-none text-xs relative '>{pestaña}</p>
            </button>
          </div>
        ))}
        <div
          className='h-full flex items-center justify-center cursor-pointer '
        >
          <button
            className='px-2 hover:bg-[#ffffff25] rounded-md h-6 grid items-center hover:text-white hover:shadow-xl'
          >
            <p className='  select-none text-xs relative '>Ayuda</p>
          </button>
        </div>
      </nav>

      <nav className=' flex items-center gap-2 justify-center h-6 '>
        <div className='select-none  flex items-center gap-1'>
          <div className=''>
            <Logo className=' size-4' />
          </div>
          <div className=' text-xs text-[#cccccc]'>
            Contab 2
          </div>
        </div>
      </nav>

      <section className=' absolute right-0'>
        <section className=' h-9 w-36  grid grid-cols-3 right-0  '>
          <button
            className=' grid items-center justify-center hover:shadow-xl hover:bg-[#ffffff75] transition duration-100 ease-in-out hover:text-white'
            onClick={minimize}
          >
            <MinimizeIcon className=' w-[20px]' />
          </button>
          <button
            className=' grid items-center justify-center hover:shadow-xl hover:bg-[#ffffff75] transition duration-100 ease-in-out transform hover:text-white'
            onClick={maximize}
          >
            {
              ismax
                ? <MaximiIcon className=' w-[20px]' />
                : <ExpanIcon className=' w-[20px]' />
            }
          </button>
          <button
            className=' grid items-center justify-center hover:shadow-xl hover:bg-red-600 transition duration-100 ease-in-out hover:text-white'
            onClick={close}
          >
            <CloseIcon className='  w-[20px]' />
          </button>
        </section>
      </section>
      <NavActive
        accountOn={accountOn}
        mainWindows={mainWindows}
        setMainWindows={setMainWindows}
        crearWindow={crearWindow}
        cerrar={cerrar}
        onTitle={onTitle}
      />
    </header>
  )
}
export default TitleBar
