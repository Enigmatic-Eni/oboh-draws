import Footer from '@/components/resusables/Footer'
import Navbar from '@/components/resusables/Navbar'
import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <div className='bg-[#e1e0e0] text-[#545353] mb-0 min-h-full'>
            <Navbar />
            <div className=' pt-24 px-8 pb-10'>

                <div className=' lg:flex lg:justify-between lg:items-center'>
                    <Image src='/Moses.jpeg' width={250} height={250} alt='' className=' rounded-3xl pb-4 md:pb-0' />
                    <p className=' md:w-[70%] leading-10'>Oboh Moses is a young black digital artist, illustrator from Lagos, Nigeria. His journey into art began at a tender age of seven, driven by a passion to depict joyful characters and intricate scenes. With a keen eye for detail and semi-realism, Oboh creates evocative portraits and illustrations that are vibrant, catchy, and uplifting. His work spans across editorials and publishing, reflecting a fusion of cultural influences and a commitment to storytelling.
                        <br />
                        His international clientele spans the globe, including companies such as The New York Times Magazine, The Boston Globe, Benchmark Education, Penguin Random House, and Prospect Magazine. His recent work includes the book cover art for No Ordinary Love by Myah Ariel, as well as illustrations for two debut children&apos;s books: Freedom at Dawn by Leah Schanke and Freedom Braids by Monique Duncan. Freedom Braids received an endorsement from Amnesty International and was featured on The Oprah Daily.
                        <br />


                    </p>
                </div>
                <br />
                <div>
                    <p> <span className=' font-semibold'>YOU'RE AN INCREDIBLE ARTIST! </span>
                        <br />
                        <span className=' text-sm'>-Monique Duncan,<span className=' italic'> Children&apos;s Book Author: Freedom Braids… </span></span>
                        <br />
                        <br />
                        <span className=' font-semibold'>I AM SO HONOURED TO HAVE YOUR PHENOMENAL ARTIST ON THE COVERS OF MY BOOKS</span>
                        <br />
                        <span className=' text-sm'>-Myah Ariel, Writer, <span className=' italic'>Author: When I Think of You, No Ordinary Love…</span></span></p>
                </div>
            </div>

            <Footer />
        </div>
    )
}
