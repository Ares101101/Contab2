import { navGraficos } from '../lib/maps'
import { MainWindows } from '../types/types'

const NavGraficos = ({
  onSect,
  accountOn,
  mainWindows,
  setMainWindows,
  crearWindow

}: {
  onSect: () => void
  accountOn: (i: number, e: number) => void
  mainWindows: MainWindows[]
  setMainWindows: (MainWindows: MainWindows[]) => void
  crearWindow: (i: number, e: number) => MainWindows

}): JSX.Element => {
  const OnFunct = (): void => {
    onSect()
  }
  const crearWin = (i: number, e: number): void => {
    const newWindow = crearWindow(i, e)
    const cerrarWindows = mainWindows.map((m) => {
      if (m.isopen) {
        return {
          ...m,
          isopen: false
        }
      } else {
        return m
      }
    })
    const newMain = [...cerrarWindows, newWindow]
    setMainWindows(newMain)
    console.log(mainWindows)
  }
  return (
    <section className=' w-80 absolute top-8 left-[216px] border border-[#788284] bg-[#1f1f1f] rounded-md z-10'>
      <nav className='p-2 w-full'>
        {navGraficos.map((b, index) => (
          <button
            className=' select-none text-xs  hover:bg-[#007acc50] hover:text-[#F6F6F6] w-full grid h-6 items-center pl-2  rounded-md justify-start'
            onClick={() => {
              OnFunct()
              accountOn(3, index)
              crearWin(3, index)
            }}
            key={index}
          >
            {b}
          </button>
        ))}
      </nav>
    </section>
  )
}

export default NavGraficos
