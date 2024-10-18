import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Nav = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleOutsideClick = useCallback((e) => {
    if (inputRef.current && !inputRef.current.contains(e.target) && searchQuery === '') {
      setSearchOpen(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <nav className="w-screen md:h-[4rem] lg:block hidden items-center p-4 fade-in lg:z-10 bg-gray-100 border-t border-gray-300 shadow-md">
      <ul className="flex flex-col md:flex-row md:justify-center sm:flex-row sm:justify-center justify-center items-center w-full h-full md:max-w-[1240px] mx-auto md:gap-x-4 md:gap-y-2">
        {[
          { name: 'GEDIMAI TINKLUOSE', link: '/gedimai-tinkluose' },
          { name: 'KAINOS', link: '/kainos' },
          { name: 'ABOEMENTŲ PRISIJUNGIMAS', link: '/abonementu-prisijungimas' },
          { name: 'PROJEKTAI', link: '/projektai' },
          { name: 'KONTAKTAI', link: '/kontaktai' },
        ].map((item, index) => (
          <li key={index} className="p-2">
            <Link
              to={item.link} // Use Link and "to" prop for routing
              className="text-[#001AA4] font-bold transition duration-300 hover:text-gray-400"
            >
              {item.name}
            </Link>
          </li>
        ))}
        <li className="p-2 flex items-center">
          {!searchOpen ? (
            <div className="flex items-center cursor-pointer" onClick={handleSearchClick}>
              <span className="text-[#001AA4] font-bold mr-2">PAIEŠKA</span>
              <FaSearch className="text-[#001AA4] font-bold" />
            </div>
          ) : (
            <div className="flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="p-2 rounded-md text-black border border-gray-300 focus:border-[#001AA4] outline-none transition duration-200"
                placeholder="Search..."
              />
              <FaTimes
                className="ml-2 text-[#001AA4] cursor-pointer"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery('');
                }}
              />
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;








