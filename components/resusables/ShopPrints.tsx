import React from 'react'

export default function ShopPrints() {
    return (
        <div className="bg-[#d5d4d3]">
            <div className=' flex justify-center'>
                <button className='bg-[#545353] text-white px-12 text-xl rounded-lg mt-8 mb-14 hover:bg-[#7c7c7c] font-semibold py-4'>Shop Prints Here</button>
            </div>
            <div className=' bg-[#d5d4d3] grid-cols-5 grid pl-6 pb-14'>
                <div className=' parent  h-60 w-56 overflow-hidden rounded-lg'>
                    <img src="/shop-prints/Living in the clouds2.jpg" alt="" className='child h-full w-full   transition-transform duration-300 hover:scale-105 hover:cursor-pointer' />
                </div>
                <div className=' parent h-60 w-56 overflow-hidden rounded-lg'>
                    <img src="/shop-prints/monday-scaled.jpg" alt="" className=' child h-full w-full   transition-transform duration-300 hover:scale-105 hover:cursor-pointer' />
                </div>
                <div className=' parent h-60 w-56 overflow-hidden rounded-lg'>
                    <img src="/shop-prints/nightmare.jpg" alt="" className='child h-full w-full   transition-transform duration-300 hover:scale-105 hover:cursor-pointer' />
                </div>
                <div className=' parent h-60 w-56 overflow-hidden rounded-lg'>
                    <img src="/shop-prints/cleanse.jpg" alt="" className=' child h-full w-full   transition-transform duration-300 hover:scale-105 hover:cursor-pointer' />
                </div>
                <div className=' parent h-60 w-56 overflow-hidden rounded-lg'>
                    <img src="/shop-prints/work-train2.jpg" alt="" className=' child h-full w-full   transition-transform duration-300 hover:scale-105 hover:cursor-pointer' />
                </div>

            </div>
        </div>
    )
}
