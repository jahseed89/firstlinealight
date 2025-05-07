import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoSearch } from "react-icons/go";
import siteLogo from '../../assets/logo.png';
// import { RiMenu3Fill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { TfiMenuAlt } from "react-icons/tfi";

const carOptions = [
  'Benz C-Class',
  'Benz E-Class',
  'Benz G-Wagon',
  'Toyota Camry',
  'Toyota Corolla',
  'Honda Civic',
  'Honda Accord',
  'BMW X5',
  'BMW 3 Series'
];

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
    <div className='bg-gray-800 py-3 lg:py-0 px-8'>
      <div className='flex justify-between items-center text-white'>
        <div className='text-white font-bold text-xl mr-4 lg:hidden'>
          <TfiMenuAlt onClick={toggleMenu} className='text-white text-xl' />
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
                    ? 'border-b-2 border-grey-600 font-bold text-white pb-1'
                    : 'text-white hover:text-grey-400'
                }
              >
                {item.label}
              </NavLink>
              {/* <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? 'relative text-white font-bold after:content-[""] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-[70%] after:border-b-2 after:border-grey-600'
                    : 'text-white hover:text-grey-400'
                }
              >
                {item.label}
              </NavLink> */}
            </li>
          ))}
        </ul>
        <div className='flex items-center space-x-2 relative'>
          <div className='relative w-60 lg:w-80'>
            <span className='absolute top-2.5 left-2 opacity-50 z-10'>
              <GoSearch className='text-white cursor-pointer' size={20} />
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder='Search for your car'
              className='border border-white py-2 pl-10 pr-2 rounded-md text-whit-500 w-full italic'
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
            <img src={siteLogo} alt="site-logo" className='w-[100px]' />
          </div>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <ul className='lg:hidden absolute top-16 left-0 right-0 bg-gray-400 text-white font-semibold text-center space-y-2 py-4 shadow-md rounded-b-md z-50'>
          <li className='hover:bg-gray-700 py-2'>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>HOME</Link>
          </li>
          <li className='hover:bg-gray-700 py-2'>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
          </li>
          <li className='hover:bg-gray-700 py-2'>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)}>ENQUIRES</Link>
          </li>
          <li className='hover:bg-gray-700 py-2'>
            <Link to="/cars" onClick={() => setIsMenuOpen(false)}>CARS</Link>
          </li>
          <li className='hover:bg-gray-700 py-2'>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;