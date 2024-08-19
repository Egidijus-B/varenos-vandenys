import React, { useState } from 'react';
import logo from '../assets/logo.png';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);

  return (
    <header className="w-screen h-[3.125rem] md:h-[7.5rem] sm:h-[7.5rem] z-10 bg-white p-4 fade-in">
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] mx-auto">
        <div className="flex items-center">
          <img
            src={logo}
            alt="company logo"
            className="md:h-[3.125rem] sm:h-[3.125rem] h-[1.5625rem] sm:ml-10 ss:ml-10 md:ml-10 ml-5"
          />
        </div>
        <div className="hidden border-solid rounded md:inline-block sm:inline-block text-white bg-[#001AA4] border-2 md:h-[4.25rem] md:w-[15.375rem] sm:w-[15.375rem] sm:h-[4.25rem] md:p-2 sm:p-2 text-center">
          <div>Bendrasis telefonas</div>
          <div><a href="tel:831031683">831031683</a></div>
        </div>
        <div className="lg:hidden" onClick={handleClick}>
          <img src={!toggle ? menu : close} alt="menu" className="w-[28px] h-[28px] object-contain mr-10" />
        </div>
      </div>
      {/* Mobile Menu */}
      {toggle && (
        <div className="fixed top-0 left-0 w-full h-[100vh] bg-white z-20">
          <div className="flex justify-end p-4">
            <img
              src={close}
              alt="close menu"
              className="w-[28px] h-[28px] object-contain bg-transparent"
              onClick={handleClick}
              style={{ background: 'none' }} // Ensures there's no background
            />
          </div>
          <ul className="flex flex-col items-center w-full text-blue-500">
            <li className="py-2"><a href="#gedimai">Gedimai tinkluose</a></li>
            <li className="py-2"><a href="#kainos">Kainos</a></li>
            <li className="py-2"><a href="#abonementai">Abonementų prisijungimas</a></li>
            <li className="py-2"><a href="#projektai">Projektai</a></li>
            <li className="py-2"><a href="#kontaktai">Kontaktai</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;






