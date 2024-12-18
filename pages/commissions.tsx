import ImageModal from '@/components/ImageModal';
import Footer from '@/components/resusables/Footer';
import Navbar from '@/components/resusables/Navbar'
import Image from 'next/image';
import React, { useState } from 'react'

const imagesData = [
  {
    id: 1,
    name: "Portrait Artworks",
    src: '/portrait/Barry-Brothersfinal.jpg'
  },
  {
    id: 2,
    name: "Portrait Artworks",
    src: '/portrait/brown skin.jpg'
  },
  {
    id: 3,
    name: "Portrait Artworks",
    src: '/portrait/Ogeh.jpg'
  },
  {
    id: 4,
    name: "Portrait Artworks",
    src: '/portrait/Ogeh2.jpg'
  },
  {
    id: 5,
    name: "Editorial Illustrations",
    src: '/editorial/ideas 0421.jpg'
  },
  {
    id: 6,
    name: "Editorial Illustrations",
    src: '/editorial/Oboh_Moses_Editorial_Illustrators.jpg'
  },
  {
    id: 7,
    name: "Editorial Illustrations",
    src: '/editorial/Oboh_Moses_Nature_Illustrators.jpg'
  },
  {
    id: 8,
    name: "Editorial Illustrations",
    src: '/editorial/the furrows.jpg'
  },
  {
    id: 9,
    name: "Concept Art",
    src: '/concept/Digital_Illustrators_Oboh_Moses.jpg'
  },
  {
    id: 10,
    name: "Concept Art",
    src: '/concept/final.jpg'
  },
  {
    id: 11,
    name: "Concept Art",
    src: '/concept/mental-health-week.jpg'
  },
  {
    id: 12,
    name: "Concept Art",
    src: '/concept/nightmare(w.jpg'
  },
  {
    id: 13,
    name: "Concept Art",
    src: '/concept/Untitled-3.jpg'
  },
  {
    id: 14,
    name: "Children Book Illustrations",
    src: '/children/IMG_0131.jpg'
  },
  {
    id: 15,
    name: "Children Book Illustrations",
    src: '/children/IMG_2945.jpg'
  },
  {
    id: 16,
    name: "Children Book Illustrations",
    src: '/children/IMG_2947.jpg'
  },
  {
    id: 17,
    name: "Children Book Illustrations",
    src: '/children/IMG_2948.jpg'
  },
  {
    id: 18,
    name: "Book Cover Illustrations",
    src: '/book-cover/2.jpg'
  },
  {
    id: 19,
    name: "Book Cover Illustrations",
    src: '/book-cover/africansound.jpg'
  },
  {
    id: 20,
    name: "Book Cover Illustrations",
    src: '/book-cover/Play on front.jpg'
  },
  {
    id: 21,
    name: "Book Cover Illustrations",
    src: '/book-cover/Play on-Recovered.jpg'
  },
  {
    id: 22,
    name: "Book Cover Illustrations",
    src: '/book-cover/NoOrdinaryLove.jpg'
  },
]
const links = [
  { name: "All" },
  { name: "Portrait Artworks" },
  { name: "Editorial Illustrations" },
  { name: "Concept Art" },
  { name: "Children Book Illustrations" },
  { name: "Book Cover Illustrations" }
]
export default function Commissions() {
  const [selectedCategory, setSelectedCategry] = useState('All');

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
  

  const handleCategoryClick = (category) => {
    setSelectedCategry(category);
  };

  const filteredImages = selectedCategory === 'All' ? imagesData : imagesData.filter(image => image.name === selectedCategory);

  return (
    <div className='bg-[#e1e0e0] text-[#545353] mb-0 min-h-full'>
      <Navbar />
      <div className=' pt-24 text-center'>
        <p className=' text-2xl'>Commissions</p>
        <div className='   text-center flex justify-center pt-3'>
          <p className='border-b-black border w-24'></p>
        </div>
      </div>

      <div className='  text-center flex justify-center pt-6'>
        <div className='w-full max-w-[70%] flex flex-wrap justify-center gap-4 sm:gap-8 text-[10px] sm:text-[12.5px]'>
          {links.map(category =>
            <a key={category.name} onClick={() => handleCategoryClick(category.name)} href="#" className={` transition-all duration-500 ease-in-out ${selectedCategory === category.name ? 'border-b pb-2 border-[#545353]' : ''} `} >{category.name}</a>
          )}
        </div>
      </div>

      <div className="image-gallery py-11 mansory">
        {filteredImages.map(image => (
          <div key={image.id} className='box'>
            <Image src={image.src} alt="" width={300} height={300} layout="responsive" quality={90} className='mansory-img transition-transform duration-300 hover:scale-105 hover:cursor-pointer'  onClick={() => handleImageClick(image.src)}  />
          </div>
        ))

        }
      </div>

      <Footer/>

      <ImageModal isOpen={isModalOpen} onClose={closeModal} imageSrc={selectedImage} />
    </div>
  )
}
