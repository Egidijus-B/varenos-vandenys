import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import accessibilityIcon from '../assets/accessibility.png';
import siteMapIcon from '../assets/sitemap.png';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [language, setLanguage] = useState('LT');
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'LT';
    setLanguage(savedLanguage);
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const toggleAccessibilityMenu = () => {
    setIsAccessibilityOpen(prevState => !prevState);
  };

  // Accessibility functions
  const increaseTextSize = () => {
    const currentSize = parseFloat(window.getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (currentSize + 1) + 'px';
  };

  const decreaseTextSize = () => {
    const currentSize = parseFloat(window.getComputedStyle(document.body).fontSize);
    if (currentSize > 10) {
      document.body.style.fontSize = (currentSize - 1) + 'px';
    }
  };

  const increaseLineSpacing = () => {
    const currentLineHeight = parseFloat(window.getComputedStyle(document.body).lineHeight);
    document.body.style.lineHeight = (currentLineHeight + 0.1).toString();
  };

  const decreaseLineSpacing = () => {
    const currentLineHeight = parseFloat(window.getComputedStyle(document.body).lineHeight);
    if (currentLineHeight > 1) {
      document.body.style.lineHeight = (currentLineHeight - 0.1).toString();
    }
  };

  const toggleHighContrast = () => {
    document.body.classList.toggle('high-contrast');
  };

  return (
    <header className="w-screen h-[3.125rem] md:h-[7.5rem] sm:h-[7.5rem] bg-white p-4 fade-in lg:z-50">
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] mx-auto relative">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="company logo"
            className="md:h-[3.125rem] sm:h-[3.125rem] h-[1.5625rem] sm:ml-10 ss:ml-10 md:ml-10 ml-5"
          />
        </div>

        {/* Contact Info Section */}
        <div className="hidden border-solid rounded md:inline-block sm:inline-block text-white bg-[#001AA4] border-2 md:h-[4.25rem] md:w-[15.375rem] sm:w-[15.375rem] sm:h-[4.25rem] md:p-2 sm:p-2 text-center">
          <div>Bendrasis telefonas</div>
          <div><a href="tel:831031683">+370 310 31683</a></div>
        </div>

        {/* Accessibility, Site Map, Language Buttons */}
        <div className="flex items-center space-x-4 relative z-20">
          {/* Accessibility Button with Dropdown */}
          <div className="relative">
            <button
              className="text-gray-500 hover:bg-transparent focus:outline-none"
              aria-label="Accessibility options"
              onClick={toggleAccessibilityMenu}
            >
              <img src={accessibilityIcon} alt="Accessibility" className="w-6 h-6" />
            </button>
            {isAccessibilityOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-50">
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={increaseTextSize}>
                  Increase Text Size
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={decreaseTextSize}>
                  Decrease Text Size
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={increaseLineSpacing}>
                  Increase Line Spacing
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={decreaseLineSpacing}>
                  Decrease Line Spacing
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={toggleHighContrast}>
                  Toggle High Contrast
                </li>
              </ul>
            )}
          </div>

          {/* Site Map Button */}
          <button
            className="text-gray-500 hover:bg-transparent focus:outline-none"
            aria-label="Site Map"
            onClick={() => {
              window.location.href = '#site-map'; // Placeholder
            }}
          >
            <img src={siteMapIcon} alt="Site Map" className="w-6 h-6" />
          </button>

          {/* Language Buttons */}
          <div className="flex items-center space-x-2">
            <button
              className={`py-1 px-2 ${language === 'EN' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} rounded`}
              onClick={() => handleLanguageChange('EN')}
            >
              EN
            </button>
            <button
              className={`py-1 px-2 ${language === 'LT' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} rounded`}
              onClick={() => handleLanguageChange('LT')}
            >
              LT
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden" onClick={() => setToggle(!toggle)}>
          <img
            src={!toggle ? menu : close}
            alt="menu"
            className="w-[28px] h-[28px] object-contain mr-10"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {toggle && (
        <div className="fixed top-0 left-0 w-full h-[100vh] bg-white z-30">
          <div className="flex justify-end p-4">
            <img
              src={close}
              alt="close menu"
              className="w-[28px] h-[28px] object-contain bg-transparent"
              onClick={() => setToggle(false)}
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





















