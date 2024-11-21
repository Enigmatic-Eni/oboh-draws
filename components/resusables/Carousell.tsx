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
  return (
    <div>
    <div className=' bg-[#e1e0e0] px-14 pt-16'>
     <Carousel  plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}>
  <CarouselContent>
    <CarouselItem className=' flex  justify-center'><Image src="/carousel/pic1.jpg" alt="" className="w-full h-[450px] object-cover" width={1920} height={450} /></CarouselItem>
    <CarouselItem  className=' flex  justify-center' ><Image src="/carousel/pic2.jpg" alt=""  className="w-screen h-[450px] object-cover " width={1920} height={450} /></CarouselItem>
    <CarouselItem  className=' flex  justify-center'><Image src="/carousel/pic3.jpg" alt=""  className="w-screen h-[450px] object-cover " width={1920} height={450}/></CarouselItem>
    <CarouselItem className=' flex  justify-center'><Image src="/carousel/song of songs 1vs15.jpg" alt="" className="w-full h-[450px] object-cover" width={1920} height={450} /></CarouselItem>
    <CarouselItem  className=' flex  justify-center'><Image src="/carousel/pic3.jpg" alt=""  className="w-screen h-[450px] object-cover " width={1920} height={450}/></CarouselItem>
    <CarouselItem  className=' flex  justify-center' ><Image src="/carousel/pic2.jpg" alt=""  className="w-screen h-[450px] object-cover "  width={1920} height={450}/></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>


    </div>
    </div>
  )
}
