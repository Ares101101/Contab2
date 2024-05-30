// #region imports and props
import styles from '../styles/stylesf.module.css'
import MenorIcon from '../icons/menor'
import { useEffect, useState } from 'react'
import { generarFecha } from '../lib/functions'
import { FacturaBoletaProps } from '../types/types'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

const FacturaBoleta: React.FC<FacturaBoletaProps> = (props) => {
  const { state } = props
  const [comprobante, setComprobante] = useState('BOLETA DE VENTA')
  const [on, setOn] = useState(false)
  const [date, setDate] = useState({ minDate: '', maxDate: '', ultimateDate: '' })
  // #region states
  const { maxDate } = generarFecha()
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      comprobante: 'boleta',
      emisor: 'COCA-COLA SERVICIOS DE PERU S.A',
      direccion_emisor: 'Av. República de Panamá Nro. 4050 Surquillo, Lima, Lima, Perú ',
      fecha_de_emision: maxDate,
      fecha_de_vencimiento: maxDate,
      documento: 'L.E/DNI',
      documento_num: '',
      cliente: '',
      direccion: '',
      moneda: 'SOL'
    }
  })
  // const [fecha, setFecha] = useState('')
  useEffect(() => {
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
          <h2 className={`${styles.titlecomprobante} ${(comprobante === 'FACTURA DE VENTA') ? styles.facturat : styles.boletat}`}>
            {comprobante}
          </h2>
        </label>
        <fieldset
          className={(on) ? styles.ventana : styles.ocultar}

        >
          <legend className={styles.legendtext}>Comprobante</legend>
          <label
            htmlFor='comprobante-factura'
          >
            <input
              id='comprobante-factura'
              value='factura'
              type='radio'
              className={styles.inputradio}
              onClick={() => {
                setComprobante('FACTURA DE VENTA')
                setOn(!on)
              }}
              {...register('comprobante', { required: true })}
              required
            />Factura
          </label>
          <label
            htmlFor='comprobante-boleta'
          >
            <input
              id='comprobante-boleta'
              value='boleta'
              type='radio'
              className={styles.inputradio}
              onClick={() => {
                setComprobante('BOLETA DE VENTA')
                setOn(!on)
              }}
              {...register('comprobante', { required: true })}
              required
            />Boleta
          </label>

        </fieldset>
      </fieldset>
      <fieldset className={styles.article}>
        <picture className={styles.picture}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1024px-Coca-Cola_logo.svg.png' alt='logo_De_Empresa' />
        </picture>
        <article className={styles.dataEmpresa}>
          <label
            className={styles.label}
            {...register('emisor')}
          >
            COCA-COLA SERVICIOS DE PERU S.A
          </label>
          <label
            {...register('direccion_emisor')}
          >
            Av. República de Panamá Nro. 4050
          </label>
          <label>
            Surquillo, Lima, Lima, Perú
          </label>
        </article>
      </fieldset>
      <fieldset className='w-full h-auto flex flex-col gap-1'>
        <label
          htmlFor='fecha'
          className=' select-none h-6 w-full justify-end flex gap-2 bg-[#333333] rounded relative'
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
            {...register('fecha_de_emision', {
              required: true
            })}
          />
          {(errors.fecha_de_emision != null) && <span className=' text-red-600 absolute right-2 top-2'>fecha de emision requrida</span>}
        </label>
        <label
          htmlFor='fecha'
          className=' select-none h-6 w-full justify-end flex gap-2 bg-[#333333] rounded relative'
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
            {...register('fecha_de_vencimiento', {
              required: true
            })}
          />
          {(errors.fecha_de_vencimiento != null) && <span className=' text-red-600 absolute right-2 top-2'>fecha de vencimiento requrida</span>}
        </label>
        <label
          className=' flex w-full  text-xs h-6 bg-[#333333] text-[#777777] rounded items-center'

        >
          <input
            className=' w-full h-full pl-32 rounded bg-transparent'
            type='number'
            {...register('documento_num', {
              required: true
            })}
            required
          />
          {(comprobante === 'FACTURA DE VENTA')
            ? <select className='absolute pl-4 h-6 bg-transparent' {...register('documento', { required: true })}><option value='Ruc'> RUC:</option></select>
            : <select className='absolute pl-4 h-6 bg-transparent' {...register('documento', { required: true })}><option value='L.E/DNI'>L.E / DNI:</option><option value='C.E'>CARNET EXT:</option><option value='PA'>PASAPORTE:</option></select>}
        </label>
        <label
          className=' flex w-full text-xs h-6 bg-[#333333] text-[#777777] rounded items-center relative'

        >
          <input
            type='text'
            {...register('cliente', {
              required: true
            })}
            required
            className=' w-full h-full rounded bg-transparent pl-20'
          />
          <div className='absolute left-4'>
            Señor(es):
          </div>
        </label>
        <label className=' flex w-full text-xs h-6 bg-[#333333] text-[#777777] rounded items-center relative'>
          <input
            type='text'
            {...register('direccion', {
              required: true
            })}
            required
            className=' w-full h-full rounded bg-transparent pl-20'
          />
          <div className='absolute left-4'>
            Dirección:
          </div>

        </label>
        <label className=' flex w-full pl-4 text-xs h-6 bg-[#333333] text-[#777777] rounded items-center truncate gap-1'>
          Tipo de moneda :
          <select
            className='w-full h-full bg-transparent rounded'
            {...register('moneda', {
              required: true
            })}
            required
          >
            <option value='SOL'>
              SOL
            </option>
            <option value='DOL'>
              DOL
            </option>
            <option value='EU'>
              EU
            </option>
          </select>
        </label>
      </fieldset>
      <article className='Pro-Light  select-none text-sm  flex gap-1  mt-4'>
        <div className='rounded-l h-6 flex items-center text-white justify-center w-1/12 overflow-hidden truncate bg-[#333333]'>id</div>
        <div className=' h-6 flex items-center text-white justify-center w-6/12 overflow-hidden truncate bg-[#333333]'>nombre</div>
        <div className=' h-6 flex items-center text-white justify-center  w-1/12 overflow-hidden truncate bg-[#333333]'>C.A</div>
        <div className=' h-6 flex items-center text-white justify-center  w-2/12 overflow-hidden truncate bg-[#333333]'>p. unitario</div>
        <div className='rounded-r h-6 flex items-center text-white justify-center  w-2/12 overflow-hidden truncate bg-[#333333]'>p. total</div>

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
      <article className=' w-full flex flex-col gap-1 mt-1 text-white'>

        <div className=' h-6 flex gap-1 Pro-Light select-none text-sm w-full'>
          <div className=' rounded-l bg-[#333333] h-6 flex items-center justify-center  w-10/12 overflow-hidden truncate '>
            B.I
          </div>
          <div className=' rounded-r bg-[#333333] h-6 flex items-center justify-center overflow-hidden truncate  w-[calc(16.666667%-2px)]'>
            {
                            state[0]?.cantidad !== undefined
                              ? `s/${(state.reduce((total, producto) => total + (producto.price * producto.cantidad), 0) / 1.18).toFixed(2)}`
                              : 0
                        }
          </div>
        </div>
        <div className=' h-6 flex gap-1 Pro-Light select-none text-sm w-full'>
          <div className=' rounded-l bg-[#333333] h-6 flex items-center justify-center  w-10/12 overflow-hidden truncate '>
            I.G.V
          </div>
          <div className=' rounded-r bg-[#333333] h-6 flex items-center justify-center overflow-hidden truncate  w-[calc(16.666667%-2px)] '>
            {
                            state[0]?.cantidad !== undefined
                              ? `s/${((state.reduce((total, producto) => total + (producto.price * producto.cantidad), 0) / 1.18) * 0.18).toFixed(2)}`
                              : 0
                        }
          </div>
        </div>
        <div className=' h-6 flex gap-1 Pro-Light select-none text-sm w-full'>
          <div className='rounded-l h-6 flex items-center text-white justify-center  w-10/12 overflow-hidden truncate bg-[#696969]'>
            TOTAL
          </div>
          <div className='rounded-r h-6 flex items-center text-white justify-center w-[calc(16.666667%-2px)] overflow-hidden truncate bg-[#696969]'>
            {
                            state[0]?.cantidad !== undefined
                              ? `s/${state.reduce((total, producto) => total + (producto.price * producto.cantidad), 0).toFixed(2)}`
                              : 0
                        }
          </div>

        </div>
      </article>
      <button className='mt-4 select-none text-sm rounded w-full h-12 bg-[#333333] text-white flex justify-center items-center hover:bg-stone-500 cursor-pointer '>
        EMITIR
      </button>
    </form>
  )
}
export default FacturaBoleta
