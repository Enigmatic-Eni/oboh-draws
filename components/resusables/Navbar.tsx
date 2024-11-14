import React from 'react'

import { IoIosArrowDown } from "react-icons/io";


export default function Navbar() {
  return (
    <div className=' fixed z-40 w-full bg-[#e8e8e6] text-[#545353]'>
    <div className=' grid grid-cols-2 items-center justify-between px-6 py-1 '>
        <div>
            <img src="logo.jpg" alt="" className=' h-14 w-14 rounded-full' />
        </div>
        <div className="links">
            <ul className=' flex justify-between  font-bold mr-5'>
                <li><a href="#" className=' hover:font-bold hover:text-[#a9bdcf] cursor-pointer'>Home</a></li>
                <li><a href="#" className=' flex items-center hover:font-bold cursor-pointer hover:text-[#a9bdcf]'>Portfolio <IoIosArrowDown className=' ml-3'/></a></li>
                <li><a href="#" className=' hover:font-bold cursor-pointer hover:text-[#a9bdcf]'>About</a></li>
            </ul>

        </div>


    </div>
   
    </div>
  )
}
