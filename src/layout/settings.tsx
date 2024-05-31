import '../styles/Settings.css'
import 'overlayscrollbars/overlayscrollbars.css'
import { useRef } from 'react'
import SettingsCompo from '../components/settingsCompo'
import { effectLayout } from '../lib/useAppLogic'

const SettingsMain: React.FC = () => {
  // referencias del div principal y del div para mover
  const ref = useRef<HTMLDivElement>(null)
  const refRight = useRef<HTMLDivElement>(null)

  // effectLayout cambia el tamaño de SettingsMain
  effectLayout(ref, refRight)

  return (
    <div
      className='relative bg-[#252526] h-full flex flex-col w-80 overflow-hidden'
      ref={ref}
    >
      <SettingsCompo />
      <div
        className='mover'
        ref={refRight}
      />
    </div>
  )
}

export default SettingsMain
