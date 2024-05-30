import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import { MainBarProps } from '../types/types'
import CloseIcon from '../icons/logoclose'

const MainBar: React.FC<MainBarProps> = (props) => {
  const {
    mainWindows,
    closewindow,
    isOpenWindow
  } = props
  return (
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
  )
}

export default MainBar
