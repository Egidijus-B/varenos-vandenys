import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="text-blue-900 px-8 py-16 lg:py-10 fade-in">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* First Main Column */}
        <div className="flex flex-col gap-12 w-full">
          {/* Top Row - Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Column 1 - Logo */}
            <div className="flex flex-col items-center justify-center lg:justify-start">
              <img
                src={logo}
                alt="Company Logo"
                className="md:h-12 sm:h-12 h-8"
              />
            </div>
            {/* Column 2 */}
            <div className="flex flex-col items-center lg:items-start">
              <h2 className="font-bold mb-4 text-xl text-center lg:text-left">Darbo laikas</h2>
              <ul className="space-y-1">
                <li className="flex items-center">
                  <p>Pirmadienis – penktadienis:</p>
                </li>
                <li className="flex items-center">
                  <p>8:00 – 12:00</p>
                </li>
                <li className="flex items-center">
                  <p>13:00 – 17:00</p>
                </li>
              </ul>
            </div>
          </div>
          {/* Rekvizitai Section */}
          <div>
            <h2 className="font-bold mb-4 text-xl text-center lg:text-left">Rekvizitai</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <p className="p-1 texwt-blue-900">Įmonės kodas: 184626819</p>
                <p className="p-1 text-blue-900">PVM mokėtojo kodas: LT846268113</p>
              </div>
              <div>
                <p className="p-1 text-blue-900">Adresas: Žalioji g. 26, LT-65210 Varėna</p>
                <p className="p-1 text-blue-900 flex items-center">
                  Bendrasis telefonas: 
                  <a href="tel:831031683" className="hover:text-gray-400 transition duration-300 ml-2">
                    +370 310 31683
                  </a>
                </p>
                <p className="p-1 text-blue-900 flex items-center">
                  Elektroninis paštas:
                  <a href="mailto:info@varenosvandenys.lt" className="hover:text-gray-400 transition duration-300 ml-2">
                    info@varenosvandenys.lt
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Second Main Column */}
        <div className="flex flex-col lg:flex-row gap-16 w-full">
          {/* Links Section */}
          <div className="flex-1">
            <h2 className="font-bold mb-4 text-xl text-center lg:text-left">Nuorodos</h2>
            <ul className="space-y-1">
              {["gedimai", "kainos", "abonementai", "projektai", "kontaktai"].map((link, index) => (
                <li key={index} className="p-1 hover:translate-x-[-4px] transition-transform duration-300">
                  <Link to={`/${link}`}>{link.charAt(0).toUpperCase() + link.slice(1)}</Link> {/* Use Link here */}
                </li>
              ))}
            </ul>
          </div>
          {/* Additional Info Section */}
          <div className="flex-1">
            <h2 className="font-bold mb-4 text-xl text-center lg:text-left">Papildoma informacija</h2>
            <ul className="space-y-1">
              {["teisine-informacija", "gyvenamosios-vietoves", "asmens-duomenu-apsauga", "korupcijos-prevencija", "darbo-uzmokestis", "viesieji-pirkimai", "administracija", "karjera"].map((link, index) => (
                <li key={index} className="p-1 hover:translate-x-[-4px] transition-transform duration-300">
                  <Link to={`/${link}`}>{link.charAt(0).toUpperCase() + link.slice(1).replace(/-/g, ' ')}</Link> {/* Use Link here */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Horizontal Line */}
      <hr className="border-blue-900 my-8" />
      {/* Copyright Section */}
      <div className="container mx-auto text-center mt-8">
        <p>© 2024 UAB Varenos vandenys</p>
      </div>
    </footer>
  );
};

export default Footer;












