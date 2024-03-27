import { useState } from 'react'
import IconUser from './iconUser'
import IconSettins from './iconSeti'

export default function Acount() {
  const [on, setOn] = useState(false)
  const onUser = () => {
    if (on) return setOn(false)
    else setOn(true)
  }
  return (
    <div
      className={
        on
          ? 'absolute left-0 w-96 bg-[#22b99fff] h-full z-0 min-w-12 grid-flow-col'
          : 'absolute left-0 bg-[#22b99fff] h-full z-0 w-12'
      }
    > 
      <section className=' text-[#F6F6F6] h-full w-full grid justify-center items-end pb-5'  >
        <article className=' flex flex-col '>
          <IconUser  className=' size-6'/>
          <div className="" onClick={onUser}>
            <IconSettins  className= ' size-6'/>
          </div>    
        </article>
      </section>
    </div>
  )
}
