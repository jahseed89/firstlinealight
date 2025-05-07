import React from 'react';
import { Link } from 'react-router-dom';
import { GoSearch } from "react-icons/go";
import siteLogo from '../../assets/logo.png'
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  return (
    <div className='bg-gray-800 py-3 lg:py-0 px-8'>
      <div className='flex justify-between items-center text-white'>
      <div className='text-white-500 font-800 text-xl mr-4 lg:hidden'><RiMenu3Fill className='text-white-500 font-800 text-xl' /></div>
        <ul className='hidden lg:flex space-x-4 font-900'>
          <li className='text-white-500'>
            <Link to="/">HOME</Link>
          </li>
          <li className='text-white-500 ml-4'>
            <Link to="/about">ABOUT</Link>
          </li>
          <li className='text-white-500 ml-4'>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className='text-white-500 ml-4'>
            <Link to="/cars">CARS</Link>
          </li>
          <li className='text-white-500 ml-4'>
            <Link to="/blog">ENQUIRES</Link>
          </li>
        </ul>
        <div className='flex items-center space-x-2'>
          <div className='relative'>
            <span className='absolute top-2.5 pl-2 opacity-50 z-50'><GoSearch className='text-white-500 cursor-pointer' size={20} /></span>
            <input type="text" placeholder='Search for your car' className='border border-white-500 py-1.5 lg:py-2 pl-10 pr-2 rounded-md bg-white-500 w-60 lg:w-90 italic' />
          </div>
          <div><img src={siteLogo} alt="site-Logo" className='w-[100px]' /></div>
        </div>
      </div>
    </div>
  )
}

export default Header
