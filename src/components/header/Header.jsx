import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoSearch } from "react-icons/go";
import siteLogo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { RiMenu3Line } from "react-icons/ri";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { carOptions } from '../../../utiles';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setFilteredCars([]);
    } else {
      const filtered = carOptions.filter(car =>
        car.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCars(filtered);
    }
  };

  return (
    <div className='bg-black border border-b-white py-2 lg:py-0 px-4 lg:px-8'>
      <div className='flex justify-between items-center text-white'>
        <div className='text-white font-bold text-xl mr-4 lg:hidden'>
          <RiMenu3Line onClick={toggleMenu} className='text-white text-xl' />
        </div>
        <ul className='hidden lg:flex space-x-4 font-bold'>
          {[
            { path: '/', label: 'HOME' },
            { path: '/about', label: 'ABOUT' },
            { path: '/blog', label: 'ENQUIRES' },
            { path: '/cars', label: 'CARS' },
            { path: '/contact', label: 'CONTACTS' }
          ].map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-2 border-grey-600 font-bold text-white text-xl pb-1'
                    : 'text-white text-xl hover:text-grey-400'
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className='flex items-center space-x-2 relative'>
          <div className='relative w-60 lg:w-80 lg:mr-150'>
            <span className='absolute top-3 left-2 opacity-50 z-10  lg:top-3.5'>
              <GoSearch className='text-white cursor-pointer' size={20} />
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder='Search for your car'
              className='border border-white py-1.5 lg:py-3 pl-10 pr-2 lg:pr-6 rounded-md text-whit-500 w-full italic'
            />
            {filteredCars.length > 0 && (
              <ul className='absolute z-20 bg-white text-black w-full mt-1 rounded-md shadow-lg max-h-60 overflow-y-auto'>
                {filteredCars.map((car, index) => (
                  <li
                    key={index}
                    className='px-4 py-2 hover:bg-gray-200 cursor-pointer'
                    onClick={() => {
                      setSearchTerm(car);
                      setFilteredCars([]);
                    }}
                  >
                    {car}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <img src={siteLogo} alt="site-logo" className='w-[100px] lg:w-[120px]' />
          </div>
        </div>
      </div>
      {/* *************Dropdown Menu************ */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className='lg:hidden absolute top-24 left-0 bg-white text-black font-semibold text-center space-y-2 py-4 shadow-md rounded-r-md z-50 w-[90%] h-auto'
          >
            <li className='hover:black-100 py-4'>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>HOME</Link>
            </li>
            <li className='hover:black-100 py-4'>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
            </li>
            <li className='hover:black-100 py-4'>
              <Link to="/blog" onClick={() => setIsMenuOpen(false)}>ENQUIRES</Link>
            </li>
            <li className='hover:black-100 py-4'>
              <Link to="/cars" onClick={() => setIsMenuOpen(false)}>CARS</Link>
            </li>
            <li className='hover:black-100 py-4'>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;