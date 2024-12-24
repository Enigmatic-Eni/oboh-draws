import React from 'react'

export default function ShopPrints() {
    const printCollections = [
        {
            id: 1,
            path: `/shop-prints/Living in the clouds2.jpg`
        },
        {
            id: 2,
            path: `/shop-prints/monday-scaled.jpg`
        },
        {
            id: 3,
            path: `/shop-prints/nightmare.jpg`
        },
        {
            id: 4,
            path: `/shop-prints/cleanse.jpg`
        },
        {
            id: 5,
            path: `/shop-prints/work-train2.jpg`
        }
    ]

    return (
        <div className="bg-[#e1e0e0]">
            <div className=' flex justify-center'>
                <a href="https://www.inprnt.com/gallery/obohdraws/" target='_blank' rel='noopener noreferrer'>
                <button className='bg-[#545353] text-white px-12 text-xl rounded-lg mt-8 mb-11 hover:bg-[#7c7c7c] font-semibold py-4'>Shop Prints Here</button></a>
            </div>

            <div className=' flex items-center text-center justify-center'>
            <div className=' bg-[#e1e0e0] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 grid  pb-14 items-center justify-center gap-6'>
            {printCollections.map((items, index)=>(
                <div key={index} className=' parent w-[300px] h-[300px] md:h-[240px] md:w-[230px] overflow-hidden rounded-lg mt-3'>
                   
                    <img src={items.path} alt="" className='child h-full w-full   transition-transform duration-300 hover:scale-105 hover:cursor-pointer' />
                </div>
                ))}
                </div>
            </div>
        </div>
    )
}
