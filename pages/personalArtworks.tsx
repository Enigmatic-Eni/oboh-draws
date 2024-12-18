import Navbar from '@/components/resusables/Navbar';
import React, { useState } from 'react';
import Image from 'next/image';
import Footer from '@/components/resusables/Footer';
import ImageModal from '@/components/ImageModal';

export default function PersonalArtworks() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageClick = (src) => {
        setSelectedImage(src);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage('');
    };

    return (
        <div className='bg-[#e1e0e0] text-[#545353] mb-0 min-h-full'>
            <Navbar />

            <div className='pt-24 text-center'>
                <p className='text-2xl'>Personal Artworks</p>
                <div className='items-center text-center flex justify-center pt-3'>
                    <p className='border-b-black border w-24'></p>
                </div>
            </div>

            <div className='mansory pb-5 mb-0'>
                {[
                    '/personal-artworks/black-girl-train.jpg',
                    '/personal-artworks/Lenity David.jpg',
                    '/personal-artworks/Hijab.jpg',
                    '/personal-artworks/nightmare.jpg',
                    '/personal-artworks/monday-scaled.jpg',
                    '/personal-artworks/newyear-scaled.jpg',
                    '/personal-artworks/meadows.jpg',
                    '/personal-artworks/NIKE-Recovered.jpg',
                    '/personal-artworks/jazz-band-scaled.jpg',
                    '/personal-artworks/Oboh_Moses_Conceptual_Illustrators.jpg',
                    '/personal-artworks/p7vobjl152171 (1).jpg',
                    '/personal-artworks/song of songs 1vs15.jpg',
                    '/personal-artworks/tennis male.jpg',
                    '/personal-artworks/TENNISsign (1).jpg',
                    '/personal-artworks/work-train2 (1).jpg',
                    '/personal-artworks/youtube 1 (1).jpg',
                    '/personal-artworks/Living in the clouds2.jpg'
                ].map((src, index) => (
                    <div className='box' key={index}>
                        <Image
                            alt=''
                            src={src}
                            width={300}
                            height={300}
                            layout="responsive"
                            quality={90}
                            className='mansory-img transition-transform duration-300 hover:scale-105 hover:cursor-pointer'
                            onClick={() => handleImageClick(src)}
                        />
                    </div>
                ))}
            </div>

            <Footer />

            {/* Modal for displaying the selected image */}
            <ImageModal isOpen={isModalOpen} onClose={closeModal} imageSrc={selectedImage} />
        </div>
    );
};