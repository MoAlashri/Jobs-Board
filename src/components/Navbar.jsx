import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import { RiCloseLargeFill } from 'react-icons/ri';
import { NavLinks } from '../constants/NavLinks';
import { useOutsideClick } from '../hooks/useOutsideClick';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useOutsideClick(() => {
    if (isOpen) setIsOpen(false);
  });

  return (
    <header className="flex items-center justify-between w-full h-16 p-6 mx-auto mt-0 bg-white rounded-none shadow-md xl:mt-5 xl:rounded-md max-w-7xl">

      {/* Logo or Brand Name */}
      <NavLink to="/">
        {/* <img src={jobIcon} alt="job icon" height={30} width={30} className="" /> */}
        <h1 className="text-2xl font-bold text-chambray-800 font-poppins">Jobs</h1>
      </NavLink>

      {/* Desktop Navigation Links */}
      <ul className="hidden gap-4 md:flex">
        {NavLinks.map((link) => {
          const Icon = link.icon;
          return (
            <li key={link.label}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 py-3 px-4 rounded transition duration-300 ${isActive
                    ? 'text-chambray-800 font-semibold bg-chambray-100'
                    : 'text-chambray-950 font-semibold hover:text-chambray-800 hover:bg-chambray-100'
                  }`
                }
              >
                {Icon && <Icon className="text-lg" />}
                {link.label}
              </NavLink>
            </li>
          );
        })}
      </ul>

      {/* Desktop Login Button */}
      <NavLink to="/login">
        <button className="hidden px-4 py-2 font-semibold transition duration-300 ease-in-out rounded-md bg-chambray-500 text-chambray-50 hover:bg-chambray-600 md:block">
          Get Started
        </button>
      </NavLink>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-chambray-800 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <RiCloseLargeFill className="w-6 h-6 transition duration-200" />
        ) : (
          <HiOutlineMenu className="transition duration-200 w-7 h-7" />
        )}
      </button>

      {/* Mobile List */}
      {isOpen && (
        <div
          ref={menuRef}
          className={`absolute left-0 z-50 w-full p-4 bg-white rounded-b-md shadow-md top-[64px] 
             md:hidden`}>
          <ul className='flex flex-col'>
            {NavLinks.map((link) => {
              const Icon = link.icon
              return (
                <li key={link.label}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 text-left w-full text-lg  font-semibold border-b border-gray-200 transition-all duration-300 ease-in-out ${isActive ? 'bg-gray-100 text-chambray-800' : 'text-chambray-950 hover:bg-gray-100'
                      }`
                    }
                  >
                    {Icon && <Icon/>}
                    {link.label}
                  </NavLink>
                </li>
              )
            })}
          </ul>
          <NavLink to="/login">
            <button className="w-full px-4 py-2 mt-5 font-semibold transition duration-300 ease-in-out rounded-md bg-chambray-500 text-chambray-50 hover:bg-chambray-600">
              Get Started
            </button>
          </NavLink>
        </div>
      )}
    </header>
  );
}
