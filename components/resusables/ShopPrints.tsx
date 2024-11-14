import React from 'react'

export default function ShopPrints() {
  return (
    <div className="bg-[#d5d4d3]">
        <div className=' flex justify-center'>
        <button className='bg-[#545353] text-white px-12 text-xl rounded-lg mt-8 mb-14 hover:bg-[#7c7c7c] font-semibold py-4'>Shop Prints Here</button>
        </div>
    <div className=' bg-[#d5d4d3] grid-cols-5 grid pl-6'>
        <img src="/shop-prints/Living in the clouds2.jpg" alt="" className=' h-60 w-56 rounded-2xl'/>
        <img src="/shop-prints/monday-scaled.jpg" alt="" className=' h-60 w-56 rounded-2xl'/>
        <img src="/shop-prints/nightmare.jpg" alt="" className=' h-60 w-56 rounded-2xl'/>
        <img src="/shop-prints/cleanse.jpg" alt="" className=' h-60 w-56 rounded-2xl'/>
        <img src="/shop-prints/work-train2.jpg" alt="" className=' h-60 w-56 rounded-2xl'/>

    </div>
    </div>
  )
}
