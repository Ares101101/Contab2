// #region imports and props
import { useEffect, useRef, useState } from 'react'
import '../../styles/stylesf.css'
import MenorIcon from '../../icons/menor'
import generarFecha from './fecha'
interface Producto {
    id: number;
    title: string;
    cantidad: number;
    price: number;
  }
  
  interface FacturaBoletaProps {
    state: Producto[];
  }


function FacturaBoleta({state}:FacturaBoletaProps){
    // #region states 
    const [comprobante, setComprobante] =useState("FACTURA DE VENTA")
    const [on, setOn]= useState(false)
    const [date, setDate] = useState({minDate:'', maxDate:''})
    const [fecha, setFecha] = useState('')
    const divRef = useRef<HTMLDivElement>(null);
    const divCont = useRef<HTMLDivElement>(null);
    const [alturas, setAlturas] = useState({ref:0,cont:0});
  
    useEffect(() => {
        if (divCont.current && divRef.current) {
          const alturaCont = divCont.current.clientHeight;
          const alturaRef = divRef.current.clientHeight;
            console.log(fecha)
          if (alturaCont !== alturas.cont || alturaRef !== alturas.ref) {
            setAlturas({
                ref: alturaRef,
                cont: alturaCont
            });
          }
        }
    }, [state.length]);

    useEffect(() => {
        const {minDate ,maxDate}= generarFecha()
        setDate({minDate:minDate, maxDate:maxDate})
    }, [])
    console.log(alturas.cont == alturas.ref, alturas.cont , alturas.ref)
    return(
            <article className=" pl-4 comprobante overflow-y-auto  bg-[#F3F3F3] Pro-Light text-[#333333] flex flex-col Factura pb-4 arti ">
                <section className='w-full h-24  flex justify-between relative bg-white'>
                    <picture className=' w-auto h-24 flex select-none p-4'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1024px-Coca-Cola_logo.svg.png" alt="" />
                    </picture>
                    <section className='min-w-36 w-full max-w-[250px] flex flex-col rounded-md'>
                        <div  className="  justify-center flex items-center rounded-md h-full ">
                            <span className={(comprobante==='FACTURA DE VENTA')?' text-[#007acc] Pro-Bold text-xl w-full h-full flex items-center justify-center rounded-tl-md select-none':' text-[#4caf50]  Pro-Bold text-xl w-full h-full flex items-center justify-center rounded-tl-md select-none'}>
                                {comprobante}
                            </span>
                            <button 
                            className={(comprobante==='FACTURA DE VENTA')?'grid items-center justify-center w-4 h-full bg-[#007acc] focus:text-white text-[#D2D2D2] hover:text-white select-none':'grid items-center justify-center w-4 h-full bg-[#4caf50] focus:text-white text-[#D2D2D2] hover:text-white select-none'}
                            onClick={()=>{setOn(!on)}}
                            >
                                <MenorIcon className='w-4'  />
                            </button>        
                        </div>
                    </section>                
                    <ul className={on?'absolute w-40 h-20 bg-[#F3F3F3] right-0 top-24 flex flex-col rounded-md border border-[#c0c0c0] select-none':' hidden '}>
                        <button 
                            className='rounded-md h-full Pro-Light text-sm hover:bg-white select-none'
                            onClick={()=>{
                                setComprobante("FACTURA DE VENTA")
                                setOn(!on)
                            }}
                        >
                            FACTURA DE VENTA
                        </button>
                        <button 
                            className='rounded-md h-full Pro-Light text-sm hover:bg-white select-none'
                            onClick={()=>
                            {
                                setComprobante("BOLETA DE VENTA")
                                setOn(!on)
                            }}
                        >
                            BOLETA DE VENTA
                        </button>
                    </ul>
                </section>
                <article className='Pro-Light select-none text-sm  flex flex-col gap-1 pr-4 pt-4'>
                    <div className=' h-6 flex items-center Pro-Bold pl-4'>COCA-COLA SERVICIOS DE PERU S.A </div> 
                    <div className=' h-6 flex items-center pl-4'>Av. República de Panamá Nro. 4050</div> 
                    <div className=' h-6 flex items-center pl-4'>Surquillo, Lima, Lima, Perú</div>    
                </article>
                <article className='w-full h-auto flex flex-col pr-4 gap-1'>
                    <div className=' flex w-full h-6 gap-1'>
                        <div className='w-1/2  flex justify-between bg-white px-4 text-sm text-[#777777]'>
                            <div className='h-full flex  overflow-hidden text-ellipsis items-center truncate'>
                                Fecha de emision : 
                            </div>
                            <label 
                            htmlFor="fecha"
                            className=' select-none h-full'
                            >
                            <input 
                                type="date"  
                                min={date.minDate} 
                                max={date.maxDate}
                                required
                                className='select-none h-full'
                                defaultValue={date.maxDate}
                                onChange={(event)=>{setFecha(event.target.value)}}
                                />
                            </label>
                        </div>
                        <div className='w-1/2  flex justify-between bg-white px-4 text-sm text-[#777777] overflow-hidden'>
                            <div className='h-full flex  overflow-hidden text-ellipsis items-center truncate'>
                                Fecha de vencimiento : 
                            </div>
                            <label 
                            htmlFor="fecha"
                            className=' select-none h-full'
                            >
                            <input 
                                type="date"  
                                min={date.maxDate} 
                                required
                                className='select-none h-full'
                                defaultValue={date.maxDate}
                                onChange={(event)=>{setFecha(event.target.value)}}
                                />
                            </label>
                        </div>
                    </div>
                    <div className=' flex w-full px-4 text-sm h-6 bg-white text-[#777777]'>
                        RUC:  AAAAAAAAAAAAAAAAAAAAAAAAA
                    </div>
                    <div className=' flex w-full px-4 text-sm h-6 bg-white text-[#777777]'>
                        {`Señor(es) AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`}
                    </div>
                    <div className=' flex w-full px-4 text-sm h-6 bg-white text-[#777777]'>
                        Dirección: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                    </div>
                    <div className=' flex w-full px-4 text-sm h-6 bg-white text-[#777777]'> 
                        Tipo de moneda : SOL
                    </div>
                </article>
                <article className={'Pro-Light  select-none text-sm  flex gap-1 pr-4 mt-4 mb-1'}>
                    <div className={' h-6 flex items-center text-white justify-center w-1/12 overflow-hidden truncate '+`${(comprobante==='FACTURA DE VENTA')?"bg-[#007acc]":"bg-[#4caf50] "}`}>id</div>
                    <div className={' h-6 flex items-center text-white justify-center w-6/12 overflow-hidden truncate '+`${(comprobante==='FACTURA DE VENTA')?"bg-[#007acc]":"bg-[#4caf50] "}`}>nombre</div> 
                    <div className={' h-6 flex items-center text-white justify-center  w-1/12 overflow-hidden truncate '+`${(comprobante==='FACTURA DE VENTA')?"bg-[#007acc]":"bg-[#4caf50] "}`}>cantidad</div>
                    <div className={' h-6 flex items-center  text-white justify-center  w-2/12 overflow-hidden truncate '+`${(comprobante==='FACTURA DE VENTA')?"bg-[#007acc]":"bg-[#4caf50] "}`}>p. unitario</div>
                    <div className={' h-6 flex items-center text-white justify-center  w-2/12 overflow-hidden truncate '+`${(comprobante==='FACTURA DE VENTA')?"bg-[#007acc]":"bg-[#4caf50] "}`}>p. total</div>

                </article>
                <div 
                className=' w-full overflow-y-auto max-h-56 '
                ref={divCont}
                >   
                    <div 
                        className={'w-full gap-1 flex flex-col ' + `${(alturas.cont === alturas.ref)?' pr-4':' '}` }
                        ref={divRef}
                    >
                        {
                            state && (  
                            state.map(state =>(
                            <div 
                                key={state.id}
                                className=' flex gap-1 Pro-Light text-sm '
                            >
                                <div className='h-6 flex items-center justify-center w-1/12 overflow-hidden truncate  bg-white px-4'>
                                    {state.id}
                                </div>
                                <div className='h-6 flex items-center justify-initial w-6/12 overflow-hidden truncate  bg-white px-4'>
                                    {state.title}
                                </div> 
                                <div className='h-6 flex items-center justify-center w-1/12 overflow-hidden truncate  bg-white px-4'>
                                    {state.cantidad}
                                </div> 
                                <div className='h-6 flex items-center justify-center w-2/12 overflow-hidden truncate  bg-white px-4'>
                                    {state.price.toFixed(2)}
                                </div> 
                                <div className='h-6 flex items-center justify-center w-2/12 overflow-hidden truncate  bg-white px-4'>
                                    {
                                        (state.price *state.cantidad).toFixed(2)
                                    }
                                </div>   
                            </div>   
                            ))
                            )
                        }
                    </div>    
                </div>
                <article className=' w-full flex flex-col gap-1 mt-1 mb-1'>

                    <div className='pr-4 h-6 flex gap-1 Pro-Light select-none text-sm w-full'>
                        <div className=' bg-white h-6 flex items-center justify-center  w-10/12 overflow-hidden truncate '>
                            B.I 
                        </div>
                        <div className='  bg-white h-6 flex items-center justify-center overflow-hidden truncate  w-[calc(16.666667%-4px)]'>
                        {
                            state[0]?.cantidad !== undefined 
                            ? `s/${(state.reduce((total, producto) => total + (producto.price * producto.cantidad), 0) / 1.18).toFixed(2) }`
                            : 0
                        }
                        </div>
                    </div>
                    <div className='pr-4 h-6 flex gap-1 Pro-Light select-none text-sm w-full'>
                        <div className=' bg-white h-6 flex items-center justify-center  w-10/12 overflow-hidden truncate '>
                            I.G.V 
                        </div>
                        <div className='  bg-white h-6 flex items-center justify-center overflow-hidden truncate  w-[calc(16.666667%-4px)] '>
                        {
                            state[0]?.cantidad !== undefined 
                            ? `s/${((state.reduce((total, producto) => total + (producto.price * producto.cantidad), 0) / 1.18) * 0.18).toFixed(2) }`
                            : 0
                        }
                        </div>
                    </div>
                    <div className=' pr-4 h-6 flex gap-1 Pro-Light select-none text-sm w-full'>
                        <div className={' h-6 flex items-center text-white justify-center  w-10/12 overflow-hidden truncate '+`${(comprobante==='FACTURA DE VENTA')?"bg-[#007acc]":"bg-[#4caf50] "}`}>
                                TOTAL 
                        </div>
                        <div className={' h-6 flex items-center text-white justify-center w-[calc(16.666667%-4px)] overflow-hidden truncate '+`${(comprobante==='FACTURA DE VENTA')?"bg-[#007acc]":"bg-[#4caf50] "}`}>
                        {
                            state[0]?.cantidad !== undefined 
                            ? `s/${state.reduce((total, producto) => total + (producto.price * producto.cantidad), 0).toFixed(2)}`
                            : 0
                        }
                        </div>
                        
                    </div>
                </article>    
                <article className=' Pro-Light h-12  select-none text-sm  flex gap-1  pr-4 w-full'>
                    <div className='w-full h-full pr-4 bg-[#333333] text-white flex justify-center items-center hover:bg-stone-500 cursor-pointer  '>
                        EMITIR
                    </div>
                </article>

            </article>
    )
}
export default FacturaBoleta