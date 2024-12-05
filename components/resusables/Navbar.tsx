import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';


export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (event) => {
    event.preventDefault(); // Prevent default link behavior
    setIsDropdownOpen(prev => !prev);
  };


  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };
  const toggleSidebar = (
    
  ) => {
    
    setIsSidebarOpen(!isSidebarOpen);
  };
const toggleTopBar = (event) => {
  event.preventDefault();
  setIsDropdownOpen2(!isDropdownOpen2)
}

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='fixed z-40 w-full bg-[#e8e8e6] text-[#545353]'>
      <div className='flex md:grid md:grid-cols-2 items-center justify-between px-6 py-1'>
        <div>
          <Link href="/" className=' cursor-pointer'>
            <img src="logo.jpg" alt="" className='h-14 w-14 rounded-full' />
          </Link>
        </div>

        {/* respnsive side bar */}



        <div className=' relative md:hidden '>
          <div onClick={toggleSidebar} className="text-[28px] cursor-pointer mr-2">
            <FaBars />
          </div>
        </div>

        {/* Topbar  (Only shows on small screen)*/}
        <div
          className={`fixed inset-y-0 top-0 transform ${isSidebarOpen ? "translate-y-0" : "-translate-y-full"
            } transition-transform duration-300 ease-in-out bg-[#e8e8e6] w-full h-80 z-50 left-0 shadow-lg`}
        >
          <div className="flex justify-between px-6 pt-6  items-center">
            <Link href="/" className=' cursor-pointer'>
              <img src="logo.jpg" alt="" className='h-14 w-14 rounded-full' />
            </Link>
            <FaTimes className=" text-4xl cursor-pointer" onClick={toggleSidebar} />
          </div>
          <div className=" text-center space-y-2 items-center flex flex-col pt-3 px-6">
            <ul className=' space-y-6'>
              <li className=''>
                <Link href={"/"} className='hover:font-semibold hover:text-[#a9bdcf] cursor-pointer'>
                  Home
                </Link>
              </li>
              <li onMouseEnter={() => setIsDropdownOpen2(true)} 
            onClick={toggleTopBar}
            className='relative'>
                <a
                  // onClick={toggleDropdown}
                  // onMouseEnter={() => setIsDropdownOpen(true)}
                  href="portfolio"
                  className='flex items-center hover:font-bold cursor-pointer hover:text-[#a9bdcf]'
                >
                  Portfolio <IoIosArrowDown className='ml-3' />
                </a>
                {isDropdownOpen2 && (
          
<div  className=' absolute left-1/2 transform -translate-x-1/2 mt-2 '  
            onMouseLeave={() => setIsDropdownOpen2(false)}
>
<ul className="bg-[#e8e8e6] shadow-lg w-60 rounded-lg text-sm">
<Link href={"/personalArtworks"}>
<li className=" block px-4 py-2 hover:bg-[#d1d1cf]">
    Personal Artworks
</li>
  </Link>
  <Link href={"/roughArtworks"}>
<li className=" block px-4 py-2 hover:bg-[#d1d1cf]">
    Rough Artworks
</li>
  </Link>
<Link href={"/sketchBooks"}>
<li className="block px-4 py-2 hover:bg-[#d1d1cf]">
    Sketch Books
</li>
  </Link>

  <Link href={"/commissions"}>
  <li className=" block px-4 py-2 hover:bg-[#d1d1cf]">
    Commissions
  </li>
  </Link>
</ul>
</div>
            )}
              </li>
         {isDropdownOpen2 && (
          <div className=' h-20'>
            
          </div>
         )}
              <li>
              <Link href={'/about'} className='hover:font-bold cursor-pointer hover:text-[#a9bdcf]'>
              About
              </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Links should only be visible on larger screens */}

        <div className="links hidden md:block">
          <ul className='flex justify-between font-semibold mr-5'>
            <li>
              <Link href={"/"} className='hover:font-semibold hover:text-[#a9bdcf] cursor-pointer'>
                Home
              </Link>
            </li>
            <div className='relative' ref={dropdownRef}>
              <li>
                <a
                  onClick={toggleDropdown}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  
                  href="portfolio"
                  className='flex items-center hover:font-bold cursor-pointer hover:text-[#a9bdcf]'
                >
                  Portfolio <IoIosArrowDown className='ml-3' />
                </a>
              </li>
              <div onMouseLeave={() => setIsDropdownOpen(false)} className={`dropdown ${isDropdownOpen ? 'open' : ''} mt-3 text-[#545353] bg-[#e8e8e6] left-0 top-full text-sm`}>
                <ul className="font-medium">
                  <li className=" border-b-2 border-[#C1C1C1] py-2 px-3">
                    <Link href={"/personalArtworks"}>
                      Personal Artworks
                    </Link>
                  </li>
                  <li className=" border-b-2 border-[#C1C1C1] py-2 px-3">
                    <Link href={"/roughArtworks"}>
                      Rough Artworks
                    </Link>
                  </li>
                  <li className=" border-b-2 border-[#C1C1C1] py-2 px-3">
                  <Link href={"/sketchBooks"}>
                      Sketch Books
                    </Link>
                  </li>
                 
                    <li className=" border-b-2  py-2 px-3">
                    <Link href={"/commissions"}>
                      Commissions
                    </Link>
                    </li>
                </ul>
              </div>
            </div>
            <li>
              <Link href={'/about'} className='hover:font-bold cursor-pointer hover:text-[#a9bdcf]'>
              About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}