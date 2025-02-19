import React from 'react'
import { SiCreatereactapp } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LuBookOpen } from "react-icons/lu";


const Footer = () => {
  return (
    <div className='bg-white border-t border-primary py-7 shadow-lg'>
        <div className='container  flex items-center md:flex-row flex-col font-coza text-primary text-2xl justify-between'>
         <div>
          <h1><LuBookOpen className='size-40'/></h1>
         </div>
         <div className='flex flex-col font-bold font-primary items-center mt-4'>
          <p className='font-hero font-normal text-4xl md:text-7xl'>Pages</p>
          <a className='' href="#">Home </a>
          <a href="#">About</a>
          <a href="#">Books</a>
          <a href="#">Contact</a>
          
          
      
         </div>
         <div className='flex flex-col items-center gap-2 mt-4'>
          <p className='font-hero text-4xl md:text-7xl'>Contact info</p>
          <a className='hover:text-secondary  ' href="#"><FaFacebookF /></a>
          <a className='hover:text-secondary '  href="#"><CiLinkedin /></a>
          <a className='hover:text-secondary '  href="#"><FaInstagram /></a>
          <a className='hover:text-secondary '  href="#"><FaGithub /></a>


         </div>
        </div>
    </div>
  )
}

export default Footer