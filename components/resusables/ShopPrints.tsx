import React from 'react'

export default function ShopPrints() {
    return (
        <div className="bg-[#e1e0e0]">
            <div className=' flex justify-center'>
                <button className='bg-[#545353] text-white px-12 text-xl rounded-lg mt-8 mb-11 hover:bg-[#7c7c7c] font-semibold py-4'>Shop Prints Here</button>
            </div>
            <div className=' bg-[#e1e0e0] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid px-6 pb-14 items-center justify-center'>
                <div className=' parent w-[300px] h-[300px] md:h-60 md:w-56 overflow-hidden rounded-lg mt-3'>
                    <img src="/shop-prints/Living in the clouds2.jpg" alt="" className='child h-full w-full   transition-transform duration-300 hover:scale-105 hover:cursor-pointer' />
                </div>
                <div className=' parent w-[300px] h-[300px] md:h-60 md:w-56 overflow-hidden rounded-lg mt-3'>
                    <img src="/shop-prints/monday-scaled.jpg" alt="" className=' child h-full w-full   transition-transform duration-300 hover:scale-105 hover:cursor-pointer' />
                </div>
                <div className=' parent w-[300px] h-[300px] md:h-60 md:w-56 overflow-hidden rounded-lg mt-3'>
                    <img src="/shop-prints/nightmare.jpg" alt="" className='child h-full w-full   transition-transform duration-300 hover:scale-105 hover:cursor-pointer' />
                </div>
                <div className=' parent w-[300px] h-[300px] md:h-60 md:w-56 overflow-hidden rounded-lg mt-3'>
                    <img src="/shop-prints/cleanse.jpg" alt="" className=' child h-full w-full   transition-transform duration-300 hover:scale-105 hover:cursor-pointer' />
                </div>
                <div className=' parent w-[300px] h-[300px] md:h-60 md:w-56 overflow-hidden rounded-lg mt-3'>
                    <img src="/shop-prints/work-train2.jpg" alt="" className=' child h-full w-full   transition-transform duration-300 hover:scale-105 hover:cursor-pointer' />
                </div>

            </div>
        </div>
    )
}
