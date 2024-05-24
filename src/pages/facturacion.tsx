import FacturaBoleta from '../components/facturaboleta'
import Productos from '../components/productos'
import '../styles/facturacion.css'
import { useState } from 'react';

function Facturacion(){
    const [items, setItems] = useState<{ id: number; title: string; cantidad: number; price: number }[]>([]);

    function sumarItems(item:{id:number, title:string, price:number}){
       if (items.length === 0){
            setItems([{ 
                id : item.id, 
                title : item.title,
                cantidad : 1,
                price : item.price
            }])
        }
        if(items.some(it => it.id === item.id)) {
            const newItems = items.map((it :{ id: number; title: string; cantidad: number; price: number }) => {
                if(it.id === item.id)return { ...it, cantidad : it.cantidad = it.cantidad + 1 }
                else return it
            })
            setItems(newItems)
        }else { 
            const newitems = items.concat({
                id: item.id,
                title: item.title,
                cantidad: 1,
                price: item.price
            });
            setItems(newitems);
        }
        console.log(items)
    }
    return(
        <main className=" bg-[#1e1e1e] ">
            <FacturaBoleta state={items}/>
        </main>
    )
}
export default Facturacion