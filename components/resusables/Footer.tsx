import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=' bg-[#e1e0e0] flex justify-center space-x-8 text-lg text-[#545353] py-8'>
      <a href="http://Facebook.com/obohdraws" target='_blank' rel='noopener noreferrer'>
        <FaFacebookF className=' hover:text-[#a9bdcf] cursor-pointer'/></a>
        <a href="http://instagram.com/obohdraws" target='_blank' rel='noopener noreferrer'>
        <FaInstagram className=' hover:text-[#a9bdcf] cursor-pointer'/></a>
        <a href="http://twitter.com/obohdraws" target='_blank' rel='noopener noreferrer'>
        <FaTwitter className=' hover:text-[#a9bdcf] cursor-pointer' /></a>
        <a href="http://tiktok.com/obohdraws" target='_blank' rel='noopener noreferrer'>
        <FaTiktok  className=' hover:text-[#a9bdcf] cursor-pointer'/></a>
    </div>
  )
}
