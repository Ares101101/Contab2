// #region imports and props
import styles from '../styles/stylesf.module.css'
import MenorIcon from '../icons/menor'
import { useEffect, useState } from 'react'
import { generarFecha } from '../lib/functions'
import { FacturaBoletaProps } from '../types/types'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

const FacturaBoleta: React.FC<FacturaBoletaProps> = (props) => {
  const { state } = props
  // #region states
  const { register, handleSubmit, setValue } = useForm()
  const [comprobante, setComprobante] = useState('BOLETA DE VENTA')
  const [on, setOn] = useState(false)
  const [date, setDate] = useState({ minDate: '', maxDate: '', ultimateDate: '' })
  // const [fecha, setFecha] = useState('')
  useEffect(() => {
    setValue('comprobante', 'boleta')
    const { minDate, maxDate, ultimeDate } = generarFecha()
    setDate({ minDate, maxDate, ultimateDate: ultimeDate })
  }, [])

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit) /* eslint-disable-line @typescript-eslint/no-misused-promises */}
    >
      <fieldset className={styles.ftitle}>
        <label className={styles.labelTitle}>
          <span
            className={`${styles.spanComprobante} ${(comprobante === 'FACTURA DE VENTA') ? styles.factura : styles.boleta}`}
            onClick={() => { setOn(!on) }}
          >
            <MenorIcon className='w-4' />
          </span>
          <h2 className={(comprobante === 'FACTURA DE VENTA') ? ' text-[#007acc] Pro-Bold text-xl w-full h-full flex items-center justify-center rounded-tl-md select-none' : ' text-[#4caf50]  Pro-Bold text-xl w-full h-full flex items-center justify-center rounded-tl-md select-none'}>
            {comprobante}
          </h2>
        </label>
        <fieldset
          className={on ? 'absolute w-40 p-2 left-0 top-8   flex flex-col  select-none text-[#F6F6F6] border border-[#788284] bg-[#1f1f1f] rounded-md z-10 ' : ' hidden '}

        >
          <legend className=' text-xs px-2'>comprobante</legend>
          <label
            htmlFor='comprobante-factura'
            className=''
          >
            <input
              id='comprobante-factura'
              value='factura'
              type='radio'
              className='rounded-md  text-xs hover:bg-[#007acc50] hover:text-[#F6F6F6] select-none inline'
              onClick={() => {
                setComprobante('FACTURA DE VENTA')
                setOn(!on)
              }}
              {...register('comprobante', { required: true })}
            />Factura
          </label>
          <label htmlFor='comprobante-boleta'>
            <input
              id='comprobante-boleta'
              value='boleta'
              type='radio'
              className='rounded-md  text-xs hover:bg-[#007acc50] hover:text-[#F6F6F6] select-none inline'
              onClick={() => {
                setComprobante('BOLETA DE VENTA')
                setOn(!on)
              }}
              {...register('comprobante', { required: true })}
            />Boleta
          </label>

        </fieldset>
      </fieldset>
      <article className=' flex w-full justify-between'>

        <picture className=' w-auto h-24 flex select-none p-4'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1024px-Coca-Cola_logo.svg.png' alt='' />
        </picture>
        <article className='Pro-Light select-none text-xs  flex flex-col gap-1  p-4 w-1/2 justify-between   '>
          <div className=' h-4 flex items-center font-semibold pl-4'>COCA-COLA SERVICIOS DE PERU S.A </div>
          <div className=' h-4 flex items-center pl-4'>Av. República de Panamá Nro. 4050</div>
          <div className=' h-4 flex items-center pl-4'>Surquillo, Lima, Lima, Perú</div>
        </article>
      </article>
      <article className='w-full h-auto flex flex-col pr-4 gap-1'>
        <label
          htmlFor='fecha'
          className=' select-none h-6 w-full justify-end flex gap-2 bg-[#333333] rounded '
        >
          <div className=' pl-4 h-full w-44 flex text-ellipsis items-center truncate'>
            Fecha de emision :
          </div>
          <input
            type='date'
            min={date.minDate}
            max={date.maxDate}
            required
            className='select-none h-full sm:w-full w-1/2 rounded'
            defaultValue={date.maxDate}
            onChange={() => { /* setFecha(event.target.value) */ }}
          />
        </label>
        <label
          htmlFor='fecha'
          className=' select-none h-6 w-full justify-end flex gap-2 bg-[#333333] rounded '
        >
          <div className=' pl-4 h-full w-44 flex text-ellipsis items-center truncate'>
            Fecha de vencimiento :
          </div>
          <input
            type='date'
            min={date.maxDate}
            max={date.ultimateDate}
            required
            className='select-none h-full sm:w-full w-1/2 rounded'
            defaultValue={date.maxDate}
            onChange={() => { /* setFecha(event.target.value) */ }}
          />
        </label>
        <div className=' flex w-full px-4 text-xs h-6 bg-[#333333] text-[#777777] rounded items-center'>
          RUC:  AAAAAAAAAAAAAAAAAAAAAAAAA
        </div>
        <div className=' flex w-full px-4 text-xs h-6 bg-[#333333] text-[#777777] rounded items-center'>
          Señor(es) AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        </div>
        <div className=' flex w-full px-4 text-xs h-6 bg-[#333333] text-[#777777] rounded items-center'>

          Dirección: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

        </div>
        <div className=' flex w-full px-4 text-xs h-6 bg-[#333333] text-[#777777] rounded items-center'>
          Tipo de moneda : SOL
        </div>
      </article>
      <article className='Pro-Light  select-none text-sm  flex gap-1 pr-4 mt-4 mb-1'>
        <div className={'rounded h-6 flex items-center text-white justify-center w-1/12 overflow-hidden truncate ' + `${(comprobante === 'FACTURA DE VENTA') ? 'bg-[#007acc]' : 'bg-[#4caf50] '}`}>id</div>
        <div className={'rounded h-6 flex items-center text-white justify-center w-6/12 overflow-hidden truncate ' + `${(comprobante === 'FACTURA DE VENTA') ? 'bg-[#007acc]' : 'bg-[#4caf50] '}`}>nombre</div>
        <div className={'rounded h-6 flex items-center text-white justify-center  w-1/12 overflow-hidden truncate ' + `${(comprobante === 'FACTURA DE VENTA') ? 'bg-[#007acc]' : 'bg-[#4caf50] '}`}>cantidad</div>
        <div className={'rounded h-6 flex items-center text-white justify-center  w-2/12 overflow-hidden truncate ' + `${(comprobante === 'FACTURA DE VENTA') ? 'bg-[#007acc]' : 'bg-[#4caf50] '}`}>p. unitario</div>
        <div className={'rounded h-6 flex items-center text-white justify-center  w-2/12 overflow-hidden truncate ' + `${(comprobante === 'FACTURA DE VENTA') ? 'bg-[#007acc]' : 'bg-[#4caf50] '}`}>p. total</div>

      </article>
      <div
        className=' w-full overflow-y-auto max-h-56 '

      >
        <div
          className='w-full gap-1 flex flex-col '
        >
          {
            state?.map(state => (
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
                (state.price * state.cantidad).toFixed(2)
            }
                </div>
              </div>
            ))
        }

        </div>
      </div>
      <article className=' w-full flex flex-col gap-1 mt-1 mb-1'>

        <div className='pr-4 h-6 flex gap-1 Pro-Light select-none text-sm w-full'>
          <div className=' rounded bg-[#333333] h-6 flex items-center justify-center  w-10/12 overflow-hidden truncate '>
            B.I
          </div>
          <div className=' rounded  bg-[#333333] h-6 flex items-center justify-center overflow-hidden truncate  w-[calc(16.666667%-4px)]'>
            {
                            state[0]?.cantidad !== undefined
                              ? `s/${(state.reduce((total, producto) => total + (producto.price * producto.cantidad), 0) / 1.18).toFixed(2)}`
                              : 0
                        }
          </div>
        </div>
        <div className='pr-4 h-6 flex gap-1 Pro-Light select-none text-sm w-full'>
          <div className=' rounded bg-[#333333] h-6 flex items-center justify-center  w-10/12 overflow-hidden truncate '>
            I.G.V
          </div>
          <div className=' rounded bg-[#333333] h-6 flex items-center justify-center overflow-hidden truncate  w-[calc(16.666667%-4px)] '>
            {
                            state[0]?.cantidad !== undefined
                              ? `s/${((state.reduce((total, producto) => total + (producto.price * producto.cantidad), 0) / 1.18) * 0.18).toFixed(2)}`
                              : 0
                        }
          </div>
        </div>
        <div className=' pr-4 h-6 flex gap-1 Pro-Light select-none text-sm w-full'>
          <div className={'rounded h-6 flex items-center text-white justify-center  w-10/12 overflow-hidden truncate ' + `${(comprobante === 'FACTURA DE VENTA') ? 'bg-[]' : 'bg-[#4caf50] '}`}>
            TOTAL
          </div>
          <div className={'rounded h-6 flex items-center text-white justify-center w-[calc(16.666667%-4px)] overflow-hidden truncate ' + `${(comprobante === 'FACTURA DE VENTA') ? 'bg-[#007acc]' : 'bg-[#4caf50] '}`}>
            {
                            state[0]?.cantidad !== undefined
                              ? `s/${state.reduce((total, producto) => total + (producto.price * producto.cantidad), 0).toFixed(2)}`
                              : 0
                        }
          </div>

        </div>
      </article>
      <button className=' select-none text-sm rounded w-full h-12 bg-[#333333] text-white flex justify-center items-center hover:bg-stone-500 cursor-pointer  '>
        EMITIR
      </button>
    </form>
  )
}
export default FacturaBoleta
