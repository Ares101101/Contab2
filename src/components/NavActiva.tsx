import { NavActiveProps } from '../types/types'
import NavAlmacen from './navAlmacen'
import NavFacturacion from './navFacturacion'
import NavGraficos from './navGraficos'
import NavRegistros from './navRegistros'

const componentMap = [
  NavFacturacion,
  NavAlmacen,
  NavRegistros,
  NavGraficos
]

const NavActive: React.FC<NavActiveProps> = (props) => {
  const {
    onTitle,
    cerrar,
    accountOn,
    mainWindows,
    setMainWindows,
    crearWindow
  } = props
  // Encuentra el índice del primer elemento true en onTitle
  const activeIndex = onTitle.indexOf(true)

  // Si no hay ningún título activo, no renderiza nada
  if (activeIndex === -1) return null

  // Obtiene el componente activo del componentMap
  const ActiveComponent = componentMap[activeIndex]

  return (
    <div>
      <ActiveComponent
        accountOn={accountOn}
        mainWindows={mainWindows}
        setMainWindows={setMainWindows}
        crearWindow={crearWindow}
        onSect={cerrar}
      />
    </div>
  )
}

export default NavActive
