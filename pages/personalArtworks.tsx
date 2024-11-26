import Navbar from '@/components/resusables/Navbar'
import React from 'react';
import Image from 'next/image';
import Footer from '@/components/resusables/Footer';

export default function PersonalArtworks() {
    return (
        <div className='bg-[#e1e0e0] text-[#545353] mb-0'>
            <Navbar />

            <div className=' pt-24 text-center'>
                <p className=' text-2xl'>Personal Artworks</p>
                <div className='  items-center text-center flex justify-center pt-3'>
                    <p className='border-b-black border w-24'></p>
                </div>
            </div>

            <div className='mansory pb-5 mb-0'>
                <div className=' box'>
                    <Image alt='' src='/personal-artworks/black-girl-train.jpg' width={300} height={300} layout="responsive" quality={90} className='mansory-img transition-transform duration-300 hover:scale-105 hover:cursor-pointer' /></div>
                <div className=' box'>
                    <Image alt='' src='/personal-artworks/Lenity David.jpg' width={300} height={300} layout="responsive" quality={90} className='mansory-img transition-transform duration-300 hover:scale-105 hover:cursor-pointer' /></div>
                    <div className=' box'>
                    <Image alt='' src='/personal-artworks/Hijab.jpg' width={300} height={300} layout="responsive" quality={90} className='mansory-img transition-transform duration-300 hover:scale-105 hover:cursor-pointer' /></div>
               
                <div className=' box'>
                    <Image alt='' src='/personal-artworks/nightmare.jpg' width={300} height={300} layout="responsive" quality={90} className='mansory-img transition-transform duration-300 hover:scale-105 hover:cursor-pointer' /></div>
               
                <div className=' box'>
                    <Image alt='' src='/personal-artworks/monday-scaled.jpg' width={300} height={300} layout="responsive" quality={90} className='mansory-img transition-transform duration-300 hover:scale-105 hover:cursor-pointer' /></div>
                <div className=' box'>
                    <Image alt='' src='/personal-artworks/newyear-scaled.jpg' width={300} height={300} layout="responsive" quality={90} className='mansory-img transition-transform duration-300 hover:scale-105 hover:cursor-pointer' /></div>
                    <div className=' box'>
                    <Image alt='' src='/personal-artworks/meadows.jpg' width={300} height={300} layout="responsive" quality={90} className='mansory-img transition-transform duration-300 hover:scale-105 hover:cursor-pointer' /></div>
                <div className=' box'>
                    <Image alt='' src='/personal-artworks/NIKE-Recovered.jpg' width={300} height={300} layout="responsive" quality={90} className='mansory-img transition-transform duration-300 hover:scale-105 hover:cursor-pointer' /></div>
                    <div className=' box'>
                    <Image alt='' src='/personal-artworks/jazz-band-scaled.jpg' width={300} height={300} layout="responsive" quality={90} className='mansory-img transition-transform duration-300 hover:scale-105 hover:cursor-pointer' /></div>
                    <div className=' box'>
                    <Image alt='' src='/personal-artworks/Oboh_Moses_Conceptual_Illustrators.jpg' width={300} height={300} layout="responsive" quality={90} className='mansory-img transition-transform duration-300 hover:scale-105 hover:cursor-pointer' /></div>
                    <div className=' box'>
                    <Image alt='' src='/personal-artworks/p7vobjl152171 (1).jpg' width={300} height={300} layout="responsive" quality={90} className='mansory-img transition-transform duration-300 hover:scale-105 hover:cursor-pointer' /></div>
                    <div className=' box'>
                    <Image alt='' src='/personal-artworks/song of songs 1vs15.jpg' width={300} height={300} layout="responsive" quality={90} className='mansory-img transition-transform duration-300 hover:scale-105 hover:cursor-pointer' /></div>
                    <div className=' box'>
                    <Image alt='' src='/personal-artworks/tennis male.jpg' width={300} height={300} layout="responsive" quality={90} className='mansory-img transition-transform duration-300 hover:scale-105 hover:cursor-pointer' /></div>
                    <div className=' box'>
                    <Image alt='' src='/personal-artworks/TENNISsign (1).jpg' width={300} height={300} layout="responsive" quality={90} className='mansory-img transition-transform duration-300 hover:scale-105 hover:cursor-pointer' /></div>
                    <div className=' box'>
                    <Image alt='' src='/personal-artworks/work-train2 (1).jpg' width={300} height={300} layout="responsive" quality={90} className='mansory-img transition-transform duration-300 hover:scale-105 hover:cursor-pointer' /></div>
                    <div className=' box'>
                    <Image alt='' src='/personal-artworks/youtube 1 (1).jpg' width={300} height={300} layout="responsive" quality={90} className='mansory-img transition-transform duration-300 hover:scale-105 hover:cursor-pointer' /></div>
                    <div className=' box'>
                    <Image alt='' src='/personal-artworks/Living in the clouds2.jpg' width={300} height={300} layout="responsive" quality={90} className='mansory-img transition-transform duration-300 hover:scale-105 hover:cursor-pointer' /></div>
            </div>

            <Footer/>
        </div>
    )
}
