import React, { useState, useRef, useEffect } from 'react';
import accessibilityIcon from '../assets/accessibility.png'; // Assuming you use an icon

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // Track menu visibility
  const [fontSize, setFontSize] = useState(16); // Default font size
  const [isHighContrast, setIsHighContrast] = useState(false);
  const menuRef = useRef(null); // Create a ref for the menu

  // Toggle accessibility menu
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };

  // Close the menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Increase font size with a limit
  const increaseTextSize = () => {
    if (fontSize < 24) {
      setFontSize(prevSize => prevSize + 1);
      document.body.style.fontSize = `${fontSize + 1}px`;
    }
  };

  // Decrease font size with a limit
  const decreaseTextSize = () => {
    if (fontSize > 12) {
      setFontSize(prevSize => prevSize - 1);
      document.body.style.fontSize = `${fontSize - 1}px`;
    }
  };

  // Toggle high contrast mode
  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.body.classList.toggle('high-contrast');
  };

  // Reset accessibility settings
  const resetAccessibility = () => {
    setFontSize(16);
    document.body.style.fontSize = '16px';
    setIsHighContrast(false);
    document.body.classList.remove('high-contrast');
  };

  // Close the menu if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Accessibility Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-blue-400 p-3 rounded-l-md z-50"
        aria-label="Open Accessibility Menu"
      >
        <img src={accessibilityIcon} alt="Accessibility" className="w-6 h-6" />
      </button>

      {/* Accessibility Menu */}
      <div
        ref={menuRef} // Attach ref to the menu div
        className={`fixed top-0 right-0 h-full bg-white p-4 shadow-lg z-50 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300`}
      >
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 text-black text-2xl font-bold p-2"
          style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
        >
          &times; {/* Close symbol */}
        </button>

        {/* Accessibility Controls */}
        <ul className="space-y-4 mt-10 text-black">
          <li onClick={increaseTextSize} className="p-2 hover:bg-gray-100 cursor-pointer">
            Increase Text Size
          </li>
          <li onClick={decreaseTextSize} className="p-2 hover:bg-gray-100 cursor-pointer">
            Decrease Text Size
          </li>
          <li onClick={toggleHighContrast} className="p-2 hover:bg-gray-100 cursor-pointer">
            Toggle High Contrast
          </li>
          <li onClick={resetAccessibility} className="p-2 hover:bg-gray-100 cursor-pointer">
            Reset
          </li>
        </ul>
      </div>
    </>
  );
};

export default AccessibilityMenu;


