import React, { useState, useRef, useEffect } from 'react';
import accessibilityIcon from '../assets/accessibility.png';

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const increaseTextSize = () => {
    if (fontSize < 24) {
      const newSize = fontSize + 1;
      setFontSize(newSize);
      document.body.style.fontSize = `${newSize}px`;
    }
  };

  const decreaseTextSize = () => {
    if (fontSize > 12) {
      const newSize = fontSize - 1;
      setFontSize(newSize);
      document.body.style.fontSize = `${newSize}px`;
    }
  };

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.body.classList.toggle('high-contrast');
  };

  const resetAccessibility = () => {
    setFontSize(16);
    setIsHighContrast(false);
    document.body.style.fontSize = '16px';
    document.body.classList.remove('high-contrast');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={toggleMenu}
        className="accessibility-button"
        aria-label="Open Accessibility Menu"
        aria-pressed={isOpen}
      >
        <img src={accessibilityIcon} alt="Accessibility" className="accessibility-icon" />
      </button>

      {/* Accessibility Menu */}
      <div
        ref={menuRef}
        className={`accessibility-menu ${isOpen ? 'open' : 'closed'}`}
      >
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className="close-button"
          aria-label="Close Accessibility Menu"
        >
          &times;
        </button>

        {/* Accessibility Controls */}
        <ul className="accessibility-controls">
          <li>
            <button onClick={increaseTextSize} aria-label="Increase Text Size" aria-pressed={fontSize > 16}>
              Increase Text Size
            </button>
          </li>
          <li>
            <button onClick={decreaseTextSize} aria-label="Decrease Text Size" aria-pressed={fontSize < 16}>
              Decrease Text Size
            </button>
          </li>
          <li>
            <button onClick={toggleHighContrast} aria-label="Toggle High Contrast" aria-pressed={isHighContrast}>
              Toggle High Contrast
            </button>
          </li>
          <li>
            <button onClick={resetAccessibility} aria-label="Reset Accessibility Settings">
              Reset
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AccessibilityMenu;



