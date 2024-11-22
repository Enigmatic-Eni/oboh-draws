import Navbar from '@/components/resusables/Navbar'
import React from 'react'

export default function Commissions() {
  return (
    <div className='bg-[#e1e0e0] text-[#545353] mb-0'>
         <Navbar />
         <div className=' pt-24 text-center'>
                <p className=' text-2xl'>Commissions</p>
                <div className='   text-center flex justify-center pt-3'>
                    <p className='border-b-black border w-24'></p>
                </div>
            </div>

            <div className='  text-center flex justify-center pt-6'>
                <div className='w-[70%] flex justify-center gap-8 text-[12.5px]'>
                <p>All</p>
                <p>Portrait Artworks</p>
                <p>Editotial Illustrations</p>
                <p>Concept Art</p>
                <p>Children's Book Illustrations</p>
                <p>Book Cover Illustrations</p>
                </div>
            </div>


    </div>
  )
}
