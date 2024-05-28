import Lupa from '../icons/logoBusqueda'
import CardProducto from './card'
import productos from '../db/products.json'
import MenorIcon from '../icons/menor'
import '../styles/productos.css'
import { ProductosProps } from '../types/types'

const Productos: React.FC<ProductosProps> = (props) => {
  const { sumarItems } = props
  return (
    <section className=' bg-[#F3F3F3] text-[#333333] Pro-Light m-0 p-0 productos '>
      <section className='Pro-Light text-xs px-4 pt-2'>
        BUSCAR
      </section>
      <article className='pr-4 forms mr-0 p-0'>
        <button className='grid items-center justify-center'>
          <MenorIcon className='w-4' />
        </button>
        <article className=' w-full h-full inputs gap-1'>
          <form className='flex w-full '>
            <input type='search' placeholder='Buscar...' className='Pro-Light text-sm h-full w-full pl-4' />
            <button type='submit' className=' w-10 flex justify-center items-center bg-[#DDDDDD] hover:bg-[#D2D2D2]'>
              <Lupa className='w-[15px] select-none' />
            </button>
          </form>
          <input type='text' placeholder='Buscar...' className=' h-full Pro-Light text-sm w-full pl-4' />
        </article>
      </article>

      <article className='flex flex-wrap gap-1 p-4 justify-center items-center  overflow-y-auto  '>
        {productos.map((producto) => (
          <div
            key={producto.id}
            className='w-full card'
            onClick={() => sumarItems(producto)}
          >
            <CardProducto
              id={producto.id}
              title={producto.title}
              description={producto.description}
              price={producto.price}
              discountPercentage={producto.discountPercentage}
              rating={producto.rating}
              stock={producto.stock}
              brand={producto.brand}
              category={producto.category}
              thumbnail={producto.thumbnail}
              images={producto.images}
            />
          </div>
        ))}
      </article>

    </section>
  )
}
export default Productos
