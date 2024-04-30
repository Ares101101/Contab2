import FileZipIcon from "../icons/filezipicon"
import facturas from '../assets/facturas.json' 

function CardFactura() {
  
  return (
    <div className=" bg-[#1e1e1e] w-full h-full">
      <div className=" flex flex-col gap-2 p-2 ">
        {facturas.map((f)=>(
            <a className="flex w-full items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <FileZipIcon className="h-4"/>
              <span className="flex-1 ms-3 whitespace-nowrap">
               {f.numero}
               {f.cliente}
              </span>
              <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                {f.monto}
              </span>
          </a>
        ))}      
      </div>
    </div>  
  )
}

export default CardFactura
