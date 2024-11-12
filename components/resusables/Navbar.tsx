import React from 'react'
import { Button } from '../ui/button'
import { IoIosArrowDown } from "react-icons/io";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  return (
    <div className=' fixed z-40 w-full '>
    <div className=' grid grid-cols-2 items-center justify-between px-3 '>
        <div>
            <img src="logo.jpg" alt="" className=' h-16 w-16' />
        </div>
        <div className="links">
            <ul className=' flex justify-between text-white font-bold mr-5'>
                <li><a href="#" className=' hover:font-bold hover:text-[#a9bdcf] cursor-pointer'>Home</a></li>
                <li><a href="#" className=' flex items-center hover:font-bold cursor-pointer hover:text-[#a9bdcf]'>Portfolio <IoIosArrowDown className=' ml-3'/></a></li>
                <li><a href="#" className=' hover:font-bold cursor-pointer hover:text-[#a9bdcf]'>About</a></li>
            </ul>

        </div>


    </div>
    </div>
  )
}
