import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";


export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (event) => {
    event.preventDefault(); // Prevent default link behavior
    setIsDropdownOpen(prev => !prev);
  };

  const toggleDropdown2 = (event) => {
    setIsDropdownOpen2(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
      setIsDropdownOpen2(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='fixed z-40 w-full bg-[#e8e8e6] text-[#545353]'>
      <div className='grid grid-cols-2 items-center justify-between px-6 py-1'>
        <div>
          <img src="logo.jpg" alt="" className='h-14 w-14 rounded-full' />
        </div>
        <div className="links">
          <ul className='flex justify-between font-semibold mr-5'>
            <li>
              <a href="#" className='hover:font-semibold hover:text-[#a9bdcf] cursor-pointer'>Home</a>
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
              <div className={`dropdown ${isDropdownOpen ? 'open' : ''} mt-3 text-[#545353] bg-[#e8e8e6] left-0 top-full text-sm`}>
                <ul className="font-medium">
                  <li className=" border-b-2 border-[#C1C1C1] py-2 px-3">
                    <a href="#">Personal Artworks</a>
                  </li>
                  <li className=" border-b-2 border-[#C1C1C1] py-2 px-3">
                    <a href="#">Rough Artworks</a>
                  </li>
                  <li className=" border-b-2 border-[#C1C1C1] py-2 px-3">
                    <a href="#">Sketch Books</a>
                  </li>
                  <div className='relative' ref={dropdownRef}>
                  <li className=" border-b-2  py-2 px-3">
                    <a href="#" className='flex items-center' onClick={toggleDropdown2}  onMouseEnter={() => setIsDropdownOpen2(true)} >Commissions  <FaAngleRight className='ml-3' /> </a>
                  </li>
                  <div className={`dropdown ${isDropdownOpen2 ? 'open' : ''} mt-3 text-[#545353] bg-[#e8e8e6] top-[-12px] left-[150px]`}>
                <ul className="font-medium">
                  <li className=" border-b-2 border-[#C1C1C1] py-2 px-3">
                    <a href="#">Editorials</a>
                  </li>
                  <li className=" border-b-2 border-[#C1C1C1] py-2 px-3">
                    <a href="#">Cover Arts</a>
                  </li>
                  <li className=" border-b-2  py-2 px-3">
                    <a href="#">Children Books</a>
                  </li>
                </ul>
              </div>
                  </div>
                </ul>
              </div>
            </div>
            <li>
              <a href="#" className='hover:font-bold cursor-pointer hover:text-[#a9bdcf]'>About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}