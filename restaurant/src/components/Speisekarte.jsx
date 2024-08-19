import React from 'react'
import Border from "../img/Border.png"

const Speisekarte = () => {
  return (
    <div className="flex flex-col  w-screen h-screen">
        <img src={Border} alt=" Border" />
        <h1 className=' text-4xl p-4 font-Berkshire text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)]'>Speisekarte</h1>
        <div className='flex justify-between w-full h-full'>
        
            <div className="flex w-[10%] h-full bg-gray-300">

            </div>
            <div className="flex w-[75%] h-full bg-gray-300">

            </div>
            <div className="flex w-[10%] h-full bg-gray-300">

            </div>



        </div>
    </div>
  )
}

export default Speisekarte
