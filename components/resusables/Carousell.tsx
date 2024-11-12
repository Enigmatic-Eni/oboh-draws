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
    <div className=' bg-[#d5d4d3] px-14 '>
     <Carousel  plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}>
  <CarouselContent>
    <CarouselItem className=' flex  justify-center'><img src="nightmare.jpg" alt="" className="w-[600px] h-[520px] object-cover"  /></CarouselItem>
    <CarouselItem  className=' flex  justify-center' ><img src="Living in the clouds2.jpg" alt=""  className="w-[500px] h-[520px] object-cover "  /></CarouselItem>
    <CarouselItem  className=' flex  justify-center'><img src="meadows.jpg" alt=""  className="w-[500px] h-[520px] object-cover " /></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>


    </div>
    </div>
  )
}
