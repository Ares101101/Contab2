import IconSettins from '../icons/iconSeti'
import IconUser from '../icons/iconUser'
import { AccountProps } from '../types/types'
import { icons1, icons2, icons3, icons4 } from '../lib/icons'

const Account: React.FC<AccountProps> = (props) => {
  const {
    renderedLayout,
    layoutOn,
    setMainWindows,
    mainWindows,
    crearWindow
  } = props

  const renderEdita = (i: number, e: number): void => {
    // Verificar si hay alguna ventana modificada
    const isModified = mainWindows.some(m => !m.ismodified)
    // Si hay alguna ventana modificada, agregar una nueva ventana
    if (isModified) {
      // Si no hay ventanas modificadas, actualizar la ventana existente
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
      const newMain = cerrarWindows.map(m => {
        if (!m.ismodified) {
          return {
            ...newWindow,
            ismodified: false,
            id: m.id // Mantener el mismo id del objeto m
          }
        } else {
          return m
        }
      })

      setMainWindows(newMain)
      console.log(newMain)
    } else {
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
      const newMain = [...cerrarWindows, {
        ...newWindow,
        ismodified: false
      }]
      setMainWindows(newMain)
      console.log(newMain)
    }
  }

  return (
    <section className='bg-[#333333] relative flex flex-col align-top '>
      {
                (renderedLayout.index >= 0 && renderedLayout.index < 4) && (
                  <div>
                    {[icons1, icons2, icons3, icons4][renderedLayout.index].map((d, i) => (
                      <article
                        className={'w-full grid justify-center items-center h-12 hover:text-white transition ' + (renderedLayout.account[i] ? 'border-l-2 border-white text-white' : 'border-l-2 border-transparent')}
                        onClick={() => {
                          layoutOn(renderedLayout.index, i)
                          renderEdita(renderedLayout.index, i)
                        }}
                        key={i}
                      >
                        {d}
                      </article>
                    ))}
                  </div>
                )
            }
      <article className=' absolute bottom-0 w-full flex flex-col justify-center items-center'>
        <div className=' w-full grid justify-center items-center h-12 hover:text-[#F6F6F6]'>
          <IconUser className=' w-8' />
        </div>
        <div className=' w-full grid justify-center items-center h-12 hover:text-[#F6F6F6]'>
          <IconSettins className=' w-8' />
        </div>
      </article>
    </section>
  )
}
export default Account
