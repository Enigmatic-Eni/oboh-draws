import React from 'react';
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Carousell() {
  return (
    <div>
    <div className=' bg-[#d5d4d3] px-14 pt-16'>
     <Carousel  plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}>
  <CarouselContent>
    <CarouselItem className=' flex  justify-center'><img src="/carousel/pic1.jpg" alt="" className="w-full h-[420px] object-cover"  /></CarouselItem>
    <CarouselItem  className=' flex  justify-center' ><img src="/carousel/pic2.jpg" alt=""  className="w-screen h-[420px] object-cover "  /></CarouselItem>
    <CarouselItem  className=' flex  justify-center'><img src="/carousel/pic3.jpg" alt=""  className="w-screen h-[420px] object-cover " /></CarouselItem>
    <CarouselItem className=' flex  justify-center'><img src="/carousel/song of songs 1vs15.jpg" alt="" className="w-full h-[420px] object-cover"  /></CarouselItem>
    <CarouselItem  className=' flex  justify-center'><img src="/carousel/pic3.jpg" alt=""  className="w-screen h-[420px] object-cover " /></CarouselItem>
    <CarouselItem  className=' flex  justify-center' ><img src="/carousel/pic2.jpg" alt=""  className="w-screen h-[420px] object-cover "  /></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>


    </div>
    </div>
  )
}
