import FileZipIcon from "../icons/filezipicon"


function CardFactura() {
  
  return (
    <div className=" bg-[#1e1e1e] w-full h-full">
        <li>
            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <FileZipIcon className="h-4"/>
            <span className="flex-1 ms-3 whitespace-nowrap">MetaMask</span>
            <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
            </a>
        </li>
    </div>  
  )
}

export default CardFactura
