import { MainBarProps } from '../types/types'

const MainLayout: React.FC<MainBarProps> = (props) => {
  const {
    mainWindows
  } = props
  return (
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
  )
}

export default MainLayout
