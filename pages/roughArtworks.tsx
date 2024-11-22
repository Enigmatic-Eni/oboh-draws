import Navbar from '@/components/resusables/Navbar'
import React from 'react'

export default function RoughArtworks() {
  return (
    <div className='bg-[#e1e0e0] text-[#545353] mb-0'>
         <Navbar />
         <div className=' pt-24 text-center'>
                <p className=' text-2xl'>Personal Artworks</p>
                <div className='  items-center text-center flex justify-center pt-3'>
                    <p className='border-b-black border w-24'></p>
                </div>
            </div>

    </div>
  )
}
