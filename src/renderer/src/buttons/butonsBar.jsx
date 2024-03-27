import CloseIcon from '../components/icons/close'
import Maximi from '../components/icons/maximize'
import Minimize from '../components/icons/minimize'

const ButtonBar = () => {
  const minimize = () => {
    window.api.minimize()
  }
  const close = () => {
    window.api.close()
  }
  const maximize = () => {
    window.api.maximize()
  }


  return (
    <div className=" flex   h-full absolute right-0 w-32 justify-between ">
      <a 
        className="hover:bg-[#EBEBEB]  h-full grid w-full items-center justify-center"
        onClick={minimize}
      >
        <Minimize className="w-2 " />
      </a>
      <a 
        className="hover:bg-[#EBEBEB] h-full grid w-full items-center justify-center"
        onClick={maximize}
      >
        <Maximi className=" w-2" />
      </a>
      <a 
        className="hover:bg-red-600 hover:text-[#EBEBEB] h-full grid w-full items-center justify-center"
        onClick={close}
      >
        <CloseIcon className=" w-[9px] " />
      </a>
    </div>
  )
}

export default ButtonBar
