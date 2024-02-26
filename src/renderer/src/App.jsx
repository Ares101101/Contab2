import Header from './components/Header'
import '../index.css'
import Red from './assets/Control.png'
import Green from './assets/Control (2).png'
import Hellow from './assets/Control (1).png'
function App() {
  return (
    <div className=" font-mifuente">
      <nav
        style={{ '-webkit-app-region': 'drag' }}
        id="navTitle"
        className="flex justify-between bg-[#070709] text-[#CCCCCD]"
      >
        <p id="title" className="ml-2 select-none">
          Contab 2
        </p>
        <div className=" flex   h-full">
          <a className="h-full grid  items-center px-1 hover:bg-[#50FB7B]">
            <img src={Green} alt="" />
          </a>
          <a className="h-full grid items-center px-1 hover:bg-[#50FB7B]">
            <img src={Hellow} alt="" />
          </a>
          <a className="h-full grid  items-center px-1 hover:bg-[#F87582]">
            <img src={Red} alt="" />
          </a>
        </div>
      </nav>
      <Header />
    </div>
  )
}

export default App
