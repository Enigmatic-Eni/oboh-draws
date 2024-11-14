import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=' bg-[#d5d4d3] flex justify-center space-x-8 text-lg text-[#545353] py-8'>
        <FaFacebookF className=' hover:text-[#a9bdcf] cursor-pointer'/>
        <FaInstagram className=' hover:text-[#a9bdcf] cursor-pointer'/>
        <FaTwitter className=' hover:text-[#a9bdcf] cursor-pointer' />
    </div>
  )
}
