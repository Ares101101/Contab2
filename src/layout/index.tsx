import { MainBarProps } from '../types/types'
import MainBar from './mainbar'
import MainLayout from './mainlayout'
import SettingsMain from './settings'

const IndexMain: React.FC<MainBarProps> = (props) => {
  const {
    mainWindows,
    closewindow,
    isOpenWindow
  } = props

  return (
    <div className='overflow-hidden section w-full '>
      <SettingsMain />
      <div className=' overflow-hidden w-full h-full'>
        <MainBar
          mainWindows={mainWindows}
          closewindow={closewindow}
          isOpenWindow={isOpenWindow}
        />
        <MainLayout
          mainWindows={mainWindows}
          closewindow={closewindow}
          isOpenWindow={isOpenWindow}
        />
      </div>
    </div>
  )
}
export default IndexMain
