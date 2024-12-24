import React from 'react';
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';


export default function Carousell() {

  const carouselImages = [
    {
        id: 1,
        path: `/carousel/pic1.jpg`
    },
    {
        id: 2,
        path: `/carousel/pic2.jpg`
    },
    {
        id: 3,
        path: `/carousel/pic3.jpg`
    },
    {
        id: 4,
        path: `/carousel/song of songs 1vs15.jpg`
    },
    {
        id: 5,
        path: `/carousel/pic2.jpg`
    }
]
  return (
    <div>
    <div className=' bg-[#e1e0e0] px-14 pt-[65px]'>
     <Carousel  plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}>
  <CarouselContent>
    {carouselImages.map((items,index)=>(
    <CarouselItem key={index} className=' flex  justify-center'>
      <Image src={items.path} alt="" className="w-full h-full object-cover" width={1920} height={450} />
      </CarouselItem>
      ))}
    {/* <CarouselItem  className=' flex  justify-center' ><Image src="/carousel/pic2.jpg" alt=""  className="w-screen h-[450px] object-cover " width={1920} height={450} /></CarouselItem>
    <CarouselItem  className=' flex  justify-center'><Image src="/carousel/pic3.jpg" alt=""  className="w-screen h-[450px] object-cover " width={1920} height={450}/></CarouselItem>
    <CarouselItem className=' flex  justify-center'><Image src="/carousel/song of songs 1vs15.jpg" alt="" className="w-full h-[450px] object-cover" width={1920} height={450} /></CarouselItem>
    <CarouselItem  className=' flex  justify-center'><Image src="/carousel/pic3.jpg" alt=""  className="w-screen h-[450px] object-cover " width={1920} height={450}/></CarouselItem>
    <CarouselItem  className=' flex  justify-center' ><Image src="/carousel/pic2.jpg" alt=""  className="w-screen h-[450px] object-cover "  width={1920} height={450}/></CarouselItem> */}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>


    </div>
    </div>
  )
}
