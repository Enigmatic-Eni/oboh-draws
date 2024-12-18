import Footer from '@/components/resusables/Footer'
import Navbar from '@/components/resusables/Navbar'
import React from 'react'

export default function SketchBooks() {
  return (
    <div>  <div className='bg-[#e1e0e0] text-[#545353] mb-0 min-h-screen'>
    <Navbar />
    <div className=' pt-24 text-center'>
           <p className=' text-2xl'>Sketch Books</p>
           <div className='  items-center text-center flex justify-center pt-3'>
               <p className='border-b-black border w-24'></p>
           </div>
       </div>
       
       <Footer/>
</div></div>
  )
}
