import Carousel from '@/components/resusables/Carousell'
import Footer from '@/components/resusables/Footer'
import Navbar from '@/components/resusables/Navbar'
import ShopPrints from '@/components/resusables/ShopPrints'
import React from 'react'

export default function index() {
  return (
    <div className=' bg-[#e1e0e0] min-h-full'>
      <Navbar/>
      <div className=' flex-grow'>
      <Carousel/>
      <ShopPrints/>
      </div>
    <Footer/>
    </div>
  )
}

